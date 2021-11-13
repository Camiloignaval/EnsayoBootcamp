-- e)	Se requiere un inventario para la tienda Santa Cruz Bike de los productos que tienen en existencia en la categoría Electric Bikes. El reporte debe tener la siguiente manera:


select p.product_id ,p.product_name ,sum(s.quantity) from stocks s 
inner join products p 
on s.product_id= p.product_id 
inner join stores t 
on t.store_id = s.store_id
inner join categories c 
on c.category_id = p.category_id 
where  t.store_id =1 and c.category_id =5
group by p.product_name,p.product_id
order by p.product_name;