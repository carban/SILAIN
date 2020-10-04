DROP TABLE IF EXISTS usuario CASCADE;
DROP TABLE IF EXISTS descargas;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS disponibilidad;

create table role(
    id_role SERIAL PRIMARY KEY, nombre VARCHAR(50)
);

INSERT INTO role(nombre) VALUES ('admin');
INSERT INTO role(nombre) VALUES ('cliente');


create table usuario (
    id SERIAL PRIMARY KEY, nombres VARCHAR(100), apellidos VARCHAR(100), 
    email VARCHAR(100), pais VARCHAR(100), departamento VARCHAR(100), ciudad VARCHAR(100), 
    institucion VARCHAR(100), ocupacion VARCHAR(100), password VARCHAR(100), role SERIAL, 
    FOREIGN KEY(role) REFERENCES role(id_role)) ;

INSERT INTO usuario(nombres, apellidos, email, pais, departamento, ciudad, institucion, ocupacion, password, role) VALUES (
    'Normal', 'Normal', 'normal@gmail.com', 'Polombia', 'Valle', 'Cali', 'Universidad del Valle', 'Estudiante', '123', 2
);

INSERT INTO usuario(nombres, apellidos, email, pais, departamento, ciudad, institucion, ocupacion, password, role) VALUES (
    'ADMIN', 'ADMIN', 'admin@admin.com', 'Polombia', 'Valle', 'Cali', 'Universidad del Valle', 'Estudiante', '123', 1
);

create table descargas(
    id SERIAL PRIMARY KEY, id_usuario SERIAL, id_metadato INTEGER, proposito VARCHAR(200), fecha DATE, hora TIME, 
FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_metadato) REFERENCES metadato(idmetadato));


create table disponibilidad(
    id_usuario SERIAL, id_metadato INTEGER, proposito VARCHAR(200), 
    FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_metadato) REFERENCES metadato(idmetadato));

-------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------
--INSERT into disponibilidad(id_usuario, id_metadato, proposito) VALUES (1,1,'Sisas');


/*
create table usuario (
    nombres VARCHAR(100), apellidos VARCHAR(100), 
    email VARCHAR(100) PRIMARY KEY, pais VARCHAR(100), departamento VARCHAR(100), ciudad VARCHAR(100), 
    institucion VARCHAR(100), ocupacion VARCHAR(100), password VARCHAR(100), role SERIAL, 
    FOREIGN KEY(role) REFERENCES role(id_role)) ;

INSERT INTO usuario(nombres, apellidos, email, pais, departamento, ciudad, institucion, ocupacion, password, role) VALUES (
    'Normal', 'Normal', 'normal@gmail.com', 'Polombia', 'Valle', 'Cali', 'Universidad del Valle', 'Estudiante', '123', 2
);

INSERT INTO usuario(nombres, apellidos, email, pais, departamento, ciudad, institucion, ocupacion, password, role) VALUES (
    'ADMIN', 'ADMIN', 'admin@admin.com', 'Polombia', 'Valle', 'Cali', 'Universidad del Valle', 'Estudiante', '123', 1
);

create table descargas(
    id SERIAL PRIMARY KEY, email_usuario VARCHAR(100), id_metadato INTEGER, proposito VARCHAR(200), fecha DATE, hora TIME, 
FOREIGN KEY(email_usuario) REFERENCES usuario(email), FOREIGN KEY(id_metadato) REFERENCES metadato(idmetadato));


create table licensias(
    email_usuario VARCHAR(100), id_metadato INTEGER,
    FOREIGN KEY(email_usuario) REFERENCES usuario(email), FOREIGN KEY(id_metadato) REFERENCES metadato(idmetadato));

*/