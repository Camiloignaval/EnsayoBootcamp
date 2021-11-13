-- a)	Se requiere un listado de productos con sus precios, de aquellos productos cuyo modelo es 2016, ordenado alfabéticamente por nombre. El reporte debe tener la siguiente forma:

select p.product_id ,p.product_name , p.model_year ,p.list_price from products p where model_year = 2016 order by product_name;