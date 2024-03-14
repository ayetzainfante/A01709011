const express = require('express');
const path = require('path');

const router = express.Router();

// Variable para almacenar los datos
let datosGuardados = [];

// Rutas de productos
router.get('/anillo', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'anillo.html'));
});

router.get('/collar', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'collar.html'));
});

router.get('/pendientes', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'pendientes.html'));
});

// Ruta para manejar el envío de datos por POST
router.post('/guardar-datos', (req, res) => {
  // Recibir datos del formulario
  const { nombre, email } = req.body;

  // Almacenar los datos en la variable
  datosGuardados.push({ nombre, email });

  // Redirigir a la página de mostrar datos
  res.redirect('/mostrar-datos');
});

// Ruta para mostrar los datos guardados
router.get('/mostrar-datos', (req, res) => {
  res.render('mostrar-datos', { datos: datosGuardados });
});

// Exportar el router para ser utilizado en index.js
module.exports = router;
