 // atividade 1 calculo de media de notas
let nota1 = parseFloat(prompt("Insira a primeira nota:"));
let nota2 = parseFloat(prompt("Insira a segunda nota:"));
let nota3 = parseFloat(prompt("Insira a terceira nota:"));
let nota4 = parseFloat(prompt("Insira a quarta nota:"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
    alert("Aprovado! Média: " + media);
} else {
    alert("Reprovado! Média: " + media);
}
