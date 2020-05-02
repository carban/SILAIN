--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.12
-- Dumped by pg_dump version 9.5.12

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: categoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categoria (
    idcategoria integer NOT NULL,
    categoria character varying
);


ALTER TABLE public.categoria OWNER TO postgres;

--
-- Name: categoria_idcategoria_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categoria_idcategoria_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categoria_idcategoria_seq OWNER TO postgres;

--
-- Name: categoria_idcategoria_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categoria_idcategoria_seq OWNED BY public.categoria.idcategoria;


--
-- Name: departamento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.departamento (
    iddepartamento integer NOT NULL,
    departamento character varying
);


ALTER TABLE public.departamento OWNER TO postgres;

--
-- Name: departamento_iddepartamento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.departamento_iddepartamento_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.departamento_iddepartamento_seq OWNER TO postgres;

--
-- Name: departamento_iddepartamento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.departamento_iddepartamento_seq OWNED BY public.departamento.iddepartamento;


--
-- Name: finca; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.finca (
    idfinca integer NOT NULL,
    municipio_idmunicipio integer NOT NULL,
    finca character varying,
    cultivo character varying
);


ALTER TABLE public.finca OWNER TO postgres;

--
-- Name: finca_idfinca_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.finca_idfinca_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.finca_idfinca_seq OWNER TO postgres;

--
-- Name: finca_idfinca_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.finca_idfinca_seq OWNED BY public.finca.idfinca;


--
-- Name: metadato; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.metadato (
    idmetadato integer NOT NULL,
    titulo character varying,
    pclave character varying,
    creado date,
    disponibilidad date,
    resumen character varying,
    descripcion character varying,
    tipo character varying,
    lote character varying,
    fase character varying,
    publicador character varying,
    derechos character varying,
    formato character varying,
    tamano character varying,
    url character varying
);


ALTER TABLE public.metadato OWNER TO postgres;

--
-- Name: metadato_idmetadato_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.metadato_idmetadato_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.metadato_idmetadato_seq OWNER TO postgres;

--
-- Name: metadato_idmetadato_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.metadato_idmetadato_seq OWNED BY public.metadato.idmetadato;


--
-- Name: metadatos_has_finca; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.metadatos_has_finca (
    finca_idfinca integer NOT NULL,
    metadato_idmetadato integer NOT NULL
);


ALTER TABLE public.metadatos_has_finca OWNER TO postgres;

--
-- Name: metadatos_has_subcategoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.metadatos_has_subcategoria (
    subcategoria_idsubcategoria integer NOT NULL,
    metadato_idmetadato integer NOT NULL
);


ALTER TABLE public.metadatos_has_subcategoria OWNER TO postgres;

--
-- Name: municipio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.municipio (
    idmunicipio integer NOT NULL,
    departamento_iddepartamento integer NOT NULL,
    municipio character varying
);


ALTER TABLE public.municipio OWNER TO postgres;

--
-- Name: municipio_idmunicipio_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.municipio_idmunicipio_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.municipio_idmunicipio_seq OWNER TO postgres;

--
-- Name: municipio_idmunicipio_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.municipio_idmunicipio_seq OWNED BY public.municipio.idmunicipio;


--
-- Name: subcategoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subcategoria (
    idsubcategoria integer NOT NULL,
    categoria_idcategoria integer NOT NULL,
    subcategoria character varying
);


ALTER TABLE public.subcategoria OWNER TO postgres;

--
-- Name: subcategoria_idsubcategoria_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subcategoria_idsubcategoria_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.subcategoria_idsubcategoria_seq OWNER TO postgres;

--
-- Name: subcategoria_idsubcategoria_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subcategoria_idsubcategoria_seq OWNED BY public.subcategoria.idsubcategoria;


--
-- Name: idcategoria; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria ALTER COLUMN idcategoria SET DEFAULT nextval('public.categoria_idcategoria_seq'::regclass);


--
-- Name: iddepartamento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departamento ALTER COLUMN iddepartamento SET DEFAULT nextval('public.departamento_iddepartamento_seq'::regclass);


--
-- Name: idfinca; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.finca ALTER COLUMN idfinca SET DEFAULT nextval('public.finca_idfinca_seq'::regclass);


--
-- Name: idmetadato; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metadato ALTER COLUMN idmetadato SET DEFAULT nextval('public.metadato_idmetadato_seq'::regclass);


--
-- Name: idmunicipio; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.municipio ALTER COLUMN idmunicipio SET DEFAULT nextval('public.municipio_idmunicipio_seq'::regclass);


--
-- Name: idsubcategoria; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategoria ALTER COLUMN idsubcategoria SET DEFAULT nextval('public.subcategoria_idsubcategoria_seq'::regclass);


--
-- Data for Name: categoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categoria (idcategoria, categoria) FROM stdin;
1	Espectrometría
2	Fisiologia
3	Multiespectral
4	RGB
5	Tesis
6	Topografía
\.


--
-- Name: categoria_idcategoria_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categoria_idcategoria_seq', 1, false);


--
-- Data for Name: departamento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.departamento (iddepartamento, departamento) FROM stdin;
1	Valle del Cauca
2	Cauca
\.


--
-- Name: departamento_iddepartamento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.departamento_iddepartamento_seq', 1, false);


--
-- Data for Name: finca; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.finca (idfinca, municipio_idmunicipio, finca, cultivo) FROM stdin;
1	1	Calderón	arroz
2	2	Edén	arroz
3	2	Eucadia	arroz
4	2	San José	arroz
5	3	Rozo	ají
\.


--
-- Name: finca_idfinca_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.finca_idfinca_seq', 1, false);


