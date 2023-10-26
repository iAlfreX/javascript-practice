const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const sumOfElements = array.reduce((accumulator, el) => accumulator + el, 0);

const sumOfPairedPositiveElements = array
  .filter((el) => el > 0 && el % 2 === 0)
  .reduce((accumulator, el) => accumulator + el, 0);

const sumOfUnpairedPositiveElements = array
  .filter((el) => el > 0 && el % 2 !== 0)
  .reduce((accumulator, el) => accumulator + el, 0);

const numberOfPositiveElements = array.filter((el) => el > 0).length,
  numberOfNegativeElements = array.filter((el) => el < 0).length;

const maxEl = array.reduce((accumulator, el) => {
  if (el > accumulator) return el;

  return accumulator;
}, array[0]);

const minEl = array.reduce((accumulator, el) => {
  if (el < accumulator) return el;

  return accumulator;
}, array[0]);

const maxElIndex = array.indexOf(maxEl),
  minElIndex = array.indexOf(minEl); // Не зрозумів щодо порядкового номера! Якщо це не індекс то треба при виводі константи додати +1.

const numberOfUnpairedPositiveElements = array.filter((el) => el > 0 && el % 2 !== 0).length,
  numberOfPairedPositiveElements = array.filter((el) => el > 0 && el % 2 === 0).length;

const productOfPositiveElements = array.filter((el) => el > 0).reduce((accumulator, el) => accumulator * el, 1);
const arrayWithOneLargestValue = array.map((el) => {
  if (el !== maxEl) el = 0;

  return el;
});

console.log(`Вихідний масив: ${array.join(", ")}.`);
console.log(``);
console.log(`Сума всіх елементів: ${sumOfElements}. Кількість його позитивних елементів: ${numberOfPositiveElements}.`);
console.log(`Максимальний елемент масива: ${maxEl}. Його індекс: ${maxElIndex}.`);
console.log(`Мінімальний елемент масива: ${minEl}. Його індекс: ${minElIndex}.`);
console.log(`Кількість негативних елементів: ${numberOfNegativeElements}.`);
console.log(`Кількість непарних позитивних елементів: ${numberOfUnpairedPositiveElements}.`);
console.log(`Кількість парних позитивних елементів: ${numberOfPairedPositiveElements}.`);
console.log(`Сума парних позитивних елементів: ${sumOfPairedPositiveElements}.`);
console.log(`Сума непарних позитивних елементів: ${sumOfUnpairedPositiveElements}.`);
console.log(`Добуток парних позитивних елементів: ${productOfPositiveElements}.`);
console.log(`Масив з обнуленими значеннями окрім найбільшого значення: ${arrayWithOneLargestValue.join(", ")}.`);
