const express = require('express')
const router = express.Router()
const pg = require('../db/database.js').getPool();

// Funcion auxiliar para invertir la latitud y la longitud cuando se realiza la consulta
function swapCoors(data) {
    for (let i in data) {
        var aux = JSON.parse(data[i].poly).coordinates[0][0];
        for (let j = 0; j < aux.length; j++) {
            var row = aux[j];
            var new_row = [row[1], row[0]];
            aux[j] = new_row;
        }
        data[i].poly = aux;
    }
    return data;
}

// FUncion axiliar que formatea el centroide que viene de la consulta,
// ya que viene en un string 'POINT(-76.5186596676343 3.85885075589076)'
function formatCentroidPoint(data) {
    var { centroid } = data[0];
    var s = centroid.split(" ");
    var s2 = s[0].split("(");
    var c = [parseFloat(s[1]), parseFloat(s2[1])];
    data[0].centroid = c;

    return data;
}



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

        // Capturar el poligono correspondiente a la finca del dato 
        var queryFin = {
            text: "select poly, st_astext(st_centroid(geom)) as centroid from (select finca.finca, st_asgeojson(geom) as poly, geom from finca inner join geofincas on finca_idfi = idfinca) AS foo where foo.finca = $1;",
            values: [result.rows[0].finca]
        }

        var dataFin = await pg.query(queryFin);
        dataFin = await swapCoors(dataFin.rows);
        dataFin = await formatCentroidPoint(dataFin);

        // console.log(result.rows);
        res.status(200).send({ info: result.rows[0], finca: dataFin });
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

// ||||||||||||||||||||||| Ruta |||||||||||||||||||||||
router.get('/download/:id', async (req, res) => {

    var id = req.params.id;
    var path = "/home/carban/Stuffs";

    const query = {
        text: "select url from metadato where idmetadato = $1",
        values: [id]
    }

    try {
        const result = await pg.query(query);
        var url = result.rows[0].url;
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }

    res.download(path + url, err => {
        if (err) {
            console.log(err);
            res.sendStatus(400);
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
        var splitted = url.split("/");
        var filename = splitted[splitted.length - 1];
        res.status(200).send({ filename: filename });
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

// ||||||||||||||||||||||| Ruta |||||||||||||||||||||||
router.post('/proposito', async (req, res) => {

    const { id_usuario, id_metadato, proposito } = req.body;
    const query = {
        text: "insert into descargas (id_usuario, id_metadato, proposito, fecha, hora) values ($1, $2, $3, current_timestamp, current_timestamp)",
        values: [id_usuario, id_metadato, proposito]
    }

    try {
        const result = await pg.query(query);
        res.status(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})


module.exports = router;
