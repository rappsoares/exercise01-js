// Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:
// - [x]  A soma dos dois números;
// - [x]  A subtração dos dois números;
// - [x]  A multiplicação dos dois números;
// - [x]  A divisão dos dois números;
// - [x]  O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

// - [x]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [x]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

const number1 = Number(prompt("Digite o primeiro número: "));
const number2 = Number(prompt("Digite o segundo número: "));

const sum = number1 + number2;
const sub = number1 - number2;
const mult = number1 * number2;
const div = number1 / number2;
const restDiv = number1 % number2;
const isPar = sum % 2 == 0;

alert(sum);
alert(sub);
alert(mult);
alert(div);
alert(restDiv);

function checkIsPar(sum) {
  if (isPar) {
    return `O resultado da soma entre ${number1} e ${number2} é ${sum} e é PAR!`;
  } else {
    return `O resultado da soma entre ${number1} e ${number2} é ${sum} e é ÍMPAR!`;
  }
}

function checkIsSameNumber(number1, number2) {
  if (number1 == number2) {
    return `O ${number1} e o ${number2} são IGUAIS!`;
  } else {
    return `O número ${number1} e o número ${number2} são DIFERENTES!`;
  }
}

alert(checkIsPar(sum));
alert(checkIsSameNumber(number1, number2));
