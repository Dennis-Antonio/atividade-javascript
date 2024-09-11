// calculadora
let num1 = parseFloat(prompt("Insira o primeiro número:"));
let num2 = parseFloat(prompt("Insira o segundo número:"));

let operacao = prompt("Escolha a operação: + (adição), - (subtração), * (multiplicação), / (divisão)");

let resultado;

// Verificar qual operação foi escolhida e realizar o cálculo correspondente
if (operacao === "+") {
    resultado = num1 + num2;
    alert("O resultado da adição é: " + resultado);
} else if (operacao === "-") {
    resultado = num1 - num2;
    alert("O resultado da subtração é: " + resultado);
} else if (operacao === "*") {
    resultado = num1 * num2;
    alert("O resultado da multiplicação é: " + resultado);
} else if (operacao === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2;
        alert("O resultado da divisão é: " + resultado);
    } else {
        alert("Erro: divisão por zero não é permitida.");
    }
} else {
    alert("Operação inválida. Por favor, insira uma operação válida.");
}
