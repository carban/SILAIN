create table usuario (id SERIAL PRIMARY KEY, nombres VARCHAR(100), apellidos VARCHAR(100), email VARCHAR(100), pais VARCHAR(100), departamento VARCHAR(100), ciudad VARCHAR(100), institucion VARCHAR(100), ocupacion VARCHAR(100), password VARCHAR(100) ) ;

create table descargas(id SERIAL PRIMARY KEY, id_usuario SERIAL, id_metadato INTEGER, proposito VARCHAR(200), FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_metadato) REFERENCES metadato(idmetadato));

