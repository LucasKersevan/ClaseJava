alert("¡Bienvenido a tu Calculadora!")

// Función para realizar la operación
function calcular(operador, num1, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: División por cero';
        default:
            return 'Operador no válido';
    }
}

// Función principal de la calculadora
function calculadora() {
    let continuar = true;
    let resultados = [];

    while (continuar) {
        // Inresar numero y signo
        let numero1 = parseFloat(prompt("Ingresa el primer número:"));
        let operador = prompt("Ingresa el operador (+, -, *, /):");
        let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

        // Aca realiza el calculo
        let resultado = calcular(operador, numero1, numero2);

        // Muestra el resultado y lo guarda en el array de resultados
        alert(`Resultado: ${resultado}`);
        resultados.push(resultado);

        continuar = confirm("¿Quieres hacer otra operación?");
    }

    alert("¡Gracias por usar el programa!")

    // Al terminar muestra los resultados en la consola
    console.log("Resultados de todas las operaciones:");
    console.log(resultados);
}

// Vuelve al inicio
calculadora();