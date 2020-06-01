const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

// ||||||||||||||||||||||| AUXILIARES ||||||||||||||||||||||| 
// ------------------------------------------------------------------------------------
// Funcion Auxiliar que formatea el query dependiendo de los filtros que lleguen
function getTextWithFilters(filters) {
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
  var text = "select idmetadato, titulo, publicador, formato, tamano, resumen, tipo, categoria, subcategoria from finca_muni where finca = $1";
  if (s !== "") {
    text = text + " and" + s;
  }
  return { text: text, counter: j };
}

// Funcion auxiliar que guarda los valores correspondientes a los filtros que lleguen
function getValuesFromFilters(filters, finca) {
  var vals = [finca]
  for (let i in filters) {
    if (filters[i] !== "Select") {
      vals.push(filters[i])
    }
  }
  return vals;
}
// ------------------------------------------------------------------------------------


// ||||||||||||||||||||||| Ruta ||||||||||||||||||||||| 
// Retorna toda la informacion espacial de cada finca que este almacenada
// Aqui se consultan los POLIGONOS de las fincas
router.get('/', async (req, res) => {

  const query = {
    text: "select finca.finca, idfinca, st_asgeojson(geom) from finca inner join geofincas on finca_idfi = idfinca;",
  }

  try {
    const result = await pg.query(query);
    const data = result.rows;
    for (let i in data) {
      var aux = JSON.parse(data[i].st_asgeojson).coordinates[0][0];
      for (let j = 0; j < aux.length; j++) {
        var row = aux[j];
        var new_row = [row[1], row[0]];
        aux[j] = new_row;
      }
      data[i].st_asgeojson = aux;
    }
    // console.log(data);
    res.status(200).send({ fincas: data });
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
})

// ||||||||||||||||||||||| Ruta ||||||||||||||||||||||| 
// Retorna los resutlados correspondientes a una busqueda en particular POR FINCA
// Teniendo Filtros o no  
router.post('/finca_by_filter', async (req, res) => {
  const { filters, finca } = req.body;
  // console.log(filters, finca);
  var { text, counter } = getTextWithFilters(filters, finca);
  var values = getValuesFromFilters(filters, finca);

  if (counter == 1 && values[0] == "") {
    res.status(200).send({ result: [], counts: { AC: 0, AP: 0, IC: 0, IP: 0, C: 0 } });
  } else {
    var query = {
      text: text,
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
      res.status(200).send({ result: result.rows, counts: { AC: AC, AP: AP, IC: IC, IP: IP, C: C } });

    } catch (e) {
      console.log(e);
      res.sendStatus(400);
    }
  }
});


// router.post('/getFinca', async (req, res) => {

//     const { finca } = req.body;

//     const query = {
//         text: "select idmetadato, titulo, publicador, formato, tamano, resumen, tipo, categoria, subcategoria, municipio, finca from finca_muni where finca = $1",
//         values: [finca]
//     }

//     try {
//         const result = await pg.query(query);

//         var AC = 0;
//         var AP = 0;
//         var IC = 0;
//         var IP = 0;
//         var C = 0;

//         for (let i = 0; i < result.rows.length; i++) {
//             const tipo = result.rows[i].tipo;
//             switch (tipo) {
//                 case "Archivo crudo":
//                     AC++;
//                     break;
//                 case "Archivo procesado":
//                     AP++;
//                     break;
//                 case "Imagen cruda":
//                     IC++;
//                     break;
//                 case "Imagen procesada":
//                     IP++;
//                     break;
//                 case "Compilación":
//                     C++;
//                     break;
//                 default:
//                     break;
//             }
//         }

//         res.status(200).send({ result: result.rows, counts: { AC: AC, AP: AP, IC: IC, IP: IP, C: C } });

//     } catch (error) {
//         console.log(e);
//         res.sendStatus(400);
//     }
// })



module.exports = router;
