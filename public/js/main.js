// const { Swal } = require("sweetalert2")


const stores = document.getElementById('selectTienda')
const categories = document.getElementById('selectCat')
const brands = document.getElementById('selectMarca')
const tabla = document.getElementById('tabla')

const desplegarVerMas = async (e) => {
    const datos = await fetch(`http://localhost:3000/producto/${e}`)
    const [data] = await datos.json()
    Swal.fire({
        title: `<strong><u>${data.product_name}</u></strong>`,
        icon: 'info',
        html:
            `<div>
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

const rellenarTabla = (datos) => {
    tabla.innerHTML = ''
    datos.map((e) => {
        tabla.innerHTML += ` <tr>
        <td>${e.store_name}</td>
        <td>${e.product_id}</td>
        <td>@${e.product_name}</td>
        <td>${e.quantity}</td>
        <td><button onclick=desplegarVerMas(${e.product_id}) id=${e.product_id} type="button" class="btn btn-outline-info btnVerMas">VER</button>
        </td>
    </tr>`;
    })

}
// onclick=desplegarVerMas(${e})
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



rellenarSelect('stores')
rellenarSelect('categories')
rellenarSelect('brands')



