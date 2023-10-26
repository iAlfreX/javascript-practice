let array = createArray();
outputArray(array);
sortArray(array);
outputArray(array, "Відсортований масив за зростанням: ");

// Якщо елементів за умовою десять наприклад
outputArray(array.slice(0, 2).concat(array.slice(5)), "Масив у якого відсутні елементи з 2 по 4 індекс включно: ");

function createArray() {
  const array = [];
  let choice = false;

  do {
    const length = +prompt("Введіть кількість елементів масиву: ");

    if (length >= 1) {
      array.length = length;
      break;
    } else if (isNaN(length)) {
      alert("Помилка! Ви вказали не число!");
    } else {
      alert("Помилка! Ви вказали розмір масиву менше одиниці!");
    }

    choice = confirm("Хочете спробувати ще раз?");
  } while (choice);

  if (array.length === 0) return;

  for (let i = 0; i < array.length; i++) {
    const el = +prompt(`Введіть значення для елементу масива за індексом [${i}]: `);

    if (isNaN(el)) {
      alert(`Помилка! Введене значення для елементу масива за індексом [${i}] є не числом! Спробуйте ще раз!`);
      i--;
    } else {
      array[i] = el;
    }
  }

  return array;
}

function outputArray(array, message) {
  if (typeof message !== "string" || message.trim() === "") message = "Вихідний масив: ";

  if (array instanceof Array) {
    alert(`${message}${array.join(", ")}`);
  } else {
    console.error("Вхідне значення не масив!");
  }
}

function sortArray(array) {
  if (array instanceof Array) {
    array.sort((a, b) => a - b);
  } else {
    console.error("Вхідне значення не масив!");
  }
}
