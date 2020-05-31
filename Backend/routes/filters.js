const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

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

function processMunicipios(municipios) {

  var muns = [];
  for (let i in municipios) {
    muns.push(municipios[i].municipio);
  }
  return muns;
}

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
    text: "select municipio_idmunicipio, finca from finca;"
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


router.get('/finca', async (req, res) => {

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

    res.status(200).send({ cats: cats, subs: subs, tipos: result_tipos.rows, formatos: result_formatos.rows});
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
})

module.exports = router;