--
-- Data for Name: metadato; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.metadato (idmetadato, titulo, pclave, creado, disponibilidad, resumen, descripcion, tipo, lote, fase, publicador, derechos, formato, tamano, url) FROM stdin;
1	Espectrometría en cultivo de arroz, finca Calderón tratamiento D1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-12	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con densidad de siembra D1 = 80 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	303.3 KB	/root/espectrometria/calderon/12-07-17/D1.rar
2	Espectrometría en cultivo de arroz, finca Calderón tratamiento N2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-12	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N2 = 150 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	295.1 KB	/root/espectrometria/calderon/12-07-17/N2.rar
3	Espectrometría en cultivo de arroz, finca Calderón tratamiento P3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-13	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P3 = 150 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	293.6 KB	/root/espectrometria/calderon/12-07-17/P3.rar
4	Espectrometría en cultivo de arroz, finca Calderón tratamiento D2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-13	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con densidad de siembra D2 = 100 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	295.3 KB	/root/espectrometria/calderon/13-07-17/D2.rar
5	Espectrometría en cultivo de arroz, finca Calderón tratamiento D3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-13	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con densidad de siembra D3 = 120 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	293.9 KB	/root/espectrometria/calderon/13-07-17/D3.rar
6	Espectrometría en cultivo de arroz, finca Calderón tratamiento K1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-13	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K1 = 0 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	296.4 KB	/root/espectrometria/calderon/13-07-17/K1.rar
7	Espectrometría en cultivo de arroz, finca Calderón tratamiento K2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-13	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K2 = 50 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	292.5 KB	/root/espectrometria/calderon/13-07-17/K2.rar
8	Espectrometría en cultivo de arroz, finca Calderón tratamiento N1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-13	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N1 = 0 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	293.3 KB	/root/espectrometria/calderon/13-07-17/N1.rar
9	Espectrometría en cultivo de arroz, finca Calderón tratamiento K3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-14	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K3 = 150 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	294.5 KB	/root/espectrometria/calderon/14-07-17/K3.rar
10	Espectrometría en cultivo de arroz, finca Calderón tratamiento N3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-14	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N3 = 450 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	293.6 KB	/root/espectrometria/calderon/14-07-17/N3.rar
11	Espectrometría en cultivo de arroz, finca Calderón tratamiento P1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-18	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P1 = 0 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	295.5 KB	/root/espectrometria/calderon/14-07-17/P1.rar
12	Espectrometría en cultivo de arroz, finca Calderón tratamiento N2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-18	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N2 = 150 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	285.3 KB	/root/espectrometria/calderon/18-07-17/N2.rar
13	Espectrometría en cultivo de arroz, finca Calderón tratamiento P3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-18	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P3 = 150 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	285.3 KB	/root/espectrometria/calderon/18-07-17/P2.rar
14	Espectrometría en cultivo de arroz, finca Calderón tratamiento T	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, calderón, macronutrientes	2017-07-18	2020-06-01	Datos capturados con espectrorradiómetro en finca Calderón sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con tratamiento comercial (Testigo)	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	292.5 KB	/root/espectrometria/calderon/18-07-17/T.rar
15	Espectrometría en cultivo de arroz, finca Edén tratamiento D2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, edén, macronutrientes	2017-06-15	2020-06-01	Datos capturados con espectrorradiómetro en finca Edén sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con densidad de siembra D2 = 100 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	70.8 KB	/root/espectrometria/eden/15-06-17/D2.rar
114	Ortomosaico banda roja de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2017-02-13	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.2 MB	/root/multiespectral/calderon/01-05-17/mosaicos/proyecto_jam_v2_index_red.tif
16	Espectrometría en cultivo de arroz, finca Edén tratamiento N3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, edén, macronutrientes	2017-06-15	2020-06-01	Datos capturados con espectrorradiómetro en finca Edén sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N3 = 450 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	307.7 KB	/root/espectrometria/eden/15-06-17/N3.rar
17	Espectrometría en cultivo de arroz, finca Edén tratamiento T	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, edén, macronutrientes	2017-07-18	2020-06-01	Datos capturados con espectrorradiómetro en finca Edén sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con tratamiento comercial (Testigo)	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	298.1 KB	/root/espectrometria/eden/18-07-17/T.rar
18	Espectrometría en cultivo de arroz, finca Edén tratamiento D3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, edén, macronutrientes	2017-06-28	2020-06-01	Datos capturados con espectrorradiómetro en finca Edén sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con densidad de siembra D3 = 120 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	311.5 KB	/root/espectrometria/eden/28-06-17/D3.rar
19	Espectrometría en cultivo de arroz, finca Edén tratamiento N2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, edén, macronutrientes	2017-06-28	2020-06-01	Datos capturados con espectrorradiómetro en finca Edén sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N2 = 150 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	302.7 KB	/root/espectrometria/eden/28-06-17/N2.rar
20	Espectrometría en cultivo de arroz, finca Edén tratamiento D1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, eucadia, macronutrientes	2017-07-10	2020-06-01	Datos capturados con espectrorradiómetro en finca Eucadia sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con densidad de siembra D1 = 80 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	295.9 KB	/root/espectrometria/eucadia/10-07-17/D1.rar
21	Espectrometría en cultivo de arroz, finca Edén tratamiento D2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, eucadia, macronutrientes	2017-07-10	2020-06-01	Datos capturados con espectrorradiómetro en finca Eucadia sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con densidad de siembra D2 = 100 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	303.1 KB	/root/espectrometria/eucadia/10-07-17/D2.rar
22	Espectrometría en cultivo de arroz, finca Edén tratamiento D3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, eucadia, macronutrientes	2017-07-25	2020-06-01	Datos capturados con espectrorradiómetro en finca Eucadia sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con densidad de siembra D3 = 120 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	294.8 KB	/root/espectrometria/eucadia/25-07-17/D3.rar
23	Espectrometría en cultivo de arroz, finca Edén tratamiento K1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, eucadia, macronutrientes	2017-07-25	2020-06-01	Datos capturados con espectrorradiómetro en finca Eucadia sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K1 = 0 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	294 KB	/root/espectrometria/eucadia/25-07-17/K1.rar
24	Espectrometría en cultivo de arroz, finca Edén tratamiento K2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, eucadia, macronutrientes	2017-07-25	2020-06-01	Datos capturados con espectrorradiómetro en finca Eucadia sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K2 = 50 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	292.1 KB	/root/espectrometria/eucadia/25-07-17/K2.rar
25	Espectrometría en cultivo de arroz, finca Edén tratamiento K3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, eucadia, macronutrientes	2017-07-25	2020-06-01	Datos capturados con espectrorradiómetro en finca Eucadia sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K3 = 150 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	291.2 KB	/root/espectrometria/eucadia/25-07-17/K3.rar
26	Espectrometría en cultivo de arroz, finca Edén tratamiento N1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, eucadia, macronutrientes	2017-07-25	2020-06-01	Datos capturados con espectrorradiómetro en finca Eucadia sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N1 = 0 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	292.7 KB	/root/espectrometria/eucadia/25-07-17/N1.rar
27	Espectrometría en cultivo de arroz, finca Edén tratamiento N2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, eucadia, macronutrientes	2017-07-25	2020-06-01	Datos capturados con espectrorradiómetro en finca Eucadia sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N2 = 150 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	294.3 KB	/root/espectrometria/eucadia/25-07-17/N2.rar
28	Espectrometría en cultivo de arroz, finca Edén tratamiento N3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, eucadia, macronutrientes	2017-07-27	2020-06-01	Datos capturados con espectrorradiómetro en finca Eucadia sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N3 = 450 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	289.2 KB	/root/espectrometria/eucadia/27-07-17/N3.rar
29	Espectrometría en cultivo de arroz, finca Edén tratamiento P1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, eucadia, macronutrientes	2017-07-27	2020-06-01	Datos capturados con espectrorradiómetro en finca Eucadia sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P1 = 0 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	290.9 KB	/root/espectrometria/eucadia/27-07-17/P1.rar
30	Espectrometría en cultivo de arroz, finca Edén tratamiento P2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, eucadia, macronutrientes	2017-07-27	2020-06-01	Datos capturados con espectrorradiómetro en finca Eucadia sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P2 = 50 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	289 KB	/root/espectrometria/eucadia/27-07-17/P2.rar
31	Espectrometría en cultivo de arroz, finca Edén tratamiento P3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, eucadia, macronutrientes	2017-07-27	2020-06-01	Datos capturados con espectrorradiómetro en finca Eucadia sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P3 = 150 Kg/ha	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	290.6 KB	/root/espectrometria/eucadia/27-07-17/P3.rar
32	Espectrometría en cultivo de arroz, finca Edén tratamiento T	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, eucadia, macronutrientes	2017-07-27	2020-06-01	Datos capturados con espectrorradiómetro en finca Eucadia sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con tratamiento comercial (Testigo)	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	291 KB	/root/espectrometria/eucadia/27-07-17/T.rar
33	Espectrometría en cultivo de ají, Rozo	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, ají, rozo	2017-05-01	2020-06-01	Datos capturados con espectrorradiómetro en el municipio de rozo sobre cultivo de ají Capsicum	Datos hiperespectrales capturados sobre cultivo de ají de la variedad Capsicum	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	83.2 KB	/root/espectrometria/rozo/01-05-17/capsicum.rar
34	Espectrometría en cultivo de ají, Rozo	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, ají, rozo	2017-05-01	2020-06-01	Datos capturados con espectrorradiómetro en el municipio de rozo sobre cultivo de ají Tabasco	Datos hiperespectrales capturados sobre cultivo de ají de la variedad Tabasco	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	925 KB	/root/espectrometria/rozo/01-05-17/tabasco.rar
35	Espectrometría en cultivo de ají, Rozo	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, ají, rozo	2017-06-29	2020-06-01	Datos capturados con espectrorradiómetro en el municipio de rozo sobre cultivo de ají Cayena	Datos hiperespectrales capturados sobre cultivo de ají de la variedad Cayena	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	230.7 KB	/root/espectrometria/rozo/29-06-17/cayena.rar
36	Espectrometría en cultivo de ají, Rozo	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, ají, rozo	2017-06-29	2020-06-01	Datos capturados con espectrorradiómetro en el municipio de rozo sobre cultivo de ají Tabasco	Datos hiperespectrales capturados sobre cultivo de ají de la variedad Tabasco	Archivo crudo	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	983.7 KB	/root/espectrometria/rozo/29-06-17/tabasco.rar
37	Espectrometría en cultivo de arroz, finca San José tratamiento  N1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-07-11	2020-06-01	Datos capturados con espectrorradiómetro en finca  sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N1 = 0 Kg/ha	Archivo crudo	\N	1	CIBioFi-GISMODEL	Acceso libre	txt	1.7 MB	/root/espectrometria/san_jose/fase1/N1.rar
38	Espectrometría en cultivo de arroz, finca San José tratamiento  N2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-07-11	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N2 = 150 Kg/ha	Archivo crudo	\N	1	CIBioFi-GISMODEL	Acceso libre	txt	1.7 MB	/root/espectrometria/san_jose/fase1/N2.rar
39	Espectrometría en cultivo de arroz, finca San José tratamiento  N3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-07-11	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N3 = 450 Kg/ha	Archivo crudo	\N	1	CIBioFi-GISMODEL	Acceso libre	txt	1.7 MB	/root/espectrometria/san_jose/fase1/N3.rar
40	Espectrometría en cultivo de arroz, finca San José tratamiento  T	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-07-11	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con tratamiento comercial (Testigo)	Archivo crudo	\N	1	CIBioFi-GISMODEL	Acceso libre	txt	1.7 MB	/root/espectrometria/san_jose/fase1/T.rar
41	Espectrometría en cultivo de arroz, finca San José tratamiento  K1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-14	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K1 = 0 Kg/ha	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	172.6 KB	/root/espectrometria/san_jose/fase2/VIS/K1.rar
42	Espectrometría en cultivo de arroz, finca San José tratamiento  K2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-15	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K2 = 50 Kg/ha	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	172 KB	/root/espectrometria/san_jose/fase2/VIS/K2.rar
43	Espectrometría en cultivo de arroz, finca San José tratamiento  K3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-15	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K3 = 150 Kg/ha	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	178 KB	/root/espectrometria/san_jose/fase2/VIS/K3.rar
44	Espectrometría en cultivo de arroz, finca San José tratamiento  N1-R	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-16	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N1 = 0 Kg/ha	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	173.1 KB	/root/espectrometria/san_jose/fase2/VIS/N1-R.rar
45	Espectrometría en cultivo de arroz, finca San José tratamiento  N1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-06	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N1 = 0 Kg/ha	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	173.3 KB	/root/espectrometria/san_jose/fase2/VIS/N1.rar
46	Espectrometría en cultivo de arroz, finca San José tratamiento  N2-R	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-16	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N2 = 150 Kg/ha	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	172.4 KB	/root/espectrometria/san_jose/fase2/VIS/N2-R.rar
47	Espectrometría en cultivo de arroz, finca San José tratamiento  N2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-08	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N2 = 150 Kg/ha	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	171.7 KB	/root/espectrometria/san_jose/fase2/VIS/N2.rar
48	Espectrometría en cultivo de arroz, finca San José tratamiento  N3-R	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-08	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N3 = 450 Kg/ha	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	171.9 KB	/root/espectrometria/san_jose/fase2/VIS/N3-R.rar
49	Espectrometría en cultivo de arroz, finca San José tratamiento  N3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-07	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N3 = 450 Kg/ha	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	172.3 KB	/root/espectrometria/san_jose/fase2/VIS/N3.rar
50	Espectrometría en cultivo de arroz, finca San José tratamiento  P1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-15	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P1 = 0 Kg/ha	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	229.3 KB	/root/espectrometria/san_jose/fase2/VIS/P1.rar
51	Espectrometría en cultivo de arroz, finca San José tratamiento  P2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-16	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P2 = 50 Kg/ha	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	172.5 KB	/root/espectrometria/san_jose/fase2/VIS/P2.rar
52	Espectrometría en cultivo de arroz, finca San José tratamiento  P3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-15	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P3 = 150 Kg/ha	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	165.9 KB	/root/espectrometria/san_jose/fase2/VIS/P3.rar
53	Espectrometría en cultivo de arroz, finca San José tratamiento  T-R	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-16	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con tratamiento comercial (Testigo)	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	172.2 KB	/root/espectrometria/san_jose/fase2/VIS/T-R.rar
54	Espectrometría en cultivo de arroz, finca San José tratamiento  T	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-06	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con tratamiento comercial (Testigo)	Archivo crudo	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	171.5 KB	/root/espectrometria/san_jose/fase2/VIS/T.rar
55	Espectrometría en cultivo de arroz, finca San José tratamiento  K1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-28	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K1 = 0 Kg/ha	Archivo crudo	\N	3	CIBioFi-GISMODEL	Acceso libre	txt	516.8 KB	/root/espectrometria/san_jose/fase3/VIS/K1.rar
56	Espectrometría en cultivo de arroz, finca San José tratamiento  K2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-31	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K2 = 50 Kg/ha	Archivo crudo	\N	3	CIBioFi-GISMODEL	Acceso libre	txt	523.2 KB	/root/espectrometria/san_jose/fase3/VIS/K2.rar
57	Espectrometría en cultivo de arroz, finca San José tratamiento  K3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-31	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K3 = 150 Kg/ha	Archivo crudo	\N	3	CIBioFi-GISMODEL	Acceso libre	txt	524.2 KB	/root/espectrometria/san_jose/fase3/VIS/K3.rar
58	Espectrometría en cultivo de arroz, finca San José tratamiento  N1-R	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-30	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N1 = 0 Kg/ha	Archivo crudo	\N	3	CIBioFi-GISMODEL	Acceso libre	txt	524.8 KB	/root/espectrometria/san_jose/fase3/VIS/N1-R.rar
59	Espectrometría en cultivo de arroz, finca San José tratamiento  N1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-27	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N1 = 0 Kg/ha	Archivo crudo	\N	3	CIBioFi-GISMODEL	Acceso libre	txt	527.7 KB	/root/espectrometria/san_jose/fase3/VIS/N1.rar
60	Espectrometría en cultivo de arroz, finca San José tratamiento  N2-R	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-30	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N2 = 150 Kg/ha	Archivo crudo	\N	3	CIBioFi-GISMODEL	Acceso libre	txt	523.3 KB	/root/espectrometria/san_jose/fase3/VIS/N2-R.rar
61	Espectrometría en cultivo de arroz, finca San José tratamiento  N2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-27	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N2 = 150 Kg/ha	Archivo crudo	\N	3	CIBioFi-GISMODEL	Acceso libre	txt	528.2 KB	/root/espectrometria/san_jose/fase3/VIS/N2.rar
62	Espectrometría en cultivo de arroz, finca San José tratamiento  N3-R	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-29	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N3 = 450 Kg/ha	Archivo crudo	\N	3	CIBioFi-GISMODEL	Acceso libre	txt	523.8 KB	/root/espectrometria/san_jose/fase3/VIS/N3-R.rar
63	Espectrometría en cultivo de arroz, finca San José tratamiento  N3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-29	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N3 = 450 Kg/ha	Archivo crudo	\N	3	CIBioFi-GISMODEL	Acceso libre	txt	526.4 KB	/root/espectrometria/san_jose/fase3/VIS/N3.rar
64	Espectrometría en cultivo de arroz, finca San José tratamiento  P1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-31	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P1 = 0 Kg/ha	Archivo crudo	\N	3	CIBioFi-GISMODEL	Acceso libre	txt	526.5 KB	/root/espectrometria/san_jose/fase3/VIS/P1.rar
65	Espectrometría en cultivo de arroz, finca San José tratamiento  T-R	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-29	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con tratamiento comercial (Testigo)	Archivo crudo	\N	3	CIBioFi-GISMODEL	Acceso libre	txt	524.6 KB	/root/espectrometria/san_jose/fase3/VIS/T-R.rar
66	Espectrometría en cultivo de arroz, finca San José tratamiento  T	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-08-29	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con tratamiento comercial (Testigo)	Archivo crudo	\N	3	CIBioFi-GISMODEL	Acceso libre	txt	530.8 KB	/root/espectrometria/san_jose/fase3/VIS/T.rar
67	Espectrometría en cultivo de arroz, finca San José tratamiento  K1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-10-01	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K1 = 0 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	520.9 KB	/root/espectrometria/san_jose/fase4/NIR/K1.rar
68	Espectrometría en cultivo de arroz, finca San José tratamiento  K2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-10-02	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K2 = 50 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	527.7 KB	/root/espectrometria/san_jose/fase4/NIR/K2.rar
69	Espectrometría en cultivo de arroz, finca San José tratamiento  K3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-10-02	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K3 = 150 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	519.5 KB	/root/espectrometria/san_jose/fase4/NIR/K3.rar
70	Espectrometría en cultivo de arroz, finca San José tratamiento  N1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-09-27	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N1 = 0 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	531.3 KB	/root/espectrometria/san_jose/fase4/NIR/N1.rar
71	Espectrometría en cultivo de arroz, finca San José tratamiento  N2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-09-28	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N2 = 150 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	525.2 KB	/root/espectrometria/san_jose/fase4/NIR/N2.rar
72	Espectrometría en cultivo de arroz, finca San José tratamiento  N3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-09-28	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N3 = 450 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	521.2 KB	/root/espectrometria/san_jose/fase4/NIR/N3.rar
73	Espectrometría en cultivo de arroz, finca San José tratamiento  P1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-10-04	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P1 = 0 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	518.8 KB	/root/espectrometria/san_jose/fase4/NIR/P1.rar
74	Espectrometría en cultivo de arroz, finca San José tratamiento  P2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-10-05	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P2 = 50 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	525.6 KB	/root/espectrometria/san_jose/fase4/NIR/P2.rar
75	Espectrometría en cultivo de arroz, finca San José tratamiento  T	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-09-27	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con tratamiento comercial (Testigo)	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	549.8 KB	/root/espectrometria/san_jose/fase4/NIR/T.rar
76	Espectrometría en cultivo de arroz, finca San José tratamiento  K1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-10-01	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K1 = 0 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	523.4 KB	/root/espectrometria/san_jose/fase4/VIS/K1.rar
77	Espectrometría en cultivo de arroz, finca San José tratamiento  K2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-10-01	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K2 = 50 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	520.3 KB	/root/espectrometria/san_jose/fase4/VIS/K2.rar
78	Espectrometría en cultivo de arroz, finca San José tratamiento  K3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-10-02	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Potasio K3 = 150 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	521.1 KB	/root/espectrometria/san_jose/fase4/VIS/K3.rar
79	Espectrometría en cultivo de arroz, finca San José tratamiento  N1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-09-24	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N1 = 0 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	523.8 KB	/root/espectrometria/san_jose/fase4/VIS/N1.rar
80	Espectrometría en cultivo de arroz, finca San José tratamiento  N2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-09-24	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N2 = 150 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	520.4 KB	/root/espectrometria/san_jose/fase4/VIS/N2.rar
81	Espectrometría en cultivo de arroz, finca San José tratamiento  N3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-09-24	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N3 = 450 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	540.7 KB	/root/espectrometria/san_jose/fase4/VIS/N3.rar
82	Espectrometría en cultivo de arroz, finca San José tratamiento  N3_R	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-10-09	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Nitrígeno N3 = 450 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	522.4 KB	/root/espectrometria/san_jose/fase4/VIS/N3_R.rar
83	Espectrometría en cultivo de arroz, finca San José tratamiento  P1	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-10-04	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P1 = 0 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	521.9 KB	/root/espectrometria/san_jose/fase4/VIS/P1.rar
84	Espectrometría en cultivo de arroz, finca San José tratamiento  P2	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-10-05	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P2 = 50 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	520.9 KB	/root/espectrometria/san_jose/fase4/VIS/P2.rar
85	Espectrometría en cultivo de arroz, finca San José tratamiento  P3	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-10-05	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con aplicación de Fósforo P3 = 150 Kg/ha	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	520.6 KB	/root/espectrometria/san_jose/fase4/VIS/P3.rar
86	Espectrometría en cultivo de arroz, finca San José tratamiento  T	espectrometría, espectrorradiómetro, espectro-radiómetro, firma espectral, arroz, san josé, macronutrientes	2018-09-24	2020-06-01	Datos capturados con espectrorradiómetro en finca San José sobre cultivo de arroz	Estos datos hiperespectrales se capturaron sobre la zona con tratamiento comercial (Testigo)	Archivo crudo	\N	4	CIBioFi-GISMODEL	Acceso libre	txt	582.2 KB	/root/espectrometria/san_jose/fase4/VIS/T.rar
87	Fisiología de plantas de arroz en finca Calderón	fisiología, plantas, arroz, calderón, tamaño, verdor, macollos	2017-09-13	2020-06-01	Información fisiológica de las plantas muestreadas para los diferentes tratamientos en la finca Calderón	La tabla contiene información del tamaño, número de macollos y verdor de cada una de las plantas de la muestra y medidas estadísticas.	Compilación	\N	\N	CIBioFi-GISMODEL	Acceso libre	xlsx	62.8 KB	/root/fisiologia/calderon/fisiologia_calderon.xlsx
88	Fisiología de plantas de arroz en finca Edén	fisiología, plantas, arroz, edén, tamaño, verdor, macollos	2017-09-12	2020-06-01	Información fisiológica de las plantas muestreadas para los diferentes tratamientos en la finca Eucadia	La tabla contiene información del tamaño, número de macollos y verdor de cada una de las plantas de la muestra y medidas estadísticas.	Compilación	\N	\N	CIBioFi-GISMODEL	Acceso libre	xlsx	69.4 KB	/root/fisiologia/eden/fisiografia_eden.xlsx
89	Fisiología de plantas de arroz en finca Eucadia	fisiología, plantas, arroz, eucadia, tamaño, verdor, macollos	2017-09-13	2020-06-01	Información fisiológica de las plantas muestreadas para los diferentes tratamientos en la finca Edén	La tabla contiene información del tamaño, número de macollos y verdor de cada una de las plantas de la muestra y medidas estadísticas.	Compilación	\N	\N	CIBioFi-GISMODEL	Acceso libre	xlsx	62.8 KB	/root/fisiologia/eucadia/fisiologia_eucadia.xlsx
90	Fisiología de plantas de arroz en finca San José Fase 1	fisiología, plantas, arroz, san josé, tamaño, verdor, macollos	2018-07-24	2020-06-01	Información fisiológica de las plantas muestreadas para los diferentes tratamientos en la finca San José en Fase 1	La tabla contiene información del tamaño, número de macollos y verdor de cada una de las plantas de la muestra.	Compilación	\N	1	CIBioFi-GISMODEL	Acceso libre	txt	2.5 KB	/root/fisiologia/san_jose/fase1/fisiologia_sj_fase1.rar
91	Fisiología de plantas de arroz en finca San José Fase 2	fisiología, plantas, arroz, san josé, tamaño, verdor, macollos	2018-08-17	2020-06-01	Información fisiológica de las plantas muestreadas para los diferentes tratamientos en la finca San José en Fase 2	La tabla contiene información del tamaño, número de macollos y verdor de cada una de las plantas de la muestra.	Compilación	\N	2	CIBioFi-GISMODEL	Acceso libre	txt	7.2 KB	/root/fisiologia/san_jose/fase2/fisiologia_sj_fase2.rar
92	Fisiología de plantas de arroz en finca San José Fase 3	fisiología, plantas, arroz, san josé, tamaño, verdor, macollos	2018-11-19	2020-06-01	Información fisiológica de las plantas muestreadas para los diferentes tratamientos en la finca San José en Fase 3	La tabla contiene información del tamaño, número de macollos y verdor de cada una de las plantas de la muestra.	Compilación	\N	3	CIBioFi-GISMODEL	Acceso libre	xlsx	30 KB	/root/fisiologia/san_jose/fase3/fisiologia_sj_fase3.rar
93	Fisiología de plantas de arroz en finca San José Fase 4	fisiología, plantas, arroz, san josé, tamaño, verdor, macollos	2018-11-19	2020-06-01	Información fisiológica de las plantas muestreadas para los diferentes tratamientos en la finca San José en Fase 4	La tabla contiene información del tamaño, número de macollos y verdor de cada una de las plantas de la muestra.	Compilación	\N	4	CIBioFi-GISMODEL	Acceso libre	xlsx	23.5 KB	/root/fisiologia/san_jose/fase4/fisiologia_sj_fase4.rar
94	Imágenes multiespectrales crudas en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, crudas, imágenes	2017-05-01	2020-06-01	Imágenes multiespectrales capturadas en vuelo sobre finca Calderón	Imágenes multiespectrales sin procesar, bandas : B, G, R, BORDE ROJO, NIR 	Imagen cruda	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.7 GB	/root/multiespectral/calderon/01-05-17/crudas/crudas.rar
95	Modelo Digital de Superficie de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, dsm, mds, modelo digital superficie	2017-02-09	2020-06-01	Modelo Digital de Superficie de finca Calderón	Archivo tipo ráster de modelo digital de superficie en la finca Calderón	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	738 KB	/root/multiespectral/calderon/01-05-17/dsm/dsm_calderon_01052017.tif
96	Índice CI (Chlorophyll Index- Índice de clorofila) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, ci	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/ci_re.tif
97	Índice CI_re (Chlorophyll Index- Índice de clorofila) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, csm	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/csm.tif
98	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, csm	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/csm_re.tif
99	Índice DATT en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, datt	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/datt.tif
100	Índice GNDVI (Green Normalized Difference Vegetation Index - Índice de Vegetación de Diferencia Normalizada Verde ) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, gndvi	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/gndvi.tif
101	Índice GVI (green vegetation index - Índice vegetación verde) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, gvi	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/gvi.tif
102	Índice NDRE (normalized difference red edge index - índice de borde rojo de diferencia normalizado) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, ndre	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/ndre.tif
103	Índice NDVI (normalized difference vegetation index - Índice de Vegetación de Diferencia Normalizada) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, ndvi	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/ndvi.tif
104	Índice NGRDI (Normalized Red-Green Difference Index - Índice de diferencia rojo-verde normalizado) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, ngrdi	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/ngrdi.tif
105	Índice RG en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, rg	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/rg.tif
106	Índice RVI (Relative Vigor Index - Índice de Vigor Relativo) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, rvi	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/rvi.tif
107	Índice SR (Simple Ratio - Ratio simple) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, sr	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/sr.tif
108	Índice SR_NDRE (Simple Ratio_normalized difference red edge index) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, sr_ndre	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/sr_ndre.tif
109	Índice SR (Simple Ratio - Ratio simple) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, sr	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/01-05-17/indice/sr_re.tif
110	Ortomosaico banda azul de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2017-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.2 MB	/root/multiespectral/calderon/01-05-17/mosaicos/proyecto_jam_v2_index_blue.tif
111	Ortomosaico banda verde de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2017-02-10	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.2 MB	/root/multiespectral/calderon/01-05-17/mosaicos/proyecto_jam_v2_index_green.tif
112	Ortomosaico índice NDVI de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2017-02-11	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.1 MB	/root/multiespectral/calderon/01-05-17/mosaicos/proyecto_jam_v2_index_ndvi.tif
113	Ortomosaico banda NIR de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2017-02-12	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.2 MB	/root/multiespectral/calderon/01-05-17/mosaicos/proyecto_jam_v2_index_nir.tif
115	Ortomosaico banda borde rojo de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2017-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.2 MB	/root/multiespectral/calderon/01-05-17/mosaicos/proyecto_jam_v2_index_red_edge.tif
116	Imágenes multiespectrales crudas en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, crudas, imágenes	2017-05-17	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.7 GB	/root/multiespectral/calderon/17-05-17/crudas/Crudas.rar
117	Modelo Digital de Superficie de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, dsm, mds, modelo digital superficie	2017-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	738 KB	/root/multiespectral/calderon/17-05-17/dsm/proyecto_jam_v2_dsm_1_1.tif
118	Índice CI (Chlorophyll Index- Índice de clorofila) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, ci	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/17-05-17/indices/ci_re.tif
119	Índice CI_re (Chlorophyll Index- Índice de clorofila) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, csm	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/17-05-17/indices/csm.tif
120	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, csm	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/17-05-17/indices/csm_re.tif
121	Índice DATT en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, datt	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/17-05-17/indices/datt.tif
122	Índice GNDVI (Green Normalized Difference Vegetation Index - Índice de Vegetación de Diferencia Normalizada Verde ) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, gndvi	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	2.9 MB	/root/multiespectral/calderon/17-05-17/indices/gndvi.tif
123	Índice GVI (green vegetation index - Índice vegetación verde) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, gvi	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/17-05-17/indices/gvi_1.tif
124	Índice NDRE (normalized difference red edge index - índice de borde rojo de diferencia normalizado) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, ndre	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	2.9 MB	/root/multiespectral/calderon/17-05-17/indices/ndre.tif
125	Índice NDVI (normalized difference vegetation index - Índice de Vegetación de Diferencia Normalizada) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, ndvi	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	2.9 MB	/root/multiespectral/calderon/17-05-17/indices/ndvi.tif
126	Índice NGRDI (Normalized Red-Green Difference Index - Índice de diferencia rojo-verde normalizado) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, ngrdi	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3.1 MB	/root/multiespectral/calderon/17-05-17/indices/ngrdi.tif
127	Índice RG en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, rg	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3.1 MB	/root/multiespectral/calderon/17-05-17/indices/rg.tif
128	Índice RVI (Relative Vigor Index - Índice de Vigor Relativo) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, rvi	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/17-05-17/indices/rvi.tif
129	Índice SR (Simple Ratio - Ratio simple) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, sr	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/17-05-17/indices/sr.tif
130	Índice SR_NDRE (Simple Ratio_normalized difference red edge index) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, sr_ndre	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/17-05-17/indices/sr_ndre.tif
131	Índice SR (Simple Ratio - Ratio simple) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, sr	2017-05-29	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	3 MB	/root/multiespectral/calderon/17-05-17/indices/sr_re.tif
132	Ortomosaico banda azul de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2017-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.2 MB	/root/multiespectral/calderon/17-05-17/mosaicos/proyecto_jam_v2_index_blue.tif
133	Ortomosaico banda verde de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2017-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.2 MB	/root/multiespectral/calderon/17-05-17/mosaicos/proyecto_jam_v2_index_green.tif
134	Ortomosaico índice NDVI de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2017-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.1 MB	/root/multiespectral/calderon/17-05-17/mosaicos/proyecto_jam_v2_index_ndvi.tif
135	Ortomosaico banda NIR de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2017-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.2 MB	/root/multiespectral/calderon/17-05-17/mosaicos/proyecto_jam_v2_index_nir.tif
136	Ortomosaico banda roja de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2017-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.2 MB	/root/multiespectral/calderon/17-05-17/mosaicos/proyecto_jam_v2_index_red.tif
137	Ortomosaico banda borde rojo de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2017-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.2 MB	/root/multiespectral/calderon/17-05-17/mosaicos/proyecto_jam_v2_index_red_edge.tif
138	Modelo Digital de Superficie de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, dsm, mds, modelo digital superficie	2016-12-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	299.9 KB	/root/multiespectral/calderon/20-07-17/dsm/calderon_20_jul_dsm_1_1.tif
139	Índice CI (Chlorophyll Index- Índice de clorofila) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, ci	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/calderon/20-07-17/indices/ci_re.tif
140	Índice CI_re (Chlorophyll Index- Índice de clorofila) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, csm	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/calderon/20-07-17/indices/csm.tif
141	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, csm	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/calderon/20-07-17/indices/csm_re.tif
142	Índice DATT en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, datt	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/calderon/20-07-17/indices/datt.tif
143	Índice GNDVI (Green Normalized Difference Vegetation Index - Índice de Vegetación de Diferencia Normalizada Verde ) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, gndvi	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/calderon/20-07-17/indices/gndvi.tif
144	Índice GVI (green vegetation index - Índice vegetación verde) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, gvi	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/calderon/20-07-17/indices/gvi_1.tif
145	Índice NDRE (normalized difference red edge index - índice de borde rojo de diferencia normalizado) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, ndre	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/calderon/20-07-17/indices/ndre.tif
146	Índice NDVI (normalized difference vegetation index - Índice de Vegetación de Diferencia Normalizada) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, ndvi	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/calderon/20-07-17/indices/ndvi.tif
147	Índice NGRDI (Normalized Red-Green Difference Index - Índice de diferencia rojo-verde normalizado) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, ngrdi	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.5 MB	/root/multiespectral/calderon/20-07-17/indices/ngrdi.tif
148	Índice RG en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, rg	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/calderon/20-07-17/indices/rg.tif
149	Índice RVI (Relative Vigor Index - Índice de Vigor Relativo) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, rvi	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/calderon/20-07-17/indices/rvi.tif
150	Índice SR (Simple Ratio - Ratio simple) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, sr	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/calderon/20-07-17/indices/sr.tif
151	Índice SR_NDRE (Simple Ratio_normalized difference red edge index) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, sr_ndre	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/calderon/20-07-17/indices/sr_ndre.tif
152	Índice SR (Simple Ratio - Ratio simple) en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, índice, imágenes, sr	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/calderon/20-07-17/indices/sr_re.tif
153	Ortomosaico banda azul de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2016-12-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	611.8 KB	/root/multiespectral/calderon/20-07-17/mosaicos/blue.tif
154	Ortomosaico banda verde de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2016-12-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	618.6 KB	/root/multiespectral/calderon/20-07-17/mosaicos/green.tif
155	Ortomosaico índice NDVI de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2016-12-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	565.1 KB	/root/multiespectral/calderon/20-07-17/mosaicos/ndvi.tif
156	Ortomosaico banda NIR de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2016-12-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	593.4 KB	/root/multiespectral/calderon/20-07-17/mosaicos/nir.tif
157	Ortomosaico banda roja de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2016-12-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	624.1 KB	/root/multiespectral/calderon/20-07-17/mosaicos/red.tif
158	Ortomosaico banda borde rojo de finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2016-12-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	628.1 KB	/root/multiespectral/calderon/20-07-17/mosaicos/red_edge.tif
159	Imágenes multiespectrales crudas en finca Calderón	multiespectral, arroz, drone, vuelo, calderón, uav, crudas, imágenes	2017-07-23	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	766.7 MB	/root/multiespectral/calderon/23-07-17/crudas/crudas.rar
160	Imágenes multiespectrales crudas en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, crudas, imágenes	2017-05-17	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	5.4 GB	/root/multiespectral/eden/17-05-17/Crudas/Crudas.rar
161	Índice CI (Chlorophyll Index- Índice de clorofila) en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, ci	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	840.3 KB	/root/multiespectral/eden/17-05-17/indices/ci_re.tif
162	Índice CI_re (Chlorophyll Index- Índice de clorofila) en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, csm	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	843.5 KB	/root/multiespectral/eden/17-05-17/indices/csm.tif
163	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, csm	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	825 KB	/root/multiespectral/eden/17-05-17/indices/csm_re.tif
164	Índice DATT en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, datt	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	854.9 KB	/root/multiespectral/eden/17-05-17/indices/datt.tif
165	Índice GNDVI (Green Normalized Difference Vegetation Index - Índice de Vegetación de Diferencia Normalizada Verde ) en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, gndvi	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	800.4 KB	/root/multiespectral/eden/17-05-17/indices/gndvi.tif
166	Índice GVI (green vegetation index - Índice vegetación verde) en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, gvi	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	836.8 KB	/root/multiespectral/eden/17-05-17/indices/gvi.tif
167	Índice NDRE (normalized difference red edge index - índice de borde rojo de diferencia normalizado) en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, ndre	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	819.9 KB	/root/multiespectral/eden/17-05-17/indices/ndre.tif
168	Índice NDVI (normalized difference vegetation index - Índice de Vegetación de Diferencia Normalizada) en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, ndvi	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	794.5 KB	/root/multiespectral/eden/17-05-17/indices/ndvi.tif
169	Índice NGRDI (Normalized Red-Green Difference Index - Índice de diferencia rojo-verde normalizado) en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, ngrdi	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	833.1 KB	/root/multiespectral/eden/17-05-17/indices/ngrdi.tif
170	Índice RG en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, rg	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	821.5 KB	/root/multiespectral/eden/17-05-17/indices/rg.tif
171	Índice RVI (Relative Vigor Index - Índice de Vigor Relativo) en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, rvi	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	843.9 KB	/root/multiespectral/eden/17-05-17/indices/rvi.tif
172	Índice SR (Simple Ratio - Ratio simple) en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, sr	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	843.6 KB	/root/multiespectral/eden/17-05-17/indices/sr.tif
173	Índice SR_NDRE (Simple Ratio_normalized difference red edge index) en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, sr_ndre	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	825 KB	/root/multiespectral/eden/17-05-17/indices/sr_ndre.tif
174	Índice SR (Simple Ratio - Ratio simple) en finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, índice, imágenes, sr	2017-05-30	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	825.7 KB	/root/multiespectral/eden/17-05-17/indices/sr_re.tif
175	Ortomosaico banda azul de finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2017-02-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.7 MB	/root/multiespectral/eden/17-05-17/mosaicos/proyecto_jam_v1_index_blue.tif
176	Ortomosaico banda verde de finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2017-02-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.7 MB	/root/multiespectral/eden/17-05-17/mosaicos/proyecto_jam_v1_index_green.tif
177	Ortomosaico índice NDVI de finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2017-02-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.6 MB	/root/multiespectral/eden/17-05-17/mosaicos/proyecto_jam_v1_index_ndvi.tif
178	Ortomosaico banda NIR de finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2017-02-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.7 MB	/root/multiespectral/eden/17-05-17/mosaicos/proyecto_jam_v1_index_nir.tif
179	Ortomosaico banda roja de finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2017-02-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.8 MB	/root/multiespectral/eden/17-05-17/mosaicos/proyecto_jam_v1_index_red.tif
180	Ortomosaico banda borde rojo de finca Edén	multiespectral, arroz, drone, vuelo, edén, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2017-02-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	1.7 MB	/root/multiespectral/eden/17-05-17/mosaicos/proyecto_jam_v1_index_red_edge.tif
181	Imágenes multiespectrales crudas en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, crudas, imágenes	2018-12-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	5.9 GB	/root/multiespectral/eden/samanes/fase1/crudas/crudas.rar
182	Modelo Digital de Superficie de finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, imágenes, dsm, mds, modelo digital superficie	2019-01-15	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	5.7 MB	/root/multiespectral/eden/samanes/fase1/dsm/2018_12_05_Co_dsm_1_1.tif
183	Índice CI (Chlorophyll Index- Índice de clorofila) en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, índice, imágenes, ci	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	193.3 MB	/root/multiespectral/eden/samanes/fase1/indices/ci_re.tif
184	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, índice, imágenes, csm	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	188.5 MB	/root/multiespectral/eden/samanes/fase1/indices/csm.tif
185	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, índice, imágenes, csm	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	183.4 MB	/root/multiespectral/eden/samanes/fase1/indices/csm_re.tif
186	Índice DATT en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, índice, imágenes, datt	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	198.1 MB	/root/multiespectral/eden/samanes/fase1/indices/datt.tif
187	Índice GNDVI (Green Normalized Difference Vegetation Index - Índice de Vegetación de Diferencia Normalizada Verde ) en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, índice, imágenes, gndvi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	189 MB	/root/multiespectral/eden/samanes/fase1/indices/gndvi.tif
188	Índice GVI (green vegetation index - Índice vegetación verde) en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, índice, imágenes, gvi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	187.8 MB	/root/multiespectral/eden/samanes/fase1/indices/gvi_1.tif
189	Índice NDRE (normalized difference red edge index - índice de borde rojo de diferencia normalizado) en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, índice, imágenes, ndre	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	190.7 MB	/root/multiespectral/eden/samanes/fase1/indices/ndre.tif
190	Índice NDVI (normalized difference vegetation index - Índice de Vegetación de Diferencia Normalizada) en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, índice, imágenes, ndvi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	190.4 MB	/root/multiespectral/eden/samanes/fase1/indices/ndvi.tif
191	Índice NGRDI (Normalized Red-Green Difference Index - Índice de diferencia rojo-verde normalizado) en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, índice, imágenes, ngrdi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	197.8 MB	/root/multiespectral/eden/samanes/fase1/indices/ngrdi.tif
192	Índice RG en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, índice, imágenes, rg	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	183.2 MB	/root/multiespectral/eden/samanes/fase1/indices/rg.tif
193	Índice RVI (Relative Vigor Index - Índice de Vigor Relativo) en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, índice, imágenes, rvi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	189.7 MB	/root/multiespectral/eden/samanes/fase1/indices/rvi.tif
194	Índice SR (Simple Ratio - Ratio simple) en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, índice, imágenes, sr	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	189.7 MB	/root/multiespectral/eden/samanes/fase1/indices/sr.tif
195	Índice SR (Simple Ratio - Ratio simple) en finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, índice, imágenes, sr	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	183.4 MB	/root/multiespectral/eden/samanes/fase1/indices/sr_re.tif
196	Ortomosaico banda azul de finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2019-01-15	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	159.5 MB	/root/multiespectral/eden/samanes/fase1/mosaicos/2018_12_05_Co_index_blue.tif
197	Ortomosaico banda verde de finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2019-01-15	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	156.7 MB	/root/multiespectral/eden/samanes/fase1/mosaicos/2018_12_05_Co_index_green.tif
198	Ortomosaico índice NDVI de finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2019-01-15	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	160.7 MB	/root/multiespectral/eden/samanes/fase1/mosaicos/2018_12_05_Co_index_ndvi.tif
199	Ortomosaico banda NIR de finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2019-01-15	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	156 MB	/root/multiespectral/eden/samanes/fase1/mosaicos/2018_12_05_Co_index_nir.tif
200	Ortomosaico banda roja de finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2019-01-15	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	158.6 MB	/root/multiespectral/eden/samanes/fase1/mosaicos/2018_12_05_Co_index_red.tif
201	Ortomosaico banda borde rojo de finca Edén, lote Samanes, fase 1	multiespectral, arroz, drone, vuelo, edén, samanes, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2019-01-15	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	1	CIBioFi-GISMODEL	Acceso libre	tif	155.3 MB	/root/multiespectral/eden/samanes/fase1/mosaicos/2018_12_05_Co_index_red_edge.tif
202	Imágenes multiespectrales crudas en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, crudas, imágenes	2018-12-18	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	6 GB	/root/multiespectral/eden/samanes/fase2/crudas/crudas.rar
203	Modelo Digital de Superficie de finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, imágenes, dsm, mds, modelo digital superficie	2019-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	5.7 MB	/root/multiespectral/eden/samanes/fase2/dsm/2018_12_18_90m_dsm.tif
204	Índice CI (Chlorophyll Index- Índice de clorofila) en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, índice, imágenes, ci	2019-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	1.1 MB	/root/multiespectral/eden/samanes/fase2/indices/ci_re.tif
205	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, índice, imágenes, csm	2019-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	7.2 MB	/root/multiespectral/eden/samanes/fase2/indices/csm.tif
206	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, índice, imágenes, csm	2019-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	7.2 MB	/root/multiespectral/eden/samanes/fase2/indices/csm_re.tif
207	Índice DATT en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, índice, imágenes, datt	2019-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	7.4 MB	/root/multiespectral/eden/samanes/fase2/indices/datt.tif
208	Índice GNDVI (Green Normalized Difference Vegetation Index - Índice de Vegetación de Diferencia Normalizada Verde ) en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, índice, imágenes, gndvi	2019-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	7 MB	/root/multiespectral/eden/samanes/fase2/indices/gndvi.tif
209	Índice GVI (green vegetation index - Índice vegetación verde) en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, índice, imágenes, gvi	2019-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	7.1 MB	/root/multiespectral/eden/samanes/fase2/indices/gvi_1.tif
210	Índice NDRE (normalized difference red edge index - índice de borde rojo de diferencia normalizado) en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, índice, imágenes, ndre	2019-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	1.4 MB	/root/multiespectral/eden/samanes/fase2/indices/ndre.tif
211	Índice NDVI (normalized difference vegetation index - Índice de Vegetación de Diferencia Normalizada) en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, índice, imágenes, ndvi	2019-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	7.3 MB	/root/multiespectral/eden/samanes/fase2/indices/ndvi.tif
212	Índice NGRDI (Normalized Red-Green Difference Index - Índice de diferencia rojo-verde normalizado) en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, índice, imágenes, ngrdi	2019-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	6.8 MB	/root/multiespectral/eden/samanes/fase2/indices/ngrdi.tif
213	Índice RG en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, índice, imágenes, rg	2019-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	7.1 MB	/root/multiespectral/eden/samanes/fase2/indices/rg.tif
214	Índice RVI (Relative Vigor Index - Índice de Vigor Relativo) en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, índice, imágenes, rvi	2019-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	7.2 MB	/root/multiespectral/eden/samanes/fase2/indices/rvi.tif
215	Índice SR (Simple Ratio - Ratio simple) en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, índice, imágenes, sr	2019-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	7.2 MB	/root/multiespectral/eden/samanes/fase2/indices/sr.tif
216	Índice SR (Simple Ratio - Ratio simple) en finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, índice, imágenes, sr	2019-02-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	7.2 MB	/root/multiespectral/eden/samanes/fase2/indices/sr_re.tif
217	Ortomosaico banda azul de finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2019-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	12.3 MB	/root/multiespectral/eden/samanes/fase2/mosaicos/2018_12_18_90m_index_blue.tif
237	Índice SR (Simple Ratio - Ratio simple) en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, índice, imágenes, sr	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	15.1 MB	/root/multiespectral/eden/samanes/fase3/indices/sr_re.tif
218	Ortomosaico banda verde de finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2019-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	12.3 MB	/root/multiespectral/eden/samanes/fase2/mosaicos/2018_12_18_90m_index_green.tif
219	Ortomosaico índice NDVI de finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2019-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	12.7 MB	/root/multiespectral/eden/samanes/fase2/mosaicos/2018_12_18_90m_index_ndvi.tif
220	Ortomosaico banda NIR de finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2019-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	12.4 MB	/root/multiespectral/eden/samanes/fase2/mosaicos/2018_12_18_90m_index_nir.tif
221	Ortomosaico banda roja de finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2019-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	12.8 MB	/root/multiespectral/eden/samanes/fase2/mosaicos/2018_12_18_90m_index_red.tif
222	Ortomosaico banda borde rojo de finca Edén, lote Samanes, fase 2	multiespectral, arroz, drone, vuelo, edén, samanes, fase 2, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2019-02-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	2	CIBioFi-GISMODEL	Acceso libre	tif	12.3 MB	/root/multiespectral/eden/samanes/fase2/mosaicos/2018_12_18_90m_index_red_edge.tif
223	Imágenes multiespectrales crudas en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, crudas, imágenes	2019-01-11	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	3.9 GB	/root/multiespectral/eden/samanes/fase3/crudas/crudas.rar
224	Modelo Digital de Superficie de finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, imágenes, dsm, mds, modelo digital superficie	2019-01-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	6.2 MB	/root/multiespectral/eden/samanes/fase3/dsm/2019_01_11_dsm_1_1.tif
225	Índice CI (Chlorophyll Index- Índice de clorofila) en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, índice, imágenes, ci	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	15.6 MB	/root/multiespectral/eden/samanes/fase3/indices/ci_re.tif
226	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, índice, imágenes, csm	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	15.7 MB	/root/multiespectral/eden/samanes/fase3/indices/csm.tif
227	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, índice, imágenes, csm	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	15.1 MB	/root/multiespectral/eden/samanes/fase3/indices/csm_re.tif
228	Índice DATT en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, índice, imágenes, datt	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	16.5 MB	/root/multiespectral/eden/samanes/fase3/indices/datt.tif
229	Índice GNDVI (Green Normalized Difference Vegetation Index - Índice de Vegetación de Diferencia Normalizada Verde ) en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, índice, imágenes, gndvi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	15.1 MB	/root/multiespectral/eden/samanes/fase3/indices/gndvi.tif
230	Índice GVI (green vegetation index - Índice vegetación verde) en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, índice, imágenes, gvi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	15.3 MB	/root/multiespectral/eden/samanes/fase3/indices/gvi_1.tif
231	Índice NDRE (normalized difference red edge index - índice de borde rojo de diferencia normalizado) en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, índice, imágenes, ndre	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	15.4 MB	/root/multiespectral/eden/samanes/fase3/indices/ndre.tif
232	Índice NDVI (normalized difference vegetation index - Índice de Vegetación de Diferencia Normalizada) en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, índice, imágenes, ndvi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	15.2 MB	/root/multiespectral/eden/samanes/fase3/indices/ndvi.tif
233	Índice NGRDI (Normalized Red-Green Difference Index - Índice de diferencia rojo-verde normalizado) en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, índice, imágenes, ngrdi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	16 MB	/root/multiespectral/eden/samanes/fase3/indices/ngrdi.tif
234	Índice RG en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, índice, imágenes, rg	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	15.2 MB	/root/multiespectral/eden/samanes/fase3/indices/rg.tif
235	Índice RVI (Relative Vigor Index - Índice de Vigor Relativo) en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, índice, imágenes, rvi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	15.7 MB	/root/multiespectral/eden/samanes/fase3/indices/rvi.tif
236	Índice SR (Simple Ratio - Ratio simple) en finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, índice, imágenes, sr	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	15.7 MB	/root/multiespectral/eden/samanes/fase3/indices/sr.tif
238	Ortomosaico banda azul de finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2019-01-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	13 MB	/root/multiespectral/eden/samanes/fase3/mosaicos/2019_01_11_index_blue.tif
239	Ortomosaico banda verde de finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2019-01-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	13.1 MB	/root/multiespectral/eden/samanes/fase3/mosaicos/2019_01_11_index_green.tif
240	Ortomosaico índice NDVI de finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2019-01-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	12.8 MB	/root/multiespectral/eden/samanes/fase3/mosaicos/2019_01_11_index_ndvi.tif
241	Ortomosaico banda NIR de finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2019-01-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	13.4 MB	/root/multiespectral/eden/samanes/fase3/mosaicos/2019_01_11_index_nir.tif
242	Ortomosaico banda roja de finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2019-01-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	13.3 MB	/root/multiespectral/eden/samanes/fase3/mosaicos/2019_01_11_index_red.tif
243	Ortomosaico banda borde rojo de finca Edén, lote Samanes, fase 3	multiespectral, arroz, drone, vuelo, edén, samanes, fase 3, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2019-01-14	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	3	CIBioFi-GISMODEL	Acceso libre	tif	13.2 MB	/root/multiespectral/eden/samanes/fase3/mosaicos/2019_01_11_index_red_edge.tif
244	Imágenes multiespectrales crudas en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, crudas, imágenes	2019-01-31	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	3.8 GB	/root/multiespectral/eden/samanes/fase4/crudas/crudas.rar
245	Modelo Digital de Superficie de finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, imágenes, dsm, mds, modelo digital superficie	2019-02-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	5.8 MB	/root/multiespectral/eden/samanes/fase4/dsm/2019_01_31_dsm.tif
246	Índice CI (Chlorophyll Index- Índice de clorofila) en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, índice, imágenes, ci	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	14.8 MB	/root/multiespectral/eden/samanes/fase4/indices/ci_re.tif
247	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, índice, imágenes, csm	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	15.1 MB	/root/multiespectral/eden/samanes/fase4/indices/csm.tif
248	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, índice, imágenes, csm	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	14.5 MB	/root/multiespectral/eden/samanes/fase4/indices/csm_re.tif
249	Índice DATT en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, índice, imágenes, datt	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	15.2 MB	/root/multiespectral/eden/samanes/fase4/indices/datt.tif
250	Índice GNDVI (Green Normalized Difference Vegetation Index - Índice de Vegetación de Diferencia Normalizada Verde ) en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, índice, imágenes, gndvi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	13.9 MB	/root/multiespectral/eden/samanes/fase4/indices/gndvi.tif
251	Índice GVI (green vegetation index - Índice vegetación verde) en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, índice, imágenes, gvi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	14.7 MB	/root/multiespectral/eden/samanes/fase4/indices/gvi_1.tif
252	Índice NDRE (normalized difference red edge index - índice de borde rojo de diferencia normalizado) en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, índice, imágenes, ndre	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	14.4 MB	/root/multiespectral/eden/samanes/fase4/indices/ndre.tif
253	Índice NDVI (normalized difference vegetation index - Índice de Vegetación de Diferencia Normalizada) en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, índice, imágenes, ndvi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	13.7 MB	/root/multiespectral/eden/samanes/fase4/indices/ndvi.tif
254	Índice NGRDI (Normalized Red-Green Difference Index - Índice de diferencia rojo-verde normalizado) en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, índice, imágenes, ngrdi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	15.2 MB	/root/multiespectral/eden/samanes/fase4/indices/ngrdi.tif
255	Índice RG en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, índice, imágenes, rg	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	14.6 MB	/root/multiespectral/eden/samanes/fase4/indices/rg.tif
256	Índice RVI (Relative Vigor Index - Índice de Vigor Relativo) en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, índice, imágenes, rvi	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	15.1 MB	/root/multiespectral/eden/samanes/fase4/indices/rvi.tif
276	Índice RG en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, índice, imágenes, rg	2019-02-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	7.3 MB	/root/multiespectral/eden/samanes/fase5/indices/rg_p.tif
257	Índice SR (Simple Ratio - Ratio simple) en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, índice, imágenes, sr	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	15.1 MB	/root/multiespectral/eden/samanes/fase4/indices/sr.tif
258	Índice SR (Simple Ratio - Ratio simple) en finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, índice, imágenes, sr	2019-02-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	14.5 MB	/root/multiespectral/eden/samanes/fase4/indices/sr_re.tif
259	Ortomosaico banda azul de finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2019-02-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	12.3 MB	/root/multiespectral/eden/samanes/fase4/mosaicos/2019_01_31_index_blue.tif
260	Ortomosaico banda verde de finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2019-02-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	12.5 MB	/root/multiespectral/eden/samanes/fase4/mosaicos/2019_01_31_index_green.tif
261	Ortomosaico índice NDVI de finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2019-02-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	11 MB	/root/multiespectral/eden/samanes/fase4/mosaicos/2019_01_31_index_ndvi.tif
262	Ortomosaico banda NIR de finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2019-02-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	12.7 MB	/root/multiespectral/eden/samanes/fase4/mosaicos/2019_01_31_index_nir.tif
263	Ortomosaico banda roja de finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2019-02-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	12.7 MB	/root/multiespectral/eden/samanes/fase4/mosaicos/2019_01_31_index_red.tif
264	Ortomosaico banda borde rojo de finca Edén, lote Samanes, fase 4	multiespectral, arroz, drone, vuelo, edén, samanes, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2019-02-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	4	CIBioFi-GISMODEL	Acceso libre	tif	12.5 MB	/root/multiespectral/eden/samanes/fase4/mosaicos/2019_01_31_index_red_edge.tif
265	Imágenes multiespectrales crudas en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, crudas, imágenes	2019-02-18	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	3.8 GB	/root/multiespectral/eden/samanes/fase5/crudas/crudas.rar
266	Modelo Digital de Superficie de finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, imágenes, dsm, mds, modelo digital superficie	2019-02-21	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	6.1 MB	/root/multiespectral/eden/samanes/fase5/dsm/2019_02_18_dsm_1_1.tif
267	Índice CI (Chlorophyll Index- Índice de clorofila) en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, índice, imágenes, ci	2019-02-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	7.4 MB	/root/multiespectral/eden/samanes/fase5/indices/ci_re_p.tif
268	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, índice, imágenes, csm	2019-02-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	7.3 MB	/root/multiespectral/eden/samanes/fase5/indices/csm_p.tif
269	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, índice, imágenes, csm	2019-02-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	7.3 MB	/root/multiespectral/eden/samanes/fase5/indices/csm_re_p.tif
270	Índice DATT en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, índice, imágenes, datt	2019-02-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	7.6 MB	/root/multiespectral/eden/samanes/fase5/indices/datt_p.tif
271	Índice GNDVI (Green Normalized Difference Vegetation Index - Índice de Vegetación de Diferencia Normalizada Verde ) en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, índice, imágenes, gndvi	2019-02-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	7.1 MB	/root/multiespectral/eden/samanes/fase5/indices/gndvi_p.tif
272	Índice GVI (green vegetation index - Índice vegetación verde) en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, índice, imágenes, gvi	2019-02-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	7.3 MB	/root/multiespectral/eden/samanes/fase5/indices/gvi_1_p.tif
273	Índice NDRE (normalized difference red edge index - índice de borde rojo de diferencia normalizado) en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, índice, imágenes, ndre	2019-02-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	7.3 MB	/root/multiespectral/eden/samanes/fase5/indices/ndre_p.tif
274	Índice NDVI (normalized difference vegetation index - Índice de Vegetación de Diferencia Normalizada) en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, índice, imágenes, ndvi	2019-02-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	7 MB	/root/multiespectral/eden/samanes/fase5/indices/ndvi_p.tif
275	Índice NGRDI (Normalized Red-Green Difference Index - Índice de diferencia rojo-verde normalizado) en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, índice, imágenes, ngrdi	2019-02-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	7.3 MB	/root/multiespectral/eden/samanes/fase5/indices/ngrdi_p.tif
277	Índice RVI (Relative Vigor Index - Índice de Vigor Relativo) en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, índice, imágenes, rvi	2019-02-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	7.3 MB	/root/multiespectral/eden/samanes/fase5/indices/rvi_p.tif
278	Índice SR (Simple Ratio - Ratio simple) en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, índice, imágenes, sr	2019-02-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	7.3 MB	/root/multiespectral/eden/samanes/fase5/indices/sr_p.tif
279	Índice SR (Simple Ratio - Ratio simple) en finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, índice, imágenes, sr	2019-02-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	7.3 MB	/root/multiespectral/eden/samanes/fase5/indices/sr_re_p.tif
280	Ortomosaico banda azul de finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2019-02-21	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	13 MB	/root/multiespectral/eden/samanes/fase5/mosaicos/2019_02_18_index_blue.tif
281	Ortomosaico banda verde de finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2019-02-21	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	13 MB	/root/multiespectral/eden/samanes/fase5/mosaicos/2019_02_18_index_green.tif
282	Ortomosaico índice NDVI de finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2019-02-21	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	11.5 MB	/root/multiespectral/eden/samanes/fase5/mosaicos/2019_02_18_index_ndvi.tif
283	Ortomosaico banda NIR de finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2019-02-21	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	12.4 MB	/root/multiespectral/eden/samanes/fase5/mosaicos/2019_02_18_index_nir.tif
284	Ortomosaico banda roja de finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2019-02-21	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	13.1 MB	/root/multiespectral/eden/samanes/fase5/mosaicos/2019_02_18_index_red.tif
285	Ortomosaico banda borde rojo de finca Edén, lote Samanes, fase 5	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2019-02-21	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	5	CIBioFi-GISMODEL	Acceso libre	tif	12.9 MB	/root/multiespectral/eden/samanes/fase5/mosaicos/2019_02_18_index_red_edge.tif
286	Imágenes multiespectrales crudas en finca Edén, lote Samanes, fase 6	multiespectral, arroz, drone, vuelo, edén, samanes, fase 6, uav, crudas, imágenes	2019-03-20	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	Samanes	6	CIBioFi-GISMODEL	Acceso libre	tif	4 GB	/root/multiespectral/eden/samanes/fase6/crudas/crudas.rar
287	Modelo Digital de Superficie de finca Edén, lote Samanes, fase 6	multiespectral, arroz, drone, vuelo, edén, samanes, fase 5, uav, imágenes, dsm, mds, modelo digital superficie	2019-02-21	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	6	CIBioFi-GISMODEL	Acceso libre	tif	5.7 MB	/root/multiespectral/eden/samanes/fase6/dsm/2019_03_20_25cmPix_dsm.tif
288	Ortomosaico banda azul de finca Edén, lote Samanes, fase 6	multiespectral, arroz, drone, vuelo, edén, samanes, fase 6, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2019-04-10	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	6	CIBioFi-GISMODEL	Acceso libre	tif	12.8 MB	/root/multiespectral/eden/samanes/fase6/mosaicos/2019_03_20_25cmPix_index_blue.tif
289	Ortomosaico banda verde de finca Edén, lote Samanes, fase 6	multiespectral, arroz, drone, vuelo, edén, samanes, fase 6, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2019-04-10	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	6	CIBioFi-GISMODEL	Acceso libre	tif	13 MB	/root/multiespectral/eden/samanes/fase6/mosaicos/2019_03_20_25cmPix_index_green.tif
290	Ortomosaico índice NDVI de finca Edén, lote Samanes, fase 6	multiespectral, arroz, drone, vuelo, edén, samanes, fase 6, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2019-04-10	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	6	CIBioFi-GISMODEL	Acceso libre	tif	11.8 MB	/root/multiespectral/eden/samanes/fase6/mosaicos/2019_03_20_25cmPix_index_ndvi.tif
291	Ortomosaico banda NIR de finca Edén, lote Samanes, fase 6	multiespectral, arroz, drone, vuelo, edén, samanes, fase 6, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2019-04-10	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	6	CIBioFi-GISMODEL	Acceso libre	tif	12.7 MB	/root/multiespectral/eden/samanes/fase6/mosaicos/2019_03_20_25cmPix_index_nir.tif
292	Ortomosaico banda roja de finca Edén, lote Samanes, fase 6	multiespectral, arroz, drone, vuelo, edén, samanes, fase 6, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2019-04-10	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	6	CIBioFi-GISMODEL	Acceso libre	tif	13.1 MB	/root/multiespectral/eden/samanes/fase6/mosaicos/2019_03_20_25cmPix_index_red.tif
293	Ortomosaico banda borde rojo de finca Edén, lote Samanes, fase 6	multiespectral, arroz, drone, vuelo, edén, samanes, fase 6, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2019-04-10	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Samanes	6	CIBioFi-GISMODEL	Acceso libre	tif	12.7 MB	/root/multiespectral/eden/samanes/fase6/mosaicos/2019_03_20_25cmPix_index_red_edge.tif
294	Imágenes multiespectrales crudas en finca Eucadia	multiespectral, arroz, drone, vuelo, eucadia, uav, crudas, imágenes	2017-07-23	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	315.4 MB	/root/multiespectral/eucadia/crudas/crudas.rar
295	Imágenes multiespectrales crudas en finca San José, lote Islita	multiespectral, arroz, drone, vuelo, san josé, islita, crudas, imágenes	2019-08-02	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	Islita	\N	CIBioFi-GISMODEL	Acceso libre	tif	6 GB	/root/multiespectral/san_jose/islita/crudas/crudas.rar
296	Imágenes multiespectrales crudas en finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 1, crudas, imágenes	2018-10-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	2.9 GB	/root/multiespectral/san_jose/la_isla/fase1/crudas/crudas.rar
297	Modelo Digital de Superficie de finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 1, uav, imágenes, dsm, mds, modelo digital superficie	2019-02-18	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	2 MB	/root/multiespectral/san_jose/la_isla/fase1/dsm/04-10-18_dsm.tif
298	Índice CI (Chlorophyll Index- Índice de clorofila) en finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé. la isla, fase 1, uav, índice, imágenes, ci	2018-10-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	1.5 GB	/root/multiespectral/san_jose/la_isla/fase1/indices/ci_re.tif
299	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé. la isla, fase 1, uav, índice, imágenes, csm	2018-10-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	1.5 GB	/root/multiespectral/san_jose/la_isla/fase1/indices/csm.tif
300	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé. la isla, fase 1, uav, índice, imágenes, csm	2018-10-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	1.5 GB	/root/multiespectral/san_jose/la_isla/fase1/indices/csm_re.tif
301	Índice DATT en finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé. la isla, fase 1, uav, índice, imágenes, datt	2018-10-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	1.4 GB	/root/multiespectral/san_jose/la_isla/fase1/indices/datt.tif
302	Índice GNDVI (Green Normalized Difference Vegetation Index - Índice de Vegetación de Diferencia Normalizada Verde ) en finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé. la isla, fase 1, uav, índice, imágenes, gndvi	2018-10-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	1.5 GB	/root/multiespectral/san_jose/la_isla/fase1/indices/gndvi.tif
303	Índice GVI (green vegetation index - Índice vegetación verde) en finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé. la isla, fase 1, uav, índice, imágenes, gvi	2018-10-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	1.5 GB	/root/multiespectral/san_jose/la_isla/fase1/indices/gvi_1.tif
304	Índice NDRE (normalized difference red edge index - índice de borde rojo de diferencia normalizado) en finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé. la isla, fase 1, uav, índice, imágenes, ndre	2018-10-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	1.5 GB	/root/multiespectral/san_jose/la_isla/fase1/indices/ndre.tif
305	Índice NDVI (normalized difference vegetation index - Índice de Vegetación de Diferencia Normalizada) en finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé. la isla, fase 1, uav, índice, imágenes, ndvi	2018-10-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	1.5 GB	/root/multiespectral/san_jose/la_isla/fase1/indices/ndvi.tif
306	Índice NGRDI (Normalized Red-Green Difference Index - Índice de diferencia rojo-verde normalizado) en finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé. la isla, fase 1, uav, índice, imágenes, ngrdi	2018-10-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	1.6 GB	/root/multiespectral/san_jose/la_isla/fase1/indices/ngrdi.tif
307	Índice RG en finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé. la isla, fase 1, uav, índice, imágenes, rg	2018-10-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	1.6 GB	/root/multiespectral/san_jose/la_isla/fase1/indices/rg.tif
308	Índice RVI (Relative Vigor Index - Índice de Vigor Relativo) en finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé. la isla, fase 1, uav, índice, imágenes, rvi	2018-10-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	1.5 GB	/root/multiespectral/san_jose/la_isla/fase1/indices/rvi.tif
309	Índice SR (Simple Ratio - Ratio simple) en finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé. la isla, fase 1, uav, índice, imágenes, sr	2018-10-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	1.5 GB	/root/multiespectral/san_jose/la_isla/fase1/indices/sr_re.tif
310	Ortomosaico banda azul de finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2018-09-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	600.8 MB	/root/multiespectral/san_jose/la_isla/fase1/mosaicos/04-10-18_index_blue.tif
311	Ortomosaico banda verde de finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2018-09-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	593.1 MB	/root/multiespectral/san_jose/la_isla/fase1/mosaicos/04-10-18_index_green.tif
312	Ortomosaico índice NDVI de finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2018-09-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	561.3 MB	/root/multiespectral/san_jose/la_isla/fase1/mosaicos/04-10-18_index_ndvi.tif
313	Ortomosaico banda NIR de finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2018-09-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	567.4 MB	/root/multiespectral/san_jose/la_isla/fase1/mosaicos/04-10-18_index_nir.tif
314	Ortomosaico banda roja de finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2018-09-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	594.6 MB	/root/multiespectral/san_jose/la_isla/fase1/mosaicos/04-10-18_index_red.tif
315	Ortomosaico banda borde rojo de finca San José, lote La Isla, fase 1	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2018-09-08	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	1	CIBioFi-GISMODEL	Acceso libre	tif	580.1 MB	/root/multiespectral/san_jose/la_isla/fase1/mosaicos/04-10-18_index_red_edge.tif
316	Imágenes multiespectrales crudas en finca San José, lote La Isla, fase 2	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 2, crudas, imágenes	2018-11-09	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	La Isla	2	CIBioFi-GISMODEL	Acceso libre	tif	7.5 GB	/root/multiespectral/san_jose/la_isla/fase2/crudas/crudas.rar
317	Modelo Digital de Superficie de finca San José, lote La Isla, fase 2	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 2, uav, imágenes, dsm, mds, modelo digital superficie	2018-10-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	2	CIBioFi-GISMODEL	Acceso libre	tif	159.3 MB	/root/multiespectral/san_jose/la_isla/fase2/dsm/2018_11_09_dsm.tif
318	Ortomosaico banda azul de finca San José, lote La Isla, fase 2	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 2, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2018-10-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	2	CIBioFi-GISMODEL	Acceso libre	tif	519.5 MB	/root/multiespectral/san_jose/la_isla/fase2/mosaicos/2018_11_09_index_blue.tif
319	Ortomosaico banda verde de finca San José, lote La Isla, fase 2	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 2, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2018-10-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	2	CIBioFi-GISMODEL	Acceso libre	tif	516.4 MB	/root/multiespectral/san_jose/la_isla/fase2/mosaicos/2018_11_09_index_green.tif
320	Ortomosaico índice NDVI de finca San José, lote La Isla, fase 2	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 2, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2018-10-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	2	CIBioFi-GISMODEL	Acceso libre	tif	450.7 MB	/root/multiespectral/san_jose/la_isla/fase2/mosaicos/2018_11_09_index_ndvi.tif
321	Ortomosaico banda NIR de finca San José, lote La Isla, fase 2	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 2, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2018-10-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	2	CIBioFi-GISMODEL	Acceso libre	tif	485.9 MB	/root/multiespectral/san_jose/la_isla/fase2/mosaicos/2018_11_09_index_nir.tif
322	Ortomosaico banda roja de finca San José, lote La Isla, fase 2	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 2, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2018-10-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	2	CIBioFi-GISMODEL	Acceso libre	tif	514.7 MB	/root/multiespectral/san_jose/la_isla/fase2/mosaicos/2018_11_09_index_red.tif
323	Ortomosaico banda borde rojo de finca San José, lote La Isla, fase 2	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 2, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2018-10-22	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	2	CIBioFi-GISMODEL	Acceso libre	tif	501.2 MB	/root/multiespectral/san_jose/la_isla/fase2/mosaicos/2018_11_09_index_red_edge.tif
324	Imágenes multiespectrales crudas en finca San José, lote La Isla, fase 3	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 3, crudas, imágenes	2018-11-26	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	La Isla	3	CIBioFi-GISMODEL	Acceso libre	tif	4.7 GB	/root/multiespectral/san_jose/la_isla/fase3/crudas/crudas.rar
325	Modelo Digital de Superficie de finca San José, lote La Isla, fase 3	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 3, uav, imágenes, dsm, mds, modelo digital superficie	2018-11-24	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	3	CIBioFi-GISMODEL	Acceso libre	tif	3.7 MB	/root/multiespectral/san_jose/la_isla/fase3/dsm/2018_11_26_dsm_1_1.tif
326	Ortomosaico banda azul de finca San José, lote La Isla, fase 3	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 3, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2018-11-24	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	3	CIBioFi-GISMODEL	Acceso libre	tif	84.6 MB	/root/multiespectral/san_jose/la_isla/fase3/mosaicos/2018_11_26_index_blue.tif
327	Ortomosaico banda verde de finca San José, lote La Isla, fase 3	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 3, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2018-11-24	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	3	CIBioFi-GISMODEL	Acceso libre	tif	85.5 MB	/root/multiespectral/san_jose/la_isla/fase3/mosaicos/2018_11_26_index_green.tif
328	Ortomosaico índice NDVI de finca San José, lote La Isla, fase 3	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 3, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2018-11-24	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	3	CIBioFi-GISMODEL	Acceso libre	tif	73.2 MB	/root/multiespectral/san_jose/la_isla/fase3/mosaicos/2018_11_26_index_ndvi.tif
329	Ortomosaico banda NIR de finca San José, lote La Isla, fase 3	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 3, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2018-11-24	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	3	CIBioFi-GISMODEL	Acceso libre	tif	79.4 MB	/root/multiespectral/san_jose/la_isla/fase3/mosaicos/2018_11_26_index_nir.tif
330	Ortomosaico banda roja de finca San José, lote La Isla, fase 3	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 3, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2018-11-24	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	3	CIBioFi-GISMODEL	Acceso libre	tif	84.3 MB	/root/multiespectral/san_jose/la_isla/fase3/mosaicos/2018_11_26_index_red.tif
331	Ortomosaico banda borde rojo de finca San José, lote La Isla, fase 3	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 3, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2018-11-24	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	3	CIBioFi-GISMODEL	Acceso libre	tif	82.2 MB	/root/multiespectral/san_jose/la_isla/fase3/mosaicos/2018_11_26_index_red_edge.tif
332	Imágenes multiespectrales crudas en finca San José, lote La Isla, fase 4	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 4, crudas, imágenes	2019-01-16	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	La Isla	4	CIBioFi-GISMODEL	Acceso libre	tif	9 GB	/root/multiespectral/san_jose/la_isla/fase4/crudas/crudas.rar
333	Modelo Digital de Superficie de finca San José, lote La Isla, fase 4	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 4, uav, imágenes, dsm, mds, modelo digital superficie	2019-01-18	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	4	CIBioFi-GISMODEL	Acceso libre	tif	3.2 MB	/root/multiespectral/san_jose/la_isla/fase4/dsm/2019_01_16_120m_dsm_1_1.tif
334	Ortomosaico banda azul de finca San José, lote La Isla, fase 4	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2019-01-18	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	4	CIBioFi-GISMODEL	Acceso libre	tif	6.8 MB	/root/multiespectral/san_jose/la_isla/fase4/mosaicos/2019_01_16_120m_index_blue.tif
335	Ortomosaico banda verde de finca San José, lote La Isla, fase 4	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2019-01-18	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	4	CIBioFi-GISMODEL	Acceso libre	tif	6.8 MB	/root/multiespectral/san_jose/la_isla/fase4/mosaicos/2019_01_16_120m_index_green.tif
336	Ortomosaico índice NDVI de finca San José, lote La Isla, fase 4	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, ndvi	2019-01-18	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	4	CIBioFi-GISMODEL	Acceso libre	tif	6.3 MB	/root/multiespectral/san_jose/la_isla/fase4/mosaicos/2019_01_16_120m_index_ndvi.tif
337	Ortomosaico banda NIR de finca San José, lote La Isla, fase 4	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2019-01-18	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	4	CIBioFi-GISMODEL	Acceso libre	tif	6.6 MB	/root/multiespectral/san_jose/la_isla/fase4/mosaicos/2019_01_16_120m_index_nir.tif
338	Ortomosaico banda roja de finca San José, lote La Isla, fase 4	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2019-01-18	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	4	CIBioFi-GISMODEL	Acceso libre	tif	6.9 MB	/root/multiespectral/san_jose/la_isla/fase4/mosaicos/2019_01_16_120m_index_red.tif
339	Ortomosaico banda borde rojo de finca San José, lote La Isla, fase 4	multiespectral, arroz, drone, vuelo, san josé, la isla, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2019-01-18	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	La Isla	4	CIBioFi-GISMODEL	Acceso libre	tif	6.6 MB	/root/multiespectral/san_jose/la_isla/fase4/mosaicos/2019_01_16_120m_index_red_edge.tif
340	Imágenes multiespectrales crudas en finca San José, lote 4	multiespectral, arroz, drone, vuelo, san josé, lote 4, crudas, imágenes	2019-08-02	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	La Isla	4	CIBioFi-GISMODEL	Acceso libre	tif	5.3 GB	/root/multiespectral/san_jose/lote_4/crudas/crudas.rar
341	Ortomosaico banda azul de finca San José, lote 8, fase 1	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2018-11-07	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	1	CIBioFi-GISMODEL	Acceso libre	tif	487.8 MB	/root/multiespectral/san_jose/lote_8/fase1/mosaicos/lote8_fase2_transparent_reflectance_blue.tif
342	Ortomosaico banda verde de finca San José, lote 8, fase 1	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2018-11-07	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	1	CIBioFi-GISMODEL	Acceso libre	tif	491.2 MB	/root/multiespectral/san_jose/lote_8/fase1/mosaicos/lote8_fase2_transparent_reflectance_green.tif
343	Ortomosaico banda NIR de finca San José, lote 8, fase 1	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2018-11-07	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	1	CIBioFi-GISMODEL	Acceso libre	tif	463.1 MB	/root/multiespectral/san_jose/lote_8/fase1/mosaicos/lote8_fase2_transparent_reflectance_nir.tif
344	Ortomosaico banda roja de finca San José, lote 8, fase 1	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2018-11-07	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	1	CIBioFi-GISMODEL	Acceso libre	tif	482.8 MB	/root/multiespectral/san_jose/lote_8/fase1/mosaicos/lote8_fase2_transparent_reflectance_red.tif
345	Ortomosaico banda borde rojo de finca San José, lote 8, fase 1	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 1, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2018-11-07	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	1	CIBioFi-GISMODEL	Acceso libre	tif	479.4 MB	/root/multiespectral/san_jose/lote_8/fase1/mosaicos/lote8_fase2_transparent_reflectance_rededge.tif
346	Imágenes multiespectrales crudas en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, crudas, imágenes	2018-08-10	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	2.3 GB	/root/multiespectral/san_jose/lote_8/fase2/crudas/crudas.rar
347	Modelo Digital de Superficie de finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, imágenes, dsm, mds, modelo digital superficie	2018-11-07	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	101.4 MB	/root/multiespectral/san_jose/lote_8/fase2/dsm/lote8_fase2_dsm.tif
348	Índice CI (Chlorophyll Index- Índice de clorofila) en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, índice, imágenes, ci	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	669.1 MB	/root/multiespectral/san_jose/lote_8/fase2/indices/ci_re.tif
349	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, índice, imágenes, csm	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	522.3 MB	/root/multiespectral/san_jose/lote_8/fase2/indices/csm.tif
350	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, índice, imágenes, csm	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	509.5 MB	/root/multiespectral/san_jose/lote_8/fase2/indices/csm_re.tif
351	Índice DATT en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, índice, imágenes, datt	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	709.2 MB	/root/multiespectral/san_jose/lote_8/fase2/indices/datt.tif
352	Índice GNDVI (Green Normalized Difference Vegetation Index - Índice de Vegetación de Diferencia Normalizada Verde ) en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, índice, imágenes, gndvi	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	494.7 MB	/root/multiespectral/san_jose/lote_8/fase2/indices/gndvi.tif
353	Índice GVI (green vegetation index - Índice vegetación verde) en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, índice, imágenes, gvi	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	516.7 MB	/root/multiespectral/san_jose/lote_8/fase2/indices/gvi_1.tif
354	Índice NDRE (normalized difference red edge index - índice de borde rojo de diferencia normalizado) en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, índice, imágenes, ndre	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	506.3 MB	/root/multiespectral/san_jose/lote_8/fase2/indices/ndre.tif
355	Índice NDVI (normalized difference vegetation index - Índice de Vegetación de Diferencia Normalizada) en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, índice, imágenes, ndvi	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	492 MB	/root/multiespectral/san_jose/lote_8/fase2/indices/ndvi.tif
356	Índice NGRDI (Normalized Red-Green Difference Index - Índice de diferencia rojo-verde normalizado) en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, índice, imágenes, ngrdi	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	550.8 MB	/root/multiespectral/san_jose/lote_8/fase2/indices/ngrdi.tif
357	Índice RG en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, índice, imágenes, rg	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	533.9 MB	/root/multiespectral/san_jose/lote_8/fase2/indices/rg.tif
358	Índice RVI (Relative Vigor Index - Índice de Vigor Relativo) en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, índice, imágenes, rvi	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	522.5 MB	/root/multiespectral/san_jose/lote_8/fase2/indices/rvi.tif
359	Índice SR (Simple Ratio - Ratio simple) en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, índice, imágenes, sr	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	679.1 MB	/root/multiespectral/san_jose/lote_8/fase2/indices/sr.tif
360	Índice SR (Simple Ratio - Ratio simple) en finca San José, lote 8, fase 2	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 2, uav, índice, imágenes, sr	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	2	CIBioFi-GISMODEL	Acceso libre	tif	509.7 MB	/root/multiespectral/san_jose/lote_8/fase2/indices/sr_re.tif
361	Imágenes multiespectrales crudas en finca San José, lote 8, fase 3	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 3, crudas, imágenes	2018-08-28	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	Lote 8	3	CIBioFi-GISMODEL	Acceso libre	tif	2.4 GB	/root/multiespectral/san_jose/lote_8/fase3/crudas/crudas.rar
362	Imágenes multiespectrales crudas en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, crudas, imágenes	2018-09-28	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	2.5 GB	/root/multiespectral/san_jose/lote_8/fase4/crudas/crudas.rar
363	Modelo Digital de Superficie de finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, imágenes, dsm, mds, modelo digital superficie	2018-11-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	127.5 MB	/root/multiespectral/san_jose/lote_8/fase4/dsm/lote8_fase4_dsm.tif
364	Índice CI (Chlorophyll Index- Índice de clorofila) en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, índice, imágenes, ci	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	669.2 MB	/root/multiespectral/san_jose/lote_8/fase4/indices/ci_re.tif
365	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, índice, imágenes, csm	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	679.1 MB	/root/multiespectral/san_jose/lote_8/fase4/indices/csm.tif
366	Índice CSM (Crop Surface Model - Modelo de superficie de cosecha) en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, índice, imágenes, csm	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	664 MB	/root/multiespectral/san_jose/lote_8/fase4/indices/csm_re.tif
367	Índice DATT en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, índice, imágenes, datt	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	709.3 MB	/root/multiespectral/san_jose/lote_8/fase4/indices/datt.tif
368	Índice GNDVI (Green Normalized Difference Vegetation Index - Índice de Vegetación de Diferencia Normalizada Verde ) en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, índice, imágenes, gndvi	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	649.1 MB	/root/multiespectral/san_jose/lote_8/fase4/indices/gndvi.tif
369	Índice GVI (green vegetation index - Índice vegetación verde) en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, índice, imágenes, gvi	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	672.2 MB	/root/multiespectral/san_jose/lote_8/fase4/indices/gvi_1.tif
370	Índice NDRE (normalized difference red edge index - índice de borde rojo de diferencia normalizado) en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, índice, imágenes, ndre	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	664.6 MB	/root/multiespectral/san_jose/lote_8/fase4/indices/ndre.tif
371	Índice NDVI (normalized difference vegetation index - Índice de Vegetación de Diferencia Normalizada) en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, índice, imágenes, ndvi	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	649.8 MB	/root/multiespectral/san_jose/lote_8/fase4/indices/ndvi.tif
372	Índice NGRDI (Normalized Red-Green Difference Index - Índice de diferencia rojo-verde normalizado) en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, índice, imágenes, ngrdi	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	712.3 MB	/root/multiespectral/san_jose/lote_8/fase4/indices/ngrdi.tif
373	Índice RG en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, índice, imágenes, rg	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	682.7 MB	/root/multiespectral/san_jose/lote_8/fase4/indices/rg.tif
374	Índice RVI (Relative Vigor Index - Índice de Vigor Relativo) en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, índice, imágenes, rvi	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	679.2 MB	/root/multiespectral/san_jose/lote_8/fase4/indices/rvi.tif
375	Índice SR (Simple Ratio - Ratio simple) en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, índice, imágenes, sr	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	679.1 MB	/root/multiespectral/san_jose/lote_8/fase4/indices/sr.tif
376	Índice SR (Simple Ratio - Ratio simple) en finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, índice, imágenes, sr	2018-12-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	663.1 MB	/root/multiespectral/san_jose/lote_8/fase4/indices/sr_re.tif
377	Ortomosaico banda azul de finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, azul, blue	2018-11-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	638.4 MB	/root/multiespectral/san_jose/lote_8/fase4/mosaicos/lote8_fase4_transparent_reflectance_blue.tif
378	Ortomosaico banda verde de finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, verde, green	2018-11-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	646.6 MB	/root/multiespectral/san_jose/lote_8/fase4/mosaicos/lote8_fase4_transparent_reflectance_green.tif
379	Ortomosaico banda NIR de finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, nir	2018-11-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	603.7 MB	/root/multiespectral/san_jose/lote_8/fase4/mosaicos/lote8_fase4_transparent_reflectance_nir.tif
380	Ortomosaico banda roja de finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, rojo, red	2018-11-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	636.5 MB	/root/multiespectral/san_jose/lote_8/fase4/mosaicos/lote8_fase4_transparent_reflectance_red.tif
381	Ortomosaico banda borde rojo de finca San José, lote 8, fase 4	multiespectral, arroz, drone, vuelo, san josé, lote 8, fase 4, uav, imágenes, ortofoto, ortoimagen, ortomosaico, borde rojo, red edge	2018-11-06	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8	4	CIBioFi-GISMODEL	Acceso libre	tif	614.2 MB	/root/multiespectral/san_jose/lote_8/fase4/mosaicos/lote8_fase4_transparent_reflectance_rededge.tif
382	Imágenes RGB crudas en finca Edén	rgb, arroz, drone, vuelo, edén, uav, crudas, imágenes	2017-03-23	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	\N	\N	CIBioFi-GISMODEL	Acceso libre	jpg	1.8 GB	/root/rgb/eden/03-23-17/crudas/crudas.rar
383	Imágenes RGB crudas de cultivo de ají, Rozo	rgb, ají, drone, vuelo, rozo, uav, crudas, imágenes	2017-03-10	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	\N	\N	CIBioFi-GISMODEL	Acceso libre	jpg	699.3 MB	/root/rgb/rozo/crudo/crudo.rar
384	Modelo Digital de Superficie de cultivo de ají, Rozo	rgb, ají, drone, vuelo, rozo, uav, imágenes, dsm, mds, modelo digital superficie	2016-12-15	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	150.7 MB	/root/rgb/rozo/dsm/aji_rozo_03_10_dsm.tif
385	Ortomosaico de cultivo de ají en Rozo	rgb, ají, drone, vuelo, rozo , uav, imágenes, ortofoto, ortoimagen, ortomosaico	2016-12-15	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	254.5 MB	/root/rgb/rozo/mosaico/aji_rozo_03_10_transparent_mosaic_group1.tif
386	Imágenes RGB crudas en finca San José	rgb, arroz, drone, vuelo, san josé, uav, crudas, imágenes	2018-05-12	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	\N	\N	CIBioFi-GISMODEL	Acceso libre	jpg	516.8 MB	/root/rgb/san_jose/12-05-18/crudas/crudas.rar
387	Modelo Digital de Superficie de finca San José	rgb, arroz, drone, vuelo, san josé, uav, imágenes, dsm, mds, modelo digital superficie	2017-01-01	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	35.1 MB	/root/rgb/san_jose/12-05-18/dsm/MDS.tif
388	Ortomosaico de finca San José	rgb, arroz, drone, vuelo, san josé , uav, imágenes, ortofoto, ortoimagen, ortomosaico	2017-01-01	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	\N	\N	CIBioFi-GISMODEL	Acceso libre	tif	422 MB	/root/rgb/san_jose/12-05-18/mosaico/Ortofoto.tif
389	Imágenes RGB crudas en finca San José, lotes 8 y 9	rgb, arroz, drone, vuelo, san josé, lote 8, lote 9, uav, crudas, imágenes	2018-12-16	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen cruda	Lote 8 y 9	\N	CIBioFi-GISMODEL	Acceso libre	jpg	296.9 MB	/root/rgb/san_jose/lote_8y9/crudas/Crudas.rar
390	Modelo Digital de Superficie de finca San José, lotes 8 y 9	rgb, arroz, drone, vuelo, san josé, lote 8, lote 9, uav, imágenes, dsm, mds, modelo digital superficie	2017-01-19	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8 y 9	\N	CIBioFi-GISMODEL	Acceso libre	tif	93.8 MB	/root/rgb/san_jose/lote_8y9/dsm/modelo3115_dsm.tif
391	Ortomosaico de finca San José, lotes 8 y 9	rgb, arroz, drone, vuelo, san josé, lote 8, lote 9, uav, imágenes, ortofoto, ortoimagen, ortomosaico	2017-01-19	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Imagen procesada	Lote 8 y 9	\N	CIBioFi-GISMODEL	Acceso libre	tif	211.7 MB	/root/rgb/san_jose/lote_8y9/mosaico/Mosaico3115.tif
392	Puntos de control en tierra de finca Edén, lote samanes	gcp, arroz, puntos control, fotocontrol, vuelo, uav, edén, samanes, topografía	2019-03-27	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	392 Bytes	/root/topografia/fotocontrol/samanes/gcp_samanes.txt
393	Puntos de control en tierra de finca San José, lote 8	gcp, arroz, puntos control, fotocontrol, vuelo, uav, san josé, lote 8, topografía	2020-02-13	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	Lote 8	\N	CIBioFi-GISMODEL	Acceso libre	txt	535 Bytes	/root/topografia/fotocontrol/san_jose/gcp_lote8.txt
394	Puntos de control en tierra de finca San José	gcp, arroz, puntos control, fotocontrol, vuelo, uav, san josé, topografía	2020-02-13	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	461 Bytes	/root/topografia/fotocontrol/san_jose/gcp_san_jose_NPK.txt
395	Puntos de control en tierra de finca San José, lote La Isla	gcp, arroz, puntos control, fotocontrol, vuelo, uav, san josé, la isla, topografía	2019-02-18	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	La Isla	\N	CIBioFi-GISMODEL	Acceso libre	txt	447 Bytes	/root/topografia/fotocontrol/san_jose/la_isla/gcp_la_isla.txt
396	Puntos de control en tierra de finca San José, lote La Isla	gcp, arroz, puntos control, fotocontrol, vuelo, uav, san josé, la isla, topografía	2018-10-19	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	La Isla	\N	CIBioFi-GISMODEL	Acceso libre	txt	826 Bytes	/root/topografia/fotocontrol/san_jose/la_isla/gcp_la_isla_oct18.txt
397	Puntos de control en tierra de finca San José, lotes 8 y 9	gcp, arroz, puntos control, fotocontrol, vuelo, uav, san josé, lote 8, lote 9, topografía	2017-01-17	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	Lote 8 y 9	\N	CIBioFi-GISMODEL	Acceso libre	txt	461 Bytes	/root/topografia/fotocontrol/san_jose/lotes_8y9/gcp_lotes8y9.txt
398	Mojones en finca San José	mojón, mojones, san josé, topografía	2020-02-13	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	\N	\N	CIBioFi-GISMODEL	Acceso libre	txt	246 Bytes	/root/topografia/mojones/san_jose/mojones_san_jose.txt
399	Polígono de finca Calderón	polígono, parcela, calderón, arroz, topografía	2017-10-25	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	\N	\N	CIBioFi-GISMODEL	Acceso libre	shp	1.1 KB	/root/topografia/parcelas/calderon/lote_calderon.rar
400	Polígono de finca Edén	polígono, parcela, edén, arroz, topografía	2017-11-27	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	\N	\N	CIBioFi-GISMODEL	Acceso libre	shp	6.1 KB	/root/topografia/parcelas/eden/lote_eden.rar
401	Polígono de finca San José, lote 8	polígono, parcela, san josé, lote 8, arroz, topografía	2020-02-13	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	Lote 8	\N	CIBioFi-GISMODEL	Acceso libre	shp	1.3 KB	/root/topografia/parcelas/san_jose/lote_8/lote_8.rar
402	Puntos de plantas en finca Calderón	plantas, arroz, puntos, calderón, topografía 	2017-09-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	\N	\N	CIBioFi-GISMODEL	Acceso libre	shp	25.4 KB	/root/topografia/plantas/calderon/plantas_calderon.rar
403	Puntos de plantas en finca Edén	plantas, arroz, puntos, edén, topografía 	2017-09-05	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	\N	\N	CIBioFi-GISMODEL	Acceso libre	shp	29.8 KB	/root/topografia/plantas/eden/plantas_eden.rar
404	Puntos de plantas en finca Eucadia	plantas, arroz, puntos, eucadia, topografía 	2017-09-04	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	\N	\N	CIBioFi-GISMODEL	Acceso libre	shp	24.6 KB	/root/topografia/plantas/eucadia/plantas_eucadia.rar
405	Puntos de plantas en finca San José	plantas, arroz, puntos, san josé, topografía 	2020-02-13	2020-06-01	mi tesis es un plagio	mi tesis es un plagio	Archivo procesado	\N	\N	CIBioFi-GISMODEL	Acceso libre	shp	13.5 KB	/root/topografia/plantas/san_jose/plantas_san_jose.rar
\.


