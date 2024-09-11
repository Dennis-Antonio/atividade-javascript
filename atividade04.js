// contagem regressiva
let numero = parseInt(prompt("Insira um número para iniciar a contagem regressiva:"));

if (!isNaN(numero) && numero > 0) {
    // Exibir a contagem regressiva no console
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log("Por favor, insira um número válido.");
}
