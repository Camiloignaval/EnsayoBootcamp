const comprobacionParaFiltrar = (store, category, brand) => {
    let condition = ''
    if (store != 'null' && category != 'null' && brand != 'null') {
        condition = `where t.store_id=${store} and c.category_id=${category} and b.brand_id=${brand}`
    } else if (store != 'null' && category != 'null' && brand == 'null') {
        condition = `where t.store_id=${store} and c.category_id=${category}`
    } else if (store != 'null' && category == 'null' && brand != 'null') {
        condition = `where t.store_id=${store} and b.brand_id=${brand}`
    } else if (store == 'null' && category != 'null' && brand != 'null') {
        condition = `where c.category_id=${category} and b.brand_id=${brand}`
    } else if (store != 'null' && category == 'null' && brand == 'null') {
        condition = `where t.store_id=${store}`
    } else if (store == 'null' && category != 'null' && brand == 'null') {
        condition = `where c.category_id=${category}`
    } else if (store == 'null' && category == 'null' && brand != 'null') {
        condition = `where b.brand_id=${brand}`
    }
    return condition
}

module.exports = { comprobacionParaFiltrar }
