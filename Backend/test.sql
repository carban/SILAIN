select count(*) from (select idmetadato, tipo from muni_dept where 'aji' % ANY(STRING_TO_ARRAY(pclave, ' ')) 
and tipo = 'Archivo crudo') as foo; 

select count(*) from (select idmetadato, tipo from muni_dept where 'aji' % ANY(STRING_TO_ARRAY(pclave, ' ')) 
and tipo = 'Archivo procesado') as foo; 

select count(*) from (select idmetadato, tipo from muni_dept where 'aji' % ANY(STRING_TO_ARRAY(pclave, ' ')) 
and tipo = 'Imagen cruda') as foo ;

select count(*) as ImagenProcesada from (select idmetadato, tipo from muni_dept where 'aji' % ANY(STRING_TO_ARRAY(pclave, ' ')) 
and tipo = 'Imagen procesada') as foo ;

select count(*) as Comp from (select idmetadato, tipo from muni_dept where 'aji' % ANY(STRING_TO_ARRAY(pclave, ' ')) 
and tipo = 'Compilación') as foo;
