// 1. Task ----------

// const array = [17, 33, null, 7, undefined, { name: "Anton", surname: "Sharenko" }, 85, 62, "string", 6];

// consoleArithmeticMean(array);

// function consoleArithmeticMean(array) {
//   if (!Array.isArray(array)) {
//     console.log("В качестве аргумента функции 'getArithmeticMean' был передан не массив!");
//     return;
//   }

//   let count = 0;

//   const sumOfNumericElements = array.reduce((acc, el) => {
//     if (typeof el === "number" && !isNaN(el)) {
//       acc += el;
//       count++;
//     }

//     return acc;
//   }, 0);

//   if (count === 0) {
//     console.log("В переданном массиве нет числовых значений!");
//     return;
//   }

//   console.log(`Среднее арифметическое числовых значений массива: ${sumOfNumericElements / count}`);
// }

// 2. Task ----------

// const firstNumber = getNumber(),
//   secondNumber = getNumber(),
//   operationSign = getSymbol();

// if (firstNumber !== undefined && secondNumber !== undefined && operationSign !== undefined) {
//   doMath(firstNumber, operationSign, secondNumber);
// }

// function getNumber() {
//   const num = prompt("Введите число: ");

//   if (num !== null) {
//     return num;
//   }
// }

// function getSymbol() {
//   const sign = prompt("Введите знак арифметической операции (+, -, *, /, %, ^): ");

//   if (sign !== null) {
//     return sign;
//   }
// }

// function doMath(x, sign, y) {
//   const firstNumber = Number(x);
//   const secondNumber = Number(y);

//   if (isNaN(x) || isNaN(y)) {
//     alert("Один из переданных аргументов является не числом!");
//     return;
//   }

//   if (sign.length !== 1) {
//     alert("Знак арифметической операции должен состоять из одного символа!");
//     return;
//   }

//   switch (sign) {
//     case "+": {
//       alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
//       break;
//     }
//     case "-": {
//       alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
//       break;
//     }
//     case "*": {
//       alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
//       break;
//     }
//     case "/": {
//       if (secondNumber === 0) {
//         alert("Ошибка! Деление на ноль!");
//         return;
//       }

//       alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
//       break;
//     }
//     case "%": {
//       alert(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
//       break;
//     }
//     case "^": {
//       alert(`${firstNumber} ^ ${secondNumber} = ${firstNumber ** secondNumber}`);
//       break;
//     }
//     default: {
//       alert("Вы ввели не существующий знак арифметической операции!");
//     }
//   }
// }

// 3. Task ----------

// const checkForNull = (value) => (value === null ? true : false);
// const checkForNaN = (value) => (isNaN(value) ? true : false);
// const checkForLessThanOrEqualToZero = (value) => (value <= 0 ? true : false);
// const checkForCorrectArray = (array) => Array.isArray(array) && array.length > 0;

// const twoDimensionalArray = createTwoDimensionalArray();
// fillNumericTwoDimensionalArray(twoDimensionalArray);
// outputTwoDimensionalArray(twoDimensionalArray);

// function createTwoDimensionalArray() {
//   const twoDimensionalArray = [];
//   const mainArrayLengthStr = prompt("Введите длину основного массива: ");

//   if (checkForNull(mainArrayLengthStr)) return;

//   const mainArrayLength = +mainArrayLengthStr;

//   if (checkForNaN(mainArrayLength)) {
//     alert("Вы ввели не число!");
//     return;
//   }

//   if (checkForLessThanOrEqualToZero(mainArrayLength)) {
//     alert("Длина массива не может быть меньше или равно нулю!");
//     return;
//   }

//   twoDimensionalArray.length = mainArrayLength;

//   for (let i = 0; i < twoDimensionalArray.length; i++) {
//     const internalArrayLengthStr = prompt(`Введите длину внутреннего массива для элемента под индексом [${i}]: `);

//     if (checkForNull(internalArrayLengthStr)) return;

//     const internalArrayLength = +internalArrayLengthStr;

//     if (checkForNaN(internalArrayLength)) {
//       alert("Вы ввели не число!");
//       return;
//     }

//     if (checkForLessThanOrEqualToZero(internalArrayLength)) {
//       alert("Длина массива не может быть меньше или равно нулю!");
//       return;
//     }

//     twoDimensionalArray[i] = new Array(internalArrayLength);
//   }

//   return twoDimensionalArray;
// }

// function fillNumericTwoDimensionalArray(array) {
//   if (!checkForCorrectArray(array)) return;

//   for (let i = 0; i < array.length; i++) {
//     if (!checkForCorrectArray(array[i])) return;

//     for (let j = 0; j < array[i].length; j++) {
//       const userInputStr = prompt(`Введите значение для элемента массива под индексами [${i}][${j}]: `);

//       if (checkForNull(userInputStr)) {
//         array[i][j] = "-";
//         continue;
//       }

//       const userInput = +userInputStr;

//       if (checkForNaN(userInput)) {
//         array[i][j] = 0;
//         continue;
//       }

//       array[i][j] = userInput;
//     }
//   }
// }

// function outputTwoDimensionalArray(array) {
//   if (!checkForCorrectArray(array)) return;

//   let outputStr = "Двумерный массив:\n";

//   for (let i = 0; i < array.length; i++) {
//     if (!checkForCorrectArray(array[i])) return;

//     const internalArrayStr = array[i].join(" | ");

//     outputStr += `${internalArrayStr}\n`;
//   }

//   alert(outputStr);
// }

// 4. Task ----------

const checkForNull = (value) => (value === null ? true : false);
const checkForEmptyString = (value) => (value.trim() === "" ? true : false);
const checkForString = (value) => (typeof value === "string" ? true : false);
const checkForArray = (value) => (Array.isArray(value) ? true : false);
const checkForLessThanOrEqualToZero = (value) => (value <= 0 ? true : false);
const checkForUndefined = (value) => (value === undefined ? true : false);

const customString = createString();

if (!checkForUndefined(customString)) {
  outputString(`Исходная строка: ${customString}`);
  const charactersToDelete = defineСharactersToRemove();
  const convertedString = removeСharactersFromString(customString, charactersToDelete);

  if (!checkForUndefined(convertedString)) {
    outputString(`Строка без указанных символов: ${convertedString}`);
  }
}

function createString() {
  const userInput = prompt("Введите строку текста:");

  if (checkForNull(userInput) || checkForEmptyString(userInput)) return;

  return userInput;
}

function defineСharactersToRemove() {
  const characters = prompt("Введите символы через ПРОБЕЛ которые необходимо удалить:");

  if (checkForNull(characters) || checkForEmptyString(characters)) return;

  return characters.split(" ");
}

function removeСharactersFromString(string, charactersToDelete) {
  if (!checkForString(string) || checkForEmptyString(string)) return;

  if (!checkForArray(charactersToDelete) || checkForLessThanOrEqualToZero(charactersToDelete.length)) return;

  const stringArray = string.split("");

  const filteredArray = stringArray.filter((symbol) => !charactersToDelete.includes(symbol));

  return filteredArray.join("");
}

function outputString(string) {
  if (!checkForString(string) || checkForEmptyString(string)) return;

  alert(string);
}
