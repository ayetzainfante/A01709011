const express = require('express');
const router = express.Router();

// Ruta 3: Página de servicios
router.get('/servicios', (req, res) => {
    res.send('Página de servicios');
});

// Ruta 4: Página de información
router.get('/informacion', (req, res) => {
    res.send('Página de información');
});

module.exports = router;
