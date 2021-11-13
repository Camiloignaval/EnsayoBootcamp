const { Pool } = require("pg");


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "Kagrmarukelep92",
    database: 'bikeshops',
    port: 5432,
});

const consultaComboBox = async (criterio) => {
    try {
        const result = await pool.query(`SELECT * FROM ${criterio}`);
        return result.rows;
    } catch (error) {
        console.log(error.code);
        return error;
    }
};

const consultaFiltrado = async () => {
    consulta = `select t.store_name ,p.product_id ,p.product_name ,s.quantity from stocks s 
  inner join stores t 
  on s.store_id = t.store_id 
  inner join products p 
  on s.product_id = p.product_id 
  inner join categories c 
  on c.category_id = p.category_id `

    try {
        const result = await pool.query(consulta);
        return result.rows;
    } catch (error) {
        console.log(error.code);
        return error;
    }
}






module.exports = { consultaComboBox, consultaFiltrado };