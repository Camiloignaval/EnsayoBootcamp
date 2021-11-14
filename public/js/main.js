// const { Swal } = require("sweetalert2")


const stores = document.getElementById('selectTienda')
const categories = document.getElementById('selectCat')
const brands = document.getElementById('selectMarca')
const tabla = document.getElementById('tabla')

const apiKey = '9YEXObWZvbzuHlAIyBLP7YKY10FVAJQv'

const desplegarVerMas = async (e, link) => {
    // const img = await getSticker()
    const datos = await fetch(`http://localhost:3000/producto/${e}`)
    const [data] = await datos.json()
    Swal.fire({
        title: `<strong><u>${data.product_name}</u></strong>`,
        icon: 'info',
        html:
            `<div>
            <img src=${link}/>
            <div class='display-4'>Precio: $${data.list_price}</div>
            <div class='display-6'>Año fabricación: ${data.model_year}</div>
            </div>`,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
    })
}

const getSticker = async (cant) => {
    const link = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=bicycle&limit=${cant}`
    const resp = await fetch(link)
    const { data } = await resp.json()
    return data
}

// images.downsized_medium.url


const consultarDatos = async (dato) => {
    const resp = await fetch(`http://localhost:3000/consulta/${dato}`)
    const data = await resp.json()
    return data
}

const rellenarSelect = async (select) => {
    const singular = (select == 'categories') ? 'category' : select.substring(0, select.length - 1);
    consultarDatos(select)
        .then((element) => {
            element.map((e) => {
                eval(select).innerHTML += `<option value=${e[singular + '_id']}>${e[singular + '_name']}</option>`
            })
        })
}

const rellenarTabla = async (datos) => {
    const linkGifs = await getSticker(datos.length)
    const links = linkGifs.map((e) => e.images.fixed_height_downsampled.url)
    tabla.innerHTML = ''
    let cont = 0
    datos.map((e) => {
        tabla.innerHTML += ` <tr>
        <td>${e.store_name}</td>
        <td>${e.product_id}</td>
        <td>@${e.product_name}</td>
        <td>${e.quantity}</td>
        <td><button onclick=desplegarVerMas(${e.product_id},'${links[cont]}') id=${e.product_id} type="button" class="btn btn-outline-info btnVerMas">VER</button>
        </td>
    </tr>`;
        cont < 50 ? cont++ : cont = 0
    })

}
document.getElementById('btnBuscar').addEventListener('click', async () => {
    const datos = await fetch(`http://localhost:3000/filtrado/${stores.value}&${categories.value}&${brands.value}`)
    const data = await datos.json()
    if (data.length == 0) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tu busqueda no arrojo resultados',
        })
    }

    rellenarTabla(data)
})

// FUNCIONES PARA CUANDO CARGUE PAGINA
rellenarSelect('stores')
rellenarSelect('categories')
rellenarSelect('brands')

fetch(`http://localhost:3000/filtrado/null&null&null`)
    .then((resp) => {
        resp.json().then((data) => {
            rellenarTabla(data)
        })
    })


