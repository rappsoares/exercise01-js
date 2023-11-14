// Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:
// - [x]  A soma dos dois números;
// - [x]  A subtração dos dois números;
// - [x]  A multiplicação dos dois números;
// - [x]  A divisão dos dois números;
// - [x]  O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

// - [x]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [x]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

let number1 = Number(prompt("Digite o primeiro número: "));
let number2 = Number(prompt("Digite o segundo número: "));

const sum = number1 + number2;
const sub = number1 - number2;
const mult = number1 * number2;
const div = number1 / number2;
const restDiv = number1 % number2;
let parOuImpar = sum % 2 == 0 ? "PAR!" : "ÍMPAR!";
let checkEquals = number1 == number2 ? "são IGUAIS!" : "são DIFERENTES!";

alert(`Os dois números inseridos: ${checkEquals}`);
alert(`A soma dos dois números é: ${sum}`);
alert(`A soma dos dois números é: ${parOuImpar}`);
alert(`A subtração dos dois números é: ${sub}`);
alert(`A multiplicação dos dois números é: ${mult}`);
alert(`A divisão dos dois números é: ${div}`);
alert(`O resto da divisão dos dois números é: ${restDiv}`);
