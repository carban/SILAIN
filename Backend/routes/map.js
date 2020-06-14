const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

// ||||||||||||||||||||||| AUXILIARES ||||||||||||||||||||||| 
// ------------------------------------------------------------------------------------

// Funcion Auxiliar que retorna el numero de filtros SELECCIONADOS que hay 
function getHowMany(filters) {
  j = 0;
  for (let i in filters) {
    if (filters[i] !== "Select") {
      j++;
    }
  }
  return { counter: j };
}

// Funcion Auxiliar que formatea el query dependiendo de los filtros que lleguen
function getTextWithFilters(text, filters) {
  var s = "";
  var c = false;
  j = 1;
  for (let i in filters) {
    if (filters[i] !== "Select") {
      j++;
      if (c) {
        s += " and";
        c = false;
      }
      s += " " + i + " = $" + j + "";
      c = true
    }
  }

  if (s !== "") {
    text = text + " and" + s;
  }
  return { query_text: text };
}

// Funcion auxiliar que guarda los valores correspondientes a los filtros que lleguen
function getValuesFromFilters(filters, ubication) {
  var vals = [ubication]
  for (let i in filters) {
    if (filters[i] !== "Select") {
      vals.push(filters[i])
    }
  }
  return vals;
}

// Funcion auxiliar para invertir la latitud y la longitud cuando se realiza la consulta
function swapCoors(data) {
  for (let i in data) {
    var aux = JSON.parse(data[i].st_asgeojson).coordinates[0][0];
    for (let j = 0; j < aux.length; j++) {
      var row = aux[j];
      var new_row = [row[1], row[0]];
      aux[j] = new_row;
    }
    data[i].st_asgeojson = aux;
  }
  return data;
}

// ------------------------------------------------------------------------------------


// ||||||||||||||||||||||| Ruta ||||||||||||||||||||||| 
// Retorna toda la informacion espacial de cada finca que este almacenada
// Aqui se consultan los POLIGONOS de las fincas
router.get('/', async (req, res) => {

  const query = {
    text: "select finca.finca, idfinca, st_asgeojson(geom) from finca inner join geofincas on finca_idfi = idfinca;",
  }

  const queryDeps = {
    text: "select departamento.departamento, st_asgeojson(geom) from departamento inner join geodeptos on iddepartamento = id_depto;",
  }

  const queryMunis = {
    text: "select municipio.municipio, st_asgeojson(geom) from municipio inner join geomunic on idmunicipio = idmuni;",
  }

  try {
    const result = await pg.query(query);
    const resultDeps = await pg.query(queryDeps);
    const resultMunis = await pg.query(queryMunis);

    var data = result.rows;
    var dataDeps = resultDeps.rows;
    var dataMunis = resultMunis.rows;

    data = swapCoors(data);
    dataDeps = swapCoors(dataDeps);
    dataMunis = swapCoors(dataMunis);

    // console.log(data);
    res.status(200).send({ fincas: data, departamentos: dataDeps, municipios: dataMunis });
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
})

// ||||||||||||||||||||||| Ruta ||||||||||||||||||||||| 
// Retorna los resutlados correspondientes a una busqueda en particular POR FINCA
// Teniendo Filtros o no  
router.post('/ubication_by_filter', async (req, res) => {

  const { filters, ubication, ubi_type } = req.body;
  // console.log(filters, ubication);
  var { counter } = getHowMany(filters);

  if (counter == 0 && ubication == "") {
    res.status(200).send({ result: [], counts: { AC: 0, AP: 0, IC: 0, IP: 0, C: 0 } });
  } else {

    var text = "select idmetadato, titulo, publicador, formato, tamano, resumen, tipo, categoria, subcategoria from muni_dept where " + ubi_type + " = $1";

    var { query_text } = getTextWithFilters(text, filters);
    var values = getValuesFromFilters(filters, ubication);

    // console.log(query_text, values);

    var query = {
      text: query_text,
      values: values
    }

    try {
      const result = await pg.query(query);

      var AC = 0;
      var AP = 0;
      var IC = 0;
      var IP = 0;
      var C = 0;

      for (let i = 0; i < result.rows.length; i++) {
        const tipo = result.rows[i].tipo;
        switch (tipo) {
          case "Archivo crudo":
            AC++;
            break;
          case "Archivo procesado":
            AP++;
            break;
          case "Imagen cruda":
            IC++;
            break;
          case "Imagen procesada":
            IP++;
            break;
          case "Compilación":
            C++;
            break;
          default:
            break;
        }

      }
      // console.log({ result: result.rows, counts: { AC: AC, AP: AP, IC: IC, IP: IP, C: C } })
      res.status(200).send({ result: result.rows, counts: { AC: AC, AP: AP, IC: IC, IP: IP, C: C } });

    } catch (e) {
      console.log(e);
      res.sendStatus(400);
    }
  }
});


// ||||||||||||||||||||||| Ruta ||||||||||||||||||||||| 
// Retorna la informacion espacial (poligono) de un elemento en particular
// Departamento, Municipio, Finca
router.post('/getpoly', async (req, res) => {

  const { filters } = req.body;

  var { counter } = getHowMany(filters);

  if (counter == 0) {
    res.status(200).send({ departamentos: [], municipios: [], fincas: [] });
  } else {

    const { departamento, municipio, finca } = filters;

    try {

      var dataDept = [];
      var dataMuni = [];
      var dataFin = [];

      if (departamento !== 'Select') {
        var query = {
          text: "select * from (select departamento.departamento, st_asgeojson(geom) from departamento inner join geodeptos on iddepartamento = id_depto) AS foo where foo.departamento = $1;",
          values: [departamento]
        }
        dataDept = await pg.query(query);
        dataDept = swapCoors(dataDept.rows);
      }

      if (municipio !== 'Select') {
        var query = {
          text: "select * from (select municipio.municipio, st_asgeojson(geom) from municipio inner join geomunic on idmunicipio = idmuni) AS foo where foo.municipio = $1;",
          values: [municipio]
        }
        dataMuni = await pg.query(query);
        dataMuni = swapCoors(dataMuni.rows);
      }

      if (finca !== 'Select') {
        var queryFin = {
          text: "select * from (select finca.finca, idfinca, st_asgeojson(geom) from finca inner join geofincas on finca_idfi = idfinca) AS foo where foo.finca = $1;",
          values: [finca]
        }
        dataFin = await pg.query(queryFin);
        dataFin = swapCoors(dataFin.rows);
      }

      res.status(200).send({
        departamentos: dataDept,
        municipios: dataMuni,
        fincas: dataFin
      });

    } catch (e) {
      console.log(e);
      res.sendStatus(400);
    }
  }
})


module.exports = router;