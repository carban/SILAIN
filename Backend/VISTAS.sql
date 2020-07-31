DROP VIEW IF EXISTS muni_dept CASCADE ;

DROP VIEW IF EXISTS mcasub_join_mhasfinca CASCADE ;
DROP VIEW IF EXISTS withfinca CASCADE ;
DROP VIEW IF EXISTS finca_muni CASCADE ;

DROP VIEW IF EXISTS meta_join_metahassub CASCADE ;
DROP VIEW IF EXISTS meta_join_metahassub_join_subcategoria CASCADE ;
DROP VIEW IF EXISTS meta_cats_subs CASCADE ;

-- CON CATEGORIAS Y SUBCATEGORIAS

 CREATE VIEW meta_join_metahassub AS select pclave, idmetadato, subcategoria_idsubcategoria, titulo, publicador, formato, tamano, resumen, tipo, creado, disponibilidad
 from metadato inner join metadatos_has_subcategoria on idmetadato = metadato_idmetadato;
-- 
 CREATE VIEW meta_join_metahassub_join_subcategoria AS select * 
 from subcategoria inner join (select * from meta_join_metahassub) as v1 on subcategoria_idsubcategoria = idsubcategoria;
-- 
 CREATE VIEW meta_cats_subs AS select pclave, idmetadato, titulo, publicador, formato, tamano, resumen, tipo, creado, disponibilidad, categoria, subcategoria 
 from categoria inner join (select * from meta_join_metahassub_join_subcategoria) as v2 on idcategoria = categoria_idcategoria;

-- select * from meta_cats_subs;

--DROP VIEW meta_join_metahassub ;
--DROP VIEW meta_join_metahassub_join_subcategoria ;
--DROP VIEW meta_cats_subs ;

-- CON MUNICIPIO

 CREATE VIEW mcasub_join_mhasfinca AS select pclave, idmetadato, titulo, publicador, formato, tamano, resumen, tipo, creado, disponibilidad, categoria, subcategoria, finca_idfinca
 from meta_cats_subs inner join metadatos_has_finca on idmetadato = metadato_idmetadato;

 CREATE VIEW withfinca AS
 select pclave, idmetadato, titulo, publicador, formato, tamano, resumen, tipo, creado, disponibilidad, categoria, subcategoria, idfinca, municipio_idmunicipio, cultivo, finca
 from mcasub_join_mhasfinca inner join finca on idfinca = finca_idfinca;

 CREATE VIEW finca_muni AS
 select pclave, idmetadato, titulo, publicador, formato, tamano, resumen, tipo, creado, disponibilidad, categoria, subcategoria, municipio, finca, cultivo, departamento_iddepartamento
 from withfinca inner join municipio on idmunicipio = municipio_idmunicipio;

-- select * from finca_muni;

-- DROP VIEW mcasub_join_mhasfinca ;
-- DROP VIEW withfinca ;
-- DROP VIEW finca_muni;

 CREATE VIEW muni_dept AS
 select pclave, idmetadato, titulo, publicador, formato, tamano, resumen, tipo, creado, disponibilidad, categoria, subcategoria, municipio, finca, cultivo, departamento
 from finca_muni inner join departamento on iddepartamento = departamento_iddepartamento;



