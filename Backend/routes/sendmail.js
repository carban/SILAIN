const express = require('express')
const router = express.Router()
var nodemailer = require('nodemailer');

router.post('/', async (req, res) => {

    const { id, textarea_request } = req.body;
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'kurtis47@ethereal.email',
            pass: 'uvkcuuvJFe8jKp1EFm'
        }
    });

    var mailOptions = {
        from: id,
        to: 'hevota7226@zuperholo.com',
        subject: 'Peticion para acceder a un archivo',
        text: textarea_request
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.status(200).send({});
        }
    });
})


module.exports = router;
