const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

router.get('/', async (req, res) => {

    const query = {
        text: "select finca.finca, idfinca, st_asgeojson(geom) from finca inner join geofincas on finca_idfi = idfinca;",
    }

    try {
        const result = await pg.query(query);
        const data = result.rows;
        for (let i in data) {
            var aux = JSON.parse(data[i].st_asgeojson).coordinates[0][0];
            for (let j = 0; j < aux.length; j++) {
                var row = aux[j];
                var new_row = [row[1], row[0]];
                aux[j] = new_row;
            }
            data[i].st_asgeojson = aux;
        }
        // console.log(data);
        res.status(200).send({ fincas: data });
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

module.exports = router;
