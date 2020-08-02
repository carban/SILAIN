const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

router.post("/register", async (req, res) => {

    console.log(req.body);
    const { nombres, apellidos, email, pais, departamento, ciudad, institucion, ocupacion, password } = req.body;

    const query = {
        text: "INSERT INTO usuario (nombres, apellidos, email, pais, departamento, ciudad, institucion, ocupacion, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
        values: [nombres, apellidos, email, pais, departamento, ciudad, institucion, ocupacion, password]
    }
    try {
        const result = await pg.query(query);
        res.status(200).send({ msg: "success" });
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

module.exports = router;