--
-- Name: metadato_idmetadato_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.metadato_idmetadato_seq', 1, false);


--
-- Data for Name: metadatos_has_finca; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.metadatos_has_finca (finca_idfinca, metadato_idmetadato) FROM stdin;
1	1
1	2
1	3
1	4
1	5
1	6
1	7
1	8
1	9
1	10
1	11
1	12
1	13
1	14
2	15
2	16
2	17
2	18
2	19
2	20
2	21
2	22
2	23
2	24
2	25
2	26
2	27
2	28
2	29
2	30
2	31
2	32
5	33
5	34
5	35
5	36
4	37
4	38
4	39
4	40
4	41
4	42
4	43
4	44
4	45
4	46
4	47
4	48
4	49
4	50
4	51
4	52
4	53
4	54
4	55
4	56
4	57
4	58
4	59
4	60
4	61
4	62
4	63
4	64
4	65
4	66
4	67
4	68
4	69
4	70
4	71
4	72
4	73
4	74
4	75
4	76
4	77
4	78
4	79
4	80
4	81
4	82
4	83
4	84
4	85
4	86
1	87
2	88
3	89
4	90
4	91
4	92
4	93
1	94
1	95
1	96
1	97
1	98
1	99
1	100
1	101
1	102
1	103
1	104
1	105
1	106
1	107
1	108
1	109
1	110
1	111
1	112
1	113
1	114
1	115
1	116
1	117
1	118
1	119
1	120
1	121
1	122
1	123
1	124
1	125
1	126
1	127
1	128
1	129
1	130
1	131
1	132
1	133
1	134
1	135
1	136
1	137
1	138
1	139
1	140
1	141
1	142
1	143
1	144
1	145
1	146
1	147
1	148
1	149
1	150
1	151
1	152
1	153
1	154
1	155
1	156
1	157
1	158
1	159
2	160
2	161
2	162
2	163
2	164
2	165
2	166
2	167
2	168
2	169
2	170
2	171
2	172
2	173
2	174
2	175
2	176
2	177
2	178
2	179
2	180
2	181
2	182
2	183
2	184
2	185
2	186
2	187
2	188
2	189
2	190
2	191
2	192
2	193
2	194
2	195
2	196
2	197
2	198
2	199
2	200
2	201
2	202
2	203
2	204
2	205
2	206
2	207
2	208
2	209
2	210
2	211
2	212
2	213
2	214
2	215
2	216
2	217
2	218
2	219
2	220
2	221
2	222
2	223
2	224
2	225
2	226
2	227
2	228
2	229
2	230
2	231
2	232
2	233
2	234
2	235
2	236
2	237
2	238
2	239
2	240
2	241
2	242
2	243
2	244
2	245
2	246
2	247
2	248
2	249
2	250
2	251
2	252
2	253
2	254
2	255
2	256
2	257
2	258
2	259
2	260
2	261
2	262
2	263
2	264
2	265
2	266
2	267
2	268
2	269
2	270
2	271
2	272
2	273
2	274
2	275
2	276
2	277
2	278
2	279
2	280
2	281
2	282
2	283
2	284
2	285
2	286
2	287
2	288
2	289
2	290
2	291
2	292
2	293
3	294
4	295
4	296
4	297
4	298
4	299
4	300
4	301
4	302
4	303
4	304
4	305
4	306
4	307
4	308
4	309
4	310
4	311
4	312
4	313
4	314
4	315
4	316
4	317
4	318
4	319
4	320
4	321
4	322
4	323
4	324
4	325
4	326
4	327
4	328
4	329
4	330
4	331
4	332
4	333
4	334
4	335
4	336
4	337
4	338
4	339
4	340
4	341
4	342
4	343
4	344
4	345
4	346
4	347
4	348
4	349
4	350
4	351
4	352
4	353
4	354
4	355
4	356
4	357
4	358
4	359
4	360
4	361
4	362
4	363
4	364
4	365
4	366
4	367
4	368
4	369
4	370
4	371
4	372
4	373
4	374
4	375
4	376
4	377
4	378
4	379
4	380
4	381
1	382
5	383
5	384
5	385
4	386
4	387
4	388
4	389
4	390
4	391
2	392
4	393
4	394
4	395
4	396
4	397
4	398
1	399
2	400
4	401
1	402
2	403
3	404
4	405
\.


