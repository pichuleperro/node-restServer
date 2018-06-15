require('./config/config');

const express = require('express');
const app = express();

// BODY PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.json('get usuario');
});
app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario para esta operacion '
        })
    } else {
        res.json({
            persona: body
        });
    }

});

app.put('/usuario/:identificador', (req, res) => {

    let id = req.params.identificador;

    res.json({
        id
    })

});
app.delete('/usuario', (req, res) => {
    res.json('delete usuario');
});


app.listen(process.env.PORT, () => {
    console.log("");
    console.log("ESCUCHANDO PUERTO", 3000);
});