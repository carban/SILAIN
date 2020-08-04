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
  return text;
}

// Funcion auxiliar que guarda los valores correspondientes a los filtros que lleguen
function getValuesFromFilters(filters, word) {
  var vals = [`%${word}%`]
  for (let i in filters) {
    if (filters[i] !== "Select") {
      vals.push(filters[i])
    }
  }
  return vals;
}
// ------------------------------------------------------------------------------------


// ||||||||||||||||||||||| Ruta ||||||||||||||||||||||| 
// Retorna los resutlados correspondientes a una busqueda en particular
// Teniendo Filtros o no
router.post('/search_by_filter', async (req, res) => {

  const { filters, word } = req.body;

  var { counter } = getHowMany(filters);

  if (counter == 0 && word == "") {
    // ENTRA SI SOLO HAY HAY PALABRA CLAVE (SIN FILTROS) Y SI ESTA PALABRA ESTA VACIA.

    res.status(200).send({ result: [], counts: { AC: 0, AP: 0, IC: 0, IP: 0, C: 0 } });
  } else {

    if (counter > 0 && word == "") {
      // Entra si hay al menos un filtro. Y si la palabra esta vacia
      // AQUI DEBE ENTRAR CUANDO EN LA APP SOLO SE BUSCA FILTRAR POR PROPIEDAD SIN INCLUIR PALABRA CLAVE
      // Este query se deja asi, para que sobre todos los resultados se haga el filtro (Alex pidio cambios y quiero reutilizar las cosas que tenia xd)

      var text = "select idmetadato, titulo, publicador, formato, tamano, resumen, tipo, to_char(creado, 'DD/MM/YYYY') as creado, to_char(disponibilidad, 'DD/MM/YYYY') as disponibilidad from muni_dept where pclave iLike $1";
      var query_text = getTextWithFilters(text, filters);
      var values = getValuesFromFilters(filters, word);

    } else {
      // Aqui entra si tiene palabra clave, algun, o ningun filtro;

      var text = "select idmetadato, titulo, publicador, formato, tamano, resumen, tipo, to_char(creado, 'DD/MM/YYYY') as creado, to_char(disponibilidad, 'DD/MM/YYYY') as disponibilidad from muni_dept where $1 % ANY(STRING_TO_ARRAY(pclave, ' '))";
      var query_text = getTextWithFilters(text, filters);
      var values = getValuesFromFilters(filters, word);
    }

    // console.log(query_text, values)

    var query = { text: query_text, values: values };

    try {
      const result = await pg.query(query);

      let AC = 0;
      let AP = 0;
      let IC = 0;
      let IP = 0;
      let C = 0;

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

      res.status(200).send({
        result: result.rows,
        counts: { AC: AC, AP: AP, IC: IC, IP: IP, C: C }
      });

    } catch (e) {
      console.log(e);
      res.sendStatus(400);
    }
  }
});


module.exports = router;
