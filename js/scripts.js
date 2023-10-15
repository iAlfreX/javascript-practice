function getString(quantity) {
  let userString = "";

  for (let counter = 0; counter < quantity; counter++) {
    const isLastIteration = quantity - counter === 1;
    userString += prompt("Введіть рядок: ");

    if (!isLastIteration) userString += " ";
  }

  return userString;
}

function getNumber() {
  return +prompt("Введіть число: ");
}

function printValue(value) {
  alert(value);
}

function splitStringCharByChar(line) {
  return line.split("").join(" ");
}

const linesQuantity = +prompt("Введіть кількість рядків: ", "1");
const userString = getString(linesQuantity);
printValue(userString);

const userStringNumber = getNumber().toString();
const brokenStringNumber = splitStringCharByChar(userStringNumber);
printValue(brokenStringNumber);
