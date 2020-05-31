const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

router.get('/:id', async (req, res) => {

    var id = req.params.id;

    const query = {
        text: "select * from metadato inner join finca_muni on metadato.idmetadato = finca_muni.idmetadato where metadato.idmetadato=$1",
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

module.exports = router;
