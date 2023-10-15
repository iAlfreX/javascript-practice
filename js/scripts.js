function getHours() {
  return +prompt("Введіть кількість годин: ");
}

function getSecondsFromHours(value) {
  const minutesInHours = 60;

  return value * Math.pow(minutesInHours, 2);
}

function getMultipleOrSingleValueOfHours(value) {
  let resultString;

  if (value === 1) resultString = "годині";
  else resultString = "годинах";

  return resultString;
}

function getValue(value) {
  alert(value);
}

const hours = getHours();
const secondsFromHours = getSecondsFromHours(hours);
getValue(`Кількість секунд в ${hours} ${getMultipleOrSingleValueOfHours(hours)} - ${secondsFromHours} секунд.`);
