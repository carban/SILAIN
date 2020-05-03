const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

router.post('/search', async (req, res) => {

  const { words } = req.body;

  const query = {
    text: "select titulo, publicador, formato, tamano, resumen, tipo, creado, disponibilidad from metadato where pclave iLIKE $1",
    values: [`%${words}%`]
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

      var creado = result.rows[i].creado.toString();
      var splitted = creado.split(" ");
      var c = splitted[1] + " " + splitted[2] + " " + splitted[3];
      result.rows[i].creado = c;

      var disponible = result.rows[i].disponibilidad.toString();
      var splitted2 = disponible.split(" ");
      var d = splitted2[1] + " " + splitted2[2] + " " + splitted2[3];
      result.rows[i].disponibilidad = d;
    }

    res.status(200).send({ result: result.rows, counts: { AC: AC, AP: AP, IC: IC, IP: IP, C: C } });
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
})

module.exports = router;
