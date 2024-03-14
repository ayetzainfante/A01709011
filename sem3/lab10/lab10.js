const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('¡Bienvenido a mi aplicación web!');
  } else if (pathname === '/guardar-datos' && req.method === 'POST') {
    let data = '';

    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', async () => {
      const { nombre, edad } = parseFormData(data);
      try {
        await guardarDatos(nombre, edad);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Datos guardados correctamente');
      } catch (error) {
        console.error('Error al guardar los datos:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error interno del servidor');
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Error 404: Página no encontrada');
  }
});

function guardarDatos(nombre, edad) {
  return new Promise((resolve, reject) => {
    fs.appendFile(path.join(__dirname, 'datos.txt'), `Nombre: ${nombre}, Edad: ${edad}\n`, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function parseFormData(body) {
  const data = {};
  body.split('&').forEach((pair) => {
    const [key, value] = pair.split('=');
    data[key] = decodeURIComponent(value.replace(/\+/g, ' '));
  });
  return data;
}

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
