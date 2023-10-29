const array = createArray();

outputArray(array);

if (typeof array !== "undefined") {
  const item = prompt("Введите элемент массива, который нужно удалить: ");

  if (!enableNullCheck(item)) {
    removeElement(array, item);
    outputArray(array);
  }
}

function removeElement(array, item) {
  if (Array.isArray(array) && !isNaN(item)) {
    if (array.length !== 0) {
      const index = array.findIndex((el) => el === +item);

      index !== -1 ? array.splice(index, 1) : alert("Данного элемента нет в массиве!");
    } else {
      alert("Массив пустой!");
    }
  } else {
    alert("Входные данные неверны!");
  }
}

function createArray() {
  const array = [];
  let input = prompt("Введите числовые элементы массива или 'готово', чтобы закончить:");

  if (enableNullCheck(input)) return;

  while (input.toLowerCase() !== "готово") {
    if (!isNaN(input)) {
      array.push(+input);
    } else {
      alert("Вы ввели не число! Попробуйте еще раз!");
    }

    input = prompt("Введите следующий элемент массива или 'готово', чтобы закончить:");

    if (enableNullCheck(input)) return;
  }

  return array;
}

function outputArray(array) {
  if (Array.isArray(array)) {
    alert(`Элементы массива: ${array}.`);
  }
}

function enableNullCheck(input) {
  if (input === null) return true;
}
