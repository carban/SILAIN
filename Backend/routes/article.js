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

module.exports = router;
