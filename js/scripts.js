function add(firstValue, secondValue) {
  return firstValue + secondValue;
}

function sub(firstValue, secondValue) {
  return firstValue - secondValue;
}

function mul(firstValue, secondValue) {
  return firstValue * secondValue;
}

function div(firstValue, secondValue) {
  const isSecondNumberZero = secondValue === 0;

  if (isSecondNumberZero) return "Ділення на нуль!";

  return firstValue / secondValue;
}

function printValue(value) {
  alert(value);
}

function getNumber() {
  return +prompt("Введіть число: ");
}

const firstValue = getNumber(),
  secondValue = getNumber();

const resultAdd = `${firstValue} + ${secondValue} = ${add(firstValue, secondValue)}`;
printValue(resultAdd);
const resultSub = `${firstValue} - ${secondValue} = ${sub(firstValue, secondValue)}`;
printValue(resultSub);
const resultMul = `${firstValue} * ${secondValue} = ${mul(firstValue, secondValue)}`;
printValue(resultMul);
const resultDiv = `${firstValue} / ${secondValue} = ${div(firstValue, secondValue)}`;
printValue(resultDiv);
