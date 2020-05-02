const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

router.post('/search', async (req, res) => {

    const { words } = req.body;

    const query = {
      text: "select titulo, publicador, formato, tamano, descripcion from metadato where pclave LIKE $1",
      values: [`%${words}%`]
    }
    
    try {
      const result = await pg.query(query);
      console.log(result.rows);
      res.status(200).send({ result: result.rows });
    } catch (e) {
      console.log(e);
      res.sendStatus(400);
    }
  })

module.exports = router;
