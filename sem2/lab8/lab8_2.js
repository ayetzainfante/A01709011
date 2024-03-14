const fs = require('fs');

function escribirEnArchivo(texto, nombreArchivo) {
    fs.writeFile(nombreArchivo, texto, (err) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err);
            return;
        }
        console.log(`El texto se ha escrito correctamente en el archivo ${nombreArchivo}`);
    });
}

const texto = "Hola me llamo Ayetza, y este es el segundo ejercicio de laboratorio 8, usando node.js.";
const nombreArchivo = "texto.txt";

escribirEnArchivo(texto, nombreArchivo);
