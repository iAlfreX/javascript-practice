const numOrStr = prompt("Введіть число або рядок: ");
console.log(numOrStr);

switch (true) {
  case numOrStr === null:
    console.log("Ви скасували!");
    break;
  case numOrStr.trim() === "":
    console.log("Пустий рядок!");
    break;
  case isNaN(+numOrStr):
    console.log("Значення є не числом!");
    break;
  default:
    console.log("Все добре!");
}
