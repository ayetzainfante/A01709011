function calcularPromedio(numeros) {
    if (numeros.length === 0) {
        return 0;
    }

    const suma = numeros.reduce((total, numero) => total + numero, 0);

    const promedio = suma / numeros.length;

    return promedio;
}

const numeros = [10, 20, 30, 40, 50];

console.log("El promedio es:", calcularPromedio(numeros));
