const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

const rutas1 = require('./routes/rutas1');
const rutas2 = require('./routes/rutas2');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', rutas1);
app.use('/', rutas2);

app.get('/formulario', (req, res) => {
    res.send(`
        <form action="/guardar-datos" method="post">
            <input type="text" name="dato" placeholder="Ingrese un dato">
            <button type="submit">Enviar</button>
        </form>
    `);
});

app.post('/guardar-datos', (req, res) => {
    const dato = req.body.dato;
    fs.appendFile('datos.txt', dato + '\n', (err) => {
        if (err) throw err;
        console.log('Dato guardado correctamente');
        res.send('Dato guardado correctamente');
    });
});

app.use((req, res, next) => {
    res.status(404).send('Error 404: Página no encontrada');
});

app.listen(3000, () => {
    console.log('Servidor Express iniciado en el puerto 3000');
});
