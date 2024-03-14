const express = require('express');
const router = express.Router();

// Ruta 1: Página de inicio
router.get('/', (req, res) => {
    res.send('Bienvenido a la página de inicio');
});

// Ruta 2: Página de contacto
router.get('/contacto', (req, res) => {
    res.send('Página de contacto');
});

module.exports = router;
