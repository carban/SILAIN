const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

function getCreado(creado) {
  var splitted = creado.split(" ");
  var c = splitted[1] + " " + splitted[2] + " " + splitted[3];
  return c;
}

function getDisponible(disponible) {
  var splitted2 = disponible.split(" ");
  var d = splitted2[1] + " " + splitted2[2] + " " + splitted2[3];
  return d;
}

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
  var text = "select idmetadato, titulo, publicador, formato, tamano, resumen, tipo, creado, disponibilidad, categoria, subcategoria, municipio, finca from finca_muni where pclave iLIKE $1";
  if (s !== "") {
    text = text + " and" + s;
  }
  return { text: text, counter: j };
}

function getValuesFromFilters(filters, word) {
  var vals = [`%${word}%`]
  for (let i in filters) {
    if (filters[i] !== "Select") {
      vals.push(filters[i])
    }
  }
  return vals;
}

router.post('/search_by_filter', async (req, res) => {
  const { filters, word } = req.body;

  var { text, counter } = getTextWithFilters(filters, word);
  var values = getValuesFromFilters(filters, word);
  // console.log(text, values)


  if (counter == 1 && values[0] == "%%") {
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

        result.rows[i].creado = getCreado(result.rows[i].creado.toString());
        result.rows[i].disponibilidad = getDisponible(result.rows[i].disponibilidad.toString());

      }
      res.status(200).send({ result: result.rows, counts: { AC: AC, AP: AP, IC: IC, IP: IP, C: C } });

    } catch (e) {
      console.log(e);
      res.sendStatus(400);
    }
  }
});


module.exports = router;
