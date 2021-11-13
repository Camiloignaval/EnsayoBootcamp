const express = require('express');
const bodyParser = require('body-parser');
const { consultaComboBox, consultaFiltrado } = require('./consultas');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('public/js'));

// app.use('/static', express.static(__dirname + '/public'));



app.listen(3000, () => {
    console.log('Server on port 3000')
})

app.get('/', async (req, res) => {
    res.render('index.html');
})

app.get('/consulta/:cat', async (req, res) => {
    const { cat } = req.params;
    console.log(cat)

    try {
        const productos = await consultaComboBox(cat);
        res.status(200).send(JSON.stringify(productos))
    } catch (e) {
        res.status(500).send({
            error: `Algo salio mal...${e}`,
            code: 500
        })
    }
})

app.get('/filtrado/', async (req, res) => {
    // const { cat } = req.params;
    // console.log(cat)

    try {
        const productos = await consultaFiltrado();
        res.status(200).send(JSON.stringify(productos))
    } catch (e) {
        res.status(500).send({
            error: `Algo salio mal...${e}`,
            code: 500
        })
    }
})