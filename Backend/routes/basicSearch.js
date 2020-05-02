const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

router.post('/search', async (req, res) => {

  const { words } = req.body;

  const query = {
    text: "select titulo, publicador, formato, tamano, resumen, tipo from metadato where pclave LIKE $1 LIMIT 300",
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
      const tupla = result.rows[i];

      switch (tupla.tipo) {
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

    res.status(200).send({ result: result.rows, counts: {AC: AC, AP: AP, IC: IC, IP: IP, C: C} });
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
})

module.exports = router;
