// Problema 1
function generarTabla(numero) {
    document.write("<h2>Tabla de cuadrados y cubos:</h2>");
    document.write("<table border='1'>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
    for (let i = 1; i <= numero; i++) {
      document.write("<tr>");
      document.write("<td>" + i + "</td>");
      document.write("<td>" + (i * i) + "</td>");
      document.write("<td>" + (i * i * i) + "</td>");
      document.write("</tr>");
    }
    document.write("</table>");
  }
  
  const num1 = parseInt(prompt("Por favor, introduce un número para generar la tabla de cuadrados y cubos:"));
  generarTabla(num1);
  
  // Problema 2
  function comprobarResultado() {
    const startTime = performance.now();
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const resultado = num1 + num2;
    const respuestaUsuario = parseInt(prompt("¿Cuál es la suma de " + num1 + " + " + num2 + "?"));
    const endTime = performance.now();
    const tiempoTranscurrido = (endTime - startTime) / 1000; 
    if (respuestaUsuario === resultado) {
      document.write("<p>¡Respuesta correcta! Te tomó " + tiempoTranscurrido + " segundos.</p>");
    } else {
      document.write("<p>Respuesta incorrecta. La suma de " + num1 + " + " + num2 + " es " + resultado + ". Te tomó " + tiempoTranscurrido + " segundos.</p>");
    }
  }
  
  comprobarResultado();
  
  // Problema 3
  function contador(numeros) {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;
    
    numeros.forEach(numero => {
      if (numero < 0) {
        negativos++;
      } else if (numero === 0) {
        ceros++;
      } else {
        positivos++;
      }
    });
    
    return [negativos, ceros, positivos];
  }
  
  const arregloNumeros = [5, -3, 0, 10, -2, 0, 8];
  const resultadosContador = contador(arregloNumeros);
  document.write("<h2>Resultados del contador:</h2>");
  document.write("<p>Números negativos: " + resultadosContador[0] + "</p>");
  document.write("<p>Números iguales a 0: " + resultadosContador[1] + "</p>");
  document.write("<p>Números mayores a 0: " + resultadosContador[2] + "</p>");
  
  // Problema 4
  function promedios(matriz) {
    const promedios = [];
    
    matriz.forEach(arreglo => {
      const suma = arreglo.reduce((total, num) => total + num, 0);
      const promedio = suma / arreglo.length;
      promedios.push(promedio);
    });
    
    return promedios;
  }
  
  const matrizNumeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const resultadosPromedios = promedios(matrizNumeros);
  document.write("<h2>Promedios de la matriz:</h2>");
  resultadosPromedios.forEach((promedio, index) => {
    document.write("<p>Promedio del renglón " + (index + 1) + ": " + promedio + "</p>");
  });
  
  // Problema 5
  function inverso(numero) {
    const numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));
    return numeroInvertido;
  }
  
  const num2 = parseInt(prompt("Por favor, introduce un número para obtener su inverso:"));
  const resultadoInverso = inverso(num2);
  document.write("<h2>Inverso del número:</h2>");
  document.write("<p>El inverso de " + num2 + " es " + resultadoInverso + "</p>");
  
  // Problema 6: Barajear Cartas
  // Definición del objeto Baraja
  function Baraja() {
    this.cartas = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  }
  
  // Método para barajar las cartas
  Baraja.prototype.barajar = function() {
    for (let i = this.cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
    }
  };
  
  // Método para mostrar las cartas en la baraja
  Baraja.prototype.mostrarBaraja = function() {
    document.write("<h2>Baraja de Cartas:</h2>");
    document.write("<ul>");
    this.cartas.forEach(function(cart) {
      document.write("<li>" + cart + "</li>");
    });
    document.write("</ul>");
  };
  
  // Crear una nueva instancia de Baraja
  const miBaraja = new Baraja();
  
  // Mostrar la baraja antes de barajar
  miBaraja.mostrarBaraja();
  
  // Barajar la baraja
  miBaraja.barajar();
  
  // Mostrar la baraja después de barajar
  document.write("<h2>Baraja de Cartas Después de Barajar:</h2>");
  miBaraja.mostrarBaraja();
  
