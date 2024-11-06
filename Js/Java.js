// Array para almacenar los resultados como objetos
let resultados = JSON.parse(localStorage.getItem("resultados")) || [];

// Función de orden superior para calcular
const calcular = (operador, num1, num2) => {
    const operaciones = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => b !== 0 ? a / b : 'Error: División por cero'
    };
    return operaciones[operador] ? operaciones[operador](num1, num2) : 'Operador no válido';
};

// Evento para realizar la operación
document.getElementById("calcularBtn").addEventListener("click", () => {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const operador = document.getElementById("operador").value;
    const numero2 = parseFloat(document.getElementById("numero2").value);

    // Realizar el cálculo
    const resultado = calcular(operador, numero1, numero2);

    // Crear objeto de operación
    const operacion = { numero1, operador, numero2, resultado };
    resultados.push(operacion);

    // Guardar en localStorage
    localStorage.setItem("resultados", JSON.stringify(resultados));

    // Mostrar el resultado en la lista
    mostrarResultados();
});

// Función para mostrar resultados
function mostrarResultados() {
    const lista = document.getElementById("resultados");
    lista.innerHTML = ''; // Limpiar la lista antes de agregar resultados

    resultados.forEach((op) => {
        const item = document.createElement("li");
        item.textContent = `${op.numero1} ${op.operador} ${op.numero2} = ${op.resultado}`;
        lista.appendChild(item);
    });
}

// Cargar resultados almacenados al iniciar
mostrarResultados();