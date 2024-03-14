const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Función para guardar datos de contacto en un archivo
function guardarDatosContacto(datosContacto, callback) {
  fs.appendFile('datos_contacto.txt', datosContacto + '\n', callback);
}

// Función para leer los datos de contacto del archivo
function leerDatosContacto(callback) {
  fs.readFile('datos_contacto.txt', 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      const datos = data.split('\n').map((linea) => {
        const [nombre, email, mensaje] = linea.split(',');
        return { nombre, email, mensaje };
      });
      callback(null, datos);
    }
  });
}

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.render('index');
});

// Ruta para la página de contacto
app.get('/contacto', (req, res) => {
  res.render('contacto');
});

// Ruta para procesar los datos del formulario de contacto
app.post('/contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  const datosContacto = `${nombre}, ${email}, ${mensaje}`;

  guardarDatosContacto(datosContacto, (err) => {
    if (err) {
      console.error('Error al guardar los datos de contacto:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      console.log('Datos de contacto guardados con éxito');
      res.redirect('/mostrar-datos');
    }
  });
});

// Ruta para mostrar los datos guardados
app.get('/mostrar-datos', (req, res) => {
  leerDatosContacto((err, datos) => {
    if (err) {
      console.error('Error al leer los datos de contacto:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      res.render('mostrar-datos', { datos });
    }
  });
});


// Ruta para la página de nosotros
app.get('/nosotros', (req, res) => {
  res.render('nosotros');
});

// Ruta para la página de productos
app.get('/productos', (req, res) => {
  res.render('productos');
});

// Manejador de 404 para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
