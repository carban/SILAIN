const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

function processCats(catsubs){
  
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

function processSubs(catsubs){

  var current = catsubs[0].idcategoria;
  var subs = [];
  var aux = [];

  for (let i = 0; i < catsubs.length; i++) {
    if (catsubs[i].idcategoria != current) {
      current = catsubs[i].idcategoria;
      subs.push(aux);
      aux = [];
      aux.push(catsubs[i].subcategoria);
    }else{
      aux.push(catsubs[i].subcategoria);
    }
  }
  subs.push(aux);
  return subs;
}


router.get('/', async (req, res) => {

  const catsubs  = {
    text: "select * from categoria inner join subcategoria on categoria_idcategoria = idcategoria order by idcategoria;",
  }

  const municipios = {
    text: "select * from municipio;"
  }

  const tipos = {
    text: "select DISTINCT ON(tipo) tipo from metadato;"
  }

  const formatos = {
    text: "select DISTINCT ON(formato) formato from metadato;"
  }

  try {
    const result_catsubs = await pg.query(catsubs);
    const result_municipios =  await pg.query(municipios);
    const result_tipos =  await pg.query(tipos);
    const result_formatos =  await pg.query(formatos);

    var cats = processCats(result_catsubs.rows);
    var subs = processSubs(result_catsubs.rows);

    res.status(200).send({ cats: cats, subs: subs, municipios: result_municipios.rows, tipos: result_tipos.rows, formatos: result_formatos.rows });
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
})

module.exports = router;
