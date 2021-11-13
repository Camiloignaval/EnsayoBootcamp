-- b)	Se requiere un inventario de productos para mujeres (aquellos que dice Ladies en el nombre) ordenado por precio descendente. El reporte debe tener la siguiente forma:

select p.product_id ,p.product_name ,p.model_year, p.list_price from products p where product_name like '%Ladies%' order by list_price desc;