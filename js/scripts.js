const firstNumber = enterNumeric("Введіть перше число: ");
const secondNumber = enterNumeric("Введіть друге число: ");

printRangeOfNumbers(firstNumber, secondNumber);
displayMultTable();
displayMultTableForSpecificNum(firstNumber);

const naturalNumber = enterNumeric();

displayNumberDivisors(naturalNumber);

// ---------------------------------------------------------

// Отримання чисел
function enterNumeric(message) {
  if (typeof message !== "string" || message.trim() === "") message = "Введіть число: ";

  const number = +prompt(message);

  return number;
}

// Метод який виконує завдання 1, 2, 4, 5, 6, 7, 8
function printRangeOfNumbers(firstNumber, secondNumber) {
  let result = "";
  const nanCheck = isNaN(firstNumber) || isNaN(secondNumber);
  const firstNumIsEqualOrGreaterToTheSecondNumCheck = firstNumber >= secondNumber;

  if (nanCheck) {
    alert("Помилка! З отриманих даних виявилося не число!");

    return;
  } else if (firstNumIsEqualOrGreaterToTheSecondNumCheck) {
    alert("Помилка! Перше число більше другого або вони рівні між собою!");

    return;
  }

  const choice = confirm(`Вам потрібно просто вивести діапазон чисел?`);

  // 1. Завдання
  if (choice) {
    for (let i = firstNumber; i <= secondNumber; i++) {
      if (i !== secondNumber) {
        result += `${i}, `;
      } else {
        result += i;
      }
    }
  } else {
    let exit = false;

    do {
      const message = `Введіть відповідну цифру для необхідної дії з діапазоном чисел: 
  1. Вивести квадрати чисел
  2. Вивести суму чисел
  3. Вивести добуток чисел
  4. Вивести середнє арифметичне
  5. Вивести суму лише парних чисел
  6. Вивести всі числа які кратні певному числу`;
      const option = +prompt(message);

      switch (option) {
        case 1: {
          // 2. Завдання
          for (let i = firstNumber; i <= secondNumber; i++) {
            if (i !== secondNumber) {
              result += `${Math.pow(i, 2)}, `;
            } else {
              result += Math.pow(i, 2);
            }
          }

          break;
        }
        case 2: {
          // 4. Завдання
          let sum = 0;

          for (let i = firstNumber; i <= secondNumber; i++) {
            sum += i;
          }

          result = sum;

          break;
        }
        case 3: {
          // 5. Завдання
          let mul = 1;

          for (let i = firstNumber; i <= secondNumber; i++) {
            mul *= i;
          }

          result = mul;

          break;
        }
        case 4: {
          // 6. Завдання
          let amountOfNumbers = 0,
            sum = 0;

          for (let i = firstNumber; i <= secondNumber; i++) {
            amountOfNumbers++;
            sum += i;
          }

          result = sum / amountOfNumbers;

          break;
        }
        case 5: {
          // 7. Завдання
          let pairedNumbersSum = 0;

          for (let i = firstNumber; i <= secondNumber; i++) {
            const isNumberPaired = i % 2 === 0;

            if (isNumberPaired) pairedNumbersSum += i;
          }

          result = pairedNumbersSum;

          break;
        }
        case 6: {
          // 8. Завдання
          const divider = +prompt("Введіть дільник: ");

          if (isNaN(divider) || divider === 0) {
            result = 0;

            break;
          }

          for (let i = firstNumber; i <= secondNumber; i++) {
            const multiplicityCheck = i % divider === 0;

            if (multiplicityCheck) result += `${i}, `;
          }

          result = result.trim().slice(0, -1);

          break;
        }
        default: {
          exit = confirm("Ви ввели неіснуючий варіант! Бажаєте продовжити?");
        }
      }
    } while (exit);
  }

  alert(`Результат: ${result}`);
}

// 12. Завдання
function displayMultTable() {
  console.log(`\n`);

  const initialValueOfMultTable = 1,
    finalValueOfMultTable = 10;

  for (let firstMultiplier = initialValueOfMultTable; firstMultiplier <= finalValueOfMultTable; firstMultiplier++) {
    for (let secondMultiplier = initialValueOfMultTable; secondMultiplier <= finalValueOfMultTable; secondMultiplier++) {
      const productOfNumbers = firstMultiplier * secondMultiplier;

      console.log(`${firstMultiplier} * ${secondMultiplier} = ${productOfNumbers}`);
    }

    console.log(`\n`);
  }
}

// 3. Завдання
function displayMultTableForSpecificNum(inputValue) {
  console.log(`\n`);

  const inputValueCheck = typeof inputValue !== "number" || isNaN(inputValue) || inputValue <= 0;
  const initialValueOfMultTable = 1,
    finalValueOfMultTable = 10;

  if (inputValueCheck) {
    console.error("Вхідні значення не можуть бути оброблені!");
    console.log(`\n`);

    return;
  }

  for (let secondMultiplier = initialValueOfMultTable; secondMultiplier <= finalValueOfMultTable; secondMultiplier++) {
    console.log(`${inputValue} * ${secondMultiplier} = ${inputValue * secondMultiplier}`);
  }

  console.log(`\n`);
}

// 9-10-11. Завдання
function displayNumberDivisors(inputValue) {
  console.log(`\n`);

  const inputValueCheck = typeof inputValue !== "number" || isNaN(inputValue) || inputValue <= 0;
  const initialNaturalNumber = 1;
  const divisorsArray = [],
    pairedDivisors = [];
  let sum = 0;

  if (inputValueCheck) {
    console.error("Вхідне значення не може бути оброблене!");
    console.log(`\n`);

    return;
  }

  for (let divisor = initialNaturalNumber; divisor <= inputValue; divisor++) {
    const divisorFound = inputValue % divisor === 0;

    if (divisorFound) {
      divisorsArray.push(divisor);

      const pairingCheck = divisor % 2 === 0;

      if (pairingCheck) {
        pairedDivisors.push(divisor);
        sum += divisor;
      }
    }
  }

  console.log(`Дільники числа ${inputValue}: ${divisorsArray.join(", ")}`);
  console.log(`Парні дільники: ${pairedDivisors.join(", ")}`);
  console.log(`Сума його парних дільників: ${sum !== 0 ? sum : ""}`);
  console.log(`\n`);
}
