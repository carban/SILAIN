const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

router.post("/register", async (req, res) => {

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


router.post("/login", async (req, res) => {

    const { user, password } = req.body;

    const query = {
        text: "SELECT id from usuario where email=$1 and password=$2",
        values: [user, password]
    }

    try {
        const result = await pg.query(query);
        var id = result.rows[0].id;
        if (id) {
            res.status(200).send({ user_id: result.rows[0].id });
        } else {
            res.sendStatus(400);
        }

    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

router.get("/user/:id", async (req, res) => {

    var id = req.params.id;

    const query = {
        text: "SELECT nombres, apellidos, email, pais from usuario where id=$1",
        values: [id]
    }
    try {
        const result = await pg.query(query);
        var id = result.rows[0];
        if (id) {
            res.status(200).send({ user: result.rows[0] });
        } else {
            res.sendStatus(400);
        }

    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }

})

router.get("/user/des_hist/:id", async (req, res) => {

    var id = req.params.id;

    const query = {
        text: "select titulo, idmetadato from descargas inner join metadato on id_metadato=idmetadato where id_usuario=$1;",
        values: [id]
    }
    try {
        var hist = []
        const result = await pg.query(query);
        hist = result.rows;
        res.status(200).send({ hist: hist });
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }

})

module.exports = router;