--
-- Data for Name: metadatos_has_subcategoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.metadatos_has_subcategoria (subcategoria_idsubcategoria, metadato_idmetadato) FROM stdin;
14	1
14	2
14	3
14	4
14	5
14	6
14	7
14	8
14	9
14	10
14	11
14	12
14	13
14	14
14	15
14	16
14	17
14	18
14	19
14	20
14	21
14	22
14	23
14	24
14	25
14	26
14	27
14	28
14	29
14	30
14	31
14	32
14	33
14	34
14	35
14	36
14	37
14	38
14	39
14	40
14	41
14	42
14	43
14	44
14	45
14	46
14	47
14	48
14	49
14	50
14	51
14	52
14	53
14	54
14	55
14	56
14	57
14	58
14	59
14	60
14	61
14	62
14	63
14	64
14	65
14	66
14	67
14	68
14	69
14	70
14	71
14	72
14	73
14	74
14	75
14	76
14	77
14	78
14	79
14	80
14	81
14	82
14	83
14	84
14	85
14	86
13	87
13	88
13	89
13	90
13	91
13	92
13	93
1	94
2	95
3	96
3	97
3	98
3	99
3	100
3	101
3	102
3	103
3	104
3	105
3	106
3	107
3	108
3	109
4	110
4	111
4	112
4	113
4	114
4	115
1	116
2	117
3	118
3	119
3	120
3	121
3	122
3	123
3	124
3	125
3	126
3	127
3	128
3	129
3	130
3	131
4	132
4	133
4	134
4	135
4	136
4	137
2	138
3	139
3	140
3	141
3	142
3	143
3	144
3	145
3	146
3	147
3	148
3	149
3	150
3	151
3	152
4	153
4	154
4	155
4	156
4	157
4	158
1	159
1	160
3	161
3	162
3	163
3	164
3	165
3	166
3	167
3	168
3	169
3	170
3	171
3	172
3	173
3	174
4	175
4	176
4	177
4	178
4	179
4	180
1	181
2	182
3	183
3	184
3	185
3	186
3	187
3	188
3	189
3	190
3	191
3	192
3	193
3	194
3	195
4	196
4	197
4	198
4	199
4	200
4	201
1	202
2	203
3	204
3	205
3	206
3	207
3	208
3	209
3	210
3	211
3	212
3	213
3	214
3	215
3	216
4	217
4	218
4	219
4	220
4	221
4	222
1	223
2	224
3	225
3	226
3	227
3	228
3	229
3	230
3	231
3	232
3	233
3	234
3	235
3	236
3	237
4	238
4	239
4	240
4	241
4	242
4	243
1	244
2	245
3	246
3	247
3	248
3	249
3	250
3	251
3	252
3	253
3	254
3	255
3	256
3	257
3	258
4	259
4	260
4	261
4	262
4	263
4	264
1	265
2	266
3	267
3	268
3	269
3	270
3	271
3	272
3	273
3	274
3	275
3	276
3	277
3	278
3	279
4	280
4	281
4	282
4	283
4	284
4	285
1	286
2	287
4	288
4	289
4	290
4	291
4	292
4	293
1	294
1	295
1	296
2	297
3	298
3	299
3	300
3	301
3	302
3	303
3	304
3	305
3	306
3	307
3	308
3	309
4	310
4	311
4	312
4	313
4	314
4	315
1	316
2	317
4	318
4	319
4	320
4	321
4	322
4	323
1	324
2	325
4	326
4	327
4	328
4	329
4	330
4	331
1	332
2	333
4	334
4	335
4	336
4	337
4	338
4	339
1	340
4	341
4	342
4	343
4	344
4	345
1	346
2	347
3	348
3	349
3	350
3	351
3	352
3	353
3	354
3	355
3	356
3	357
3	358
3	359
3	360
1	361
1	362
2	363
3	364
3	365
3	366
3	367
3	368
3	369
3	370
3	371
3	372
3	373
3	374
3	375
3	376
4	377
4	378
4	379
4	380
4	381
5	382
5	383
6	384
7	385
5	386
6	387
7	388
5	389
6	390
7	391
8	392
8	393
8	394
8	395
8	396
8	397
9	398
10	399
10	400
10	401
11	402
11	403
11	404
11	405
\.


