const checkForNull = (value) => (value === null ? true : false);
const checkForNaN = (value) => (isNaN(value) ? true : false);
const checkForNumber = (value) => (typeof value === "number" ? true : false);

const sum = createSumFunction();

if (typeof sum === "function") {
  output(sum(3));
  output(sum(5));
  output(sum(20));
  output(sum("hello"));
  output(sum(5));
  output(sum(3, true));
  output(sum(5));
  output(sum(20));
}

function createSumFunction() {
  const tempSum = prompt("Введите начальное значение-состояние к которому будет необходимо прибавлять числа: ", "0");

  if (checkForNull(tempSum)) return;

  let sum = Number(tempSum);

  if (checkForNaN(sum) || !checkForNumber(sum)) {
    alert("Ошибка! Вы ввели не число!");
    return;
  }

  return function (value, reset = false) {
    if (checkForNaN(value) || !checkForNumber(value)) return;

    if (reset === true) sum = 0;

    return (sum += value);
  };
}

function output(value) {
  alert(value);
}
