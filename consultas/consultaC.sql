-- c)	Se requiere un reporte con la cantidad de productos de cada categoría, ordenado de mayor a menor cantidad. El reporte debe tener la siguiente forma:

select c.category_id ,c.category_name , count(*) from categories c 
inner join products p 
on p.category_id = c.category_id 
group by (c.category_name, c.category_id )
order by count desc;