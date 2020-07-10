const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

// ||||||||||||||||||||||| Ruta |||||||||||||||||||||||
// Retorna la informacion correspondiente a un articulo deacuerdo a su ID 
router.get('/:id', async (req, res) => {

    var id = req.params.id;

    const query = {
        text: "select * from metadato inner join muni_dept on metadato.idmetadato = muni_dept.idmetadato where metadato.idmetadato=$1",
        values: [id]
    }

    try {
        const result = await pg.query(query);
        // console.log(result.rows);
        res.status(200).send({ info: result.rows[0] });
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

// ||||||||||||||||||||||| Ruta |||||||||||||||||||||||
router.get('/download/:id', async (req, res) => {

    var id = req.params.id;
    var path = "/home/carban/Downloads";

    const query = {
        text: "select url from metadato where idmetadato = $1",
        values: [id]
    }

    try {
        const result = await pg.query(query);
        var url = result.rows[0].url;
        console.log(url);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }

    res.download(path + url, err => {
        if (err) {
            console.log(err);
        }
    });
})


// ||||||||||||||||||||||| Ruta |||||||||||||||||||||||
router.get('/download/filename/:id', async (req, res) => {

    var id = req.params.id;

    const query = {
        text: "select url from metadato where idmetadato = $1",
        values: [id]
    }

    try {
        const result = await pg.query(query);
        var url = result.rows[0].url;
        // console.log("--->", url);
        var splitted = url.split("/");
        var filename = splitted[splitted.length - 1];
        // console.log("-->", filename);
        res.status(200).send({ filename: filename });
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

module.exports = router;
