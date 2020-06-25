const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

// ||||||||||||||||||||||| AUXILIARES ||||||||||||||||||||||| 
// ------------------------------------------------------------------------------------

// Funcion que formatea las categorias correspondientes separandolas en un array
function processCats(catsubs) {

  var current = catsubs[0].idcategoria;
  var cats = [catsubs[0].categoria];

  for (let i = 0; i < catsubs.length; i++) {
    if (catsubs[i].idcategoria != current) {
      current = catsubs[i].idcategoria;
      cats.push(catsubs[i].categoria)
    }
  }
  return cats;
}

// Funcion que formatea las subcategorias correspondientes separandolas en un array
// para que corresponda en el indice, con su categoria
function processSubs(catsubs) {

  var current = catsubs[0].idcategoria;
  var subs = [];
  var aux = [];

  for (let i = 0; i < catsubs.length; i++) {
    if (catsubs[i].idcategoria != current) {
      current = catsubs[i].idcategoria;
      subs.push(aux);
      aux = [];
      aux.push(catsubs[i].subcategoria);
    } else {
      aux.push(catsubs[i].subcategoria);
    }
  }
  subs.push(aux);
  return subs;
}

// Funcion que formatea los municipios correspondientes separandolas en un array
function processMunicipios(municipios) {

  var muns = [];
  for (let i in municipios) {
    muns.push(municipios[i].municipio);
  }
  return muns;
}

// Funcion que formatea las fincas correspondientes separandolas en un array
// para que corresponda en el indice, con su municipio
function processFincas(fincas) {
  var current = fincas[0].municipio_idmunicipio;
  var fins = [];
  var aux = [];

  for (let i = 0; i < fincas.length; i++) {
    if (fincas[i].municipio_idmunicipio != current) {
      current = fincas[i].municipio_idmunicipio;
      fins.push(aux);
      aux = [];
      aux.push(fincas[i].finca);
    } else {
      aux.push(fincas[i].finca);
    }
  }
  fins.push(aux);
  return fins;
}


// Funcion que formatea los departamentos, los municipios y las fincas
// Para que se puedan filtrar los poligonos en el mapa
function extractFiltersOnMap(array) {

  var currentDept = array[0].departamento;
  var currentMuni = array[0].municipio;
  var currentFin = array[0].finca;

  var departamentos = [currentDept];
  var municipios = [];
  var fincas = [];

  var munis_for_dept = [currentMuni];
  var fins_for_munis = [currentFin];

  for (let i = 0; i < array.length; i++) {

    if (currentDept !== array[i].departamento) {
      currentDept = array[i].departamento;
      departamentos.push(array[i].departamento);

      municipios.push(munis_for_dept);
      munis_for_dept = [];
    }

    if (currentMuni !== array[i].municipio) {
      currentMuni = array[i].municipio;
      munis_for_dept.push(array[i].municipio);

      fincas.push(fins_for_munis);
      fins_for_munis = [];
    }

    if (currentFin !== array[i].finca) {
      currentFin = array[i].finca;
      fins_for_munis.push(array[i].finca);
    }
  }

  municipios.push(munis_for_dept);
  fincas.push(fins_for_munis);

  return { departamentos, municipios, fincas };
}



// ------------------------------------------------------------------------------------

// ||||||||||||||||||||||| Ruta ||||||||||||||||||||||| 
// Retorna toda la informacion de los filtros que esten almacenados en la BD
router.get('/', async (req, res) => {

  const catsubs = {
    text: "select * from categoria inner join subcategoria on categoria_idcategoria = idcategoria order by idcategoria;",
  }

  const municipios = {
    text: "select idmunicipio, municipio from municipio;"
  }

  const tipos = {
    text: "select DISTINCT ON(tipo) tipo from metadato;"
  }

  const formatos = {
    text: "select DISTINCT ON(formato) formato from metadato;"
  }

  const fincas = {
    text: "select municipio_idmunicipio, finca from finca order by 1;"
  }

  try {
    const result_catsubs = await pg.query(catsubs);
    const result_municipios = await pg.query(municipios);
    const result_tipos = await pg.query(tipos);
    const result_formatos = await pg.query(formatos);
    const result_fincas = await pg.query(fincas);

    var cats = processCats(result_catsubs.rows);
    var subs = processSubs(result_catsubs.rows);

    // console.log(result_municipios.rows);
    // console.log(result_fincas.rows);

    var munis = processMunicipios(result_municipios.rows);
    var fins = processFincas(result_fincas.rows);
    // console.log(munis, fins);

    res.status(200).send({ cats: cats, subs: subs, municipios: munis, tipos: result_tipos.rows, formatos: result_formatos.rows, fincas: fins });
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
})

// ||||||||||||||||||||||| Ruta ||||||||||||||||||||||| 
// Retorna toda la informacion de los filtros que esten almacenados en la BD
// CORRESPONDIENTES a la hora de consultar en el mapa, 
// seleccionando y buscando al dar click en un elemento del mapa.
// En este caso se omite la consulta de finca y municipio
router.get('/ubication', async (req, res) => {

  const catsubs = {
    text: "select * from categoria inner join subcategoria on categoria_idcategoria = idcategoria order by idcategoria;",
  }

  const tipos = {
    text: "select DISTINCT ON(tipo) tipo from metadato;"
  }

  const formatos = {
    text: "select DISTINCT ON(formato) formato from metadato;"
  }


  try {
    const result_catsubs = await pg.query(catsubs);
    const result_tipos = await pg.query(tipos);
    const result_formatos = await pg.query(formatos);

    var cats = processCats(result_catsubs.rows);
    var subs = processSubs(result_catsubs.rows);

    res.status(200).send({ cats: cats, subs: subs, tipos: result_tipos.rows, formatos: result_formatos.rows });
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
})


// ||||||||||||||||||||||| Ruta ||||||||||||||||||||||| 
// Retorna la informacion de departamentos, municipios y fincas correspondies,
// para los filtros de poligonos en el mapa
router.get('/onmap', async (req, res) => {

  const query = "select departamento, municipio, finca, cultivo from (select * from departamento inner join municipio on iddepartamento = departamento_iddepartamento) AS foo inner join finca on foo.idmunicipio = municipio_idmunicipio order by departamento_iddepartamento;";
  const result = await pg.query(query);
  // console.log(result.rows);
  var { departamentos, municipios, fincas } = extractFiltersOnMap(result.rows);
  res.json({ departamentos, municipios, fincas });
})

module.exports = router;
