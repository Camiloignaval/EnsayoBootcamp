
const stores = document.getElementById('selectTienda')
const categories = document.getElementById('selectCat')
const brands = document.getElementById('selectMarca')
const tabla = document.getElementById('tabla')

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
    console.log(datos)
    datos.map((e) => {
        tabla.innerHTML += ` <tr>
        <td>${e.store_name}</td>
        <td>${e.product_id}</td>
        <td>@${e.product_name}</td>
        <td>${e.quantity}</td>
        <td><button type="button" class="btn btn-outline-info">VER</button>
        </td>
    </tr>`
    })

}

document.getElementById('btnBuscar').addEventListener('click', async () => {
    // console.log(stores.value, categories.value, brands.value)
    const datos = await fetch(`http://localhost:3000/filtrado`)
    const data = await datos.json()

    rellenarTabla(data)
})

rellenarSelect('stores')
rellenarSelect('categories')
rellenarSelect('brands')