--
-- Data for Name: municipio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.municipio (idmunicipio, departamento_iddepartamento, municipio) FROM stdin;
1	1	Jamundí
2	2	Santander de Quilichao
3	1	Rozo
\.


--
-- Name: municipio_idmunicipio_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.municipio_idmunicipio_seq', 1, false);


--
-- Data for Name: subcategoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subcategoria (idsubcategoria, categoria_idcategoria, subcategoria) FROM stdin;
1	3	Imágenes crudas
2	3	Modelo Digital de Superficie
3	3	Índice multiespectral
4	3	Ortomosaico
5	4	Imágenes crudas
6	4	Modelo Digital de Superficie
7	4	Ortomosaico
8	6	Fotocontrol
9	6	Mojones
10	6	Parcelas
11	6	Plantas
12	5	Tesis
13	2	Fisiología
14	1	Espectrometría
\.


--
-- Name: subcategoria_idsubcategoria_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subcategoria_idsubcategoria_seq', 1, false);


--
-- Name: categoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (idcategoria);


--
-- Name: departamento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departamento
    ADD CONSTRAINT departamento_pkey PRIMARY KEY (iddepartamento);


--
-- Name: finca_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.finca
    ADD CONSTRAINT finca_pkey PRIMARY KEY (idfinca);


--
-- Name: metadato_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metadato
    ADD CONSTRAINT metadato_pkey PRIMARY KEY (idmetadato);


--
-- Name: metadatos_has_finca_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metadatos_has_finca
    ADD CONSTRAINT metadatos_has_finca_pkey PRIMARY KEY (finca_idfinca, metadato_idmetadato);


--
-- Name: metadatos_has_subcategoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metadatos_has_subcategoria
    ADD CONSTRAINT metadatos_has_subcategoria_pkey PRIMARY KEY (subcategoria_idsubcategoria, metadato_idmetadato);


--
-- Name: municipio_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.municipio
    ADD CONSTRAINT municipio_pkey PRIMARY KEY (idmunicipio);


--
-- Name: subcategoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategoria
    ADD CONSTRAINT subcategoria_pkey PRIMARY KEY (idsubcategoria);


--
-- Name: finca_fkindex1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX finca_fkindex1 ON public.finca USING btree (municipio_idmunicipio);


--
-- Name: ifk_rel_08; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ifk_rel_08 ON public.metadatos_has_subcategoria USING btree (metadato_idmetadato);


--
-- Name: ifk_rel_09; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ifk_rel_09 ON public.metadatos_has_subcategoria USING btree (subcategoria_idsubcategoria);


--
-- Name: ifk_rel_11; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ifk_rel_11 ON public.metadatos_has_finca USING btree (metadato_idmetadato);


--
-- Name: ifk_rel_12; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ifk_rel_12 ON public.metadatos_has_finca USING btree (finca_idfinca);


--
-- Name: ifk_rel_13; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ifk_rel_13 ON public.finca USING btree (municipio_idmunicipio);


--
-- Name: ifk_rel_14; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ifk_rel_14 ON public.municipio USING btree (departamento_iddepartamento);


--
-- Name: ifk_rel_17; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ifk_rel_17 ON public.subcategoria USING btree (categoria_idcategoria);


--
-- Name: metadatos_has_finca_fkindex1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX metadatos_has_finca_fkindex1 ON public.metadatos_has_finca USING btree (metadato_idmetadato);


--
-- Name: metadatos_has_finca_fkindex2; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX metadatos_has_finca_fkindex2 ON public.metadatos_has_finca USING btree (finca_idfinca);


--
-- Name: metadatos_has_subcategoria_fkindex1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX metadatos_has_subcategoria_fkindex1 ON public.metadatos_has_subcategoria USING btree (metadato_idmetadato);


--
-- Name: metadatos_has_subcategoria_fkindex2; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX metadatos_has_subcategoria_fkindex2 ON public.metadatos_has_subcategoria USING btree (subcategoria_idsubcategoria);


--
-- Name: municipio_fkindex1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX municipio_fkindex1 ON public.municipio USING btree (departamento_iddepartamento);


--
-- Name: subcategoria_fkindex1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX subcategoria_fkindex1 ON public.subcategoria USING btree (categoria_idcategoria);


--
-- Name: finca_municipio_idmunicipio_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.finca
    ADD CONSTRAINT finca_municipio_idmunicipio_fkey FOREIGN KEY (municipio_idmunicipio) REFERENCES public.municipio(idmunicipio);


--
-- Name: metadatos_has_finca_finca_idfinca_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metadatos_has_finca
    ADD CONSTRAINT metadatos_has_finca_finca_idfinca_fkey FOREIGN KEY (finca_idfinca) REFERENCES public.finca(idfinca);


--
-- Name: metadatos_has_finca_metadato_idmetadato_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metadatos_has_finca
    ADD CONSTRAINT metadatos_has_finca_metadato_idmetadato_fkey FOREIGN KEY (metadato_idmetadato) REFERENCES public.metadato(idmetadato);


--
-- Name: metadatos_has_subcategoria_metadato_idmetadato_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metadatos_has_subcategoria
    ADD CONSTRAINT metadatos_has_subcategoria_metadato_idmetadato_fkey FOREIGN KEY (metadato_idmetadato) REFERENCES public.metadato(idmetadato);


--
-- Name: metadatos_has_subcategoria_subcategoria_idsubcategoria_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metadatos_has_subcategoria
    ADD CONSTRAINT metadatos_has_subcategoria_subcategoria_idsubcategoria_fkey FOREIGN KEY (subcategoria_idsubcategoria) REFERENCES public.subcategoria(idsubcategoria);


--
-- Name: municipio_departamento_iddepartamento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.municipio
    ADD CONSTRAINT municipio_departamento_iddepartamento_fkey FOREIGN KEY (departamento_iddepartamento) REFERENCES public.departamento(iddepartamento);


--
-- Name: subcategoria_categoria_idcategoria_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategoria
    ADD CONSTRAINT subcategoria_categoria_idcategoria_fkey FOREIGN KEY (categoria_idcategoria) REFERENCES public.categoria(idcategoria);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

