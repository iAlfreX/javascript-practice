function getUser() {
  return {
    firstName: "",
    lastName: "",
    yearOfBirth: 0,
    age: 0,
    city: "",
    favouriteSport: "",
  };
}

function setUserInformation(user) {
  const currentYear = Number(new Date().getFullYear());
  const unspecifiedValue = "-не вказано-";

  user.firstName = prompt("Введіть ім'я: ") || unspecifiedValue;
  user.lastName = prompt("Введіть прізвище: ") || unspecifiedValue;
  user.yearOfBirth = +prompt("Введіть рік народження: ") || unspecifiedValue;

  user.age = currentYear - user.yearOfBirth;
  if (isNaN(user.age)) user.age = unspecifiedValue;

  user.city = prompt("Введіть місто: ") || unspecifiedValue;
  user.favouriteSport = prompt("Введіть улюблений вид спорту: ") || unspecifiedValue;
}

function getUserInformation(user) {
  const capitals = ["Київ", "Вашингтон", "Лондон"];
  const sports = [
    { sport: "Футбол", champion: "Ліонелем Мессі" },
    { sport: "Баскетбол", champion: "Ніколой Йокічем" },
    { sport: "Волейбол", champion: "Томасом Єшкою" },
  ];

  let userCountry,
    sportСhampion,
    isUserLivesInCapital = false;

  for (const capital of capitals) {
    if (user.city === capital) {
      switch (capital) {
        case "Київ":
          userCountry = "України";
          break;
        case "Вашингтон":
          userCountry = "США";
          break;
        case "Лондон":
          userCountry = "Англії";
          break;
      }

      isUserLivesInCapital = true;

      break;
    }
  }

  for (const sport of sports) {
    if (user.favouriteSport === sport.sport) {
      sportСhampion = sport.champion;

      break;
    }
  }

  const unspecifiedValue = "-не вказано-";
  const tempPhraseOfRegret = "Шкода, що Ви не захотіли ввести";

  alert(`${user.firstName !== unspecifiedValue ? `Твоє ім'я: ${user.firstName}` : `${tempPhraseOfRegret} своє ім'я`}
${user.lastName !== unspecifiedValue ? `Твоє прізвище: ${user.lastName}` : `${tempPhraseOfRegret} своє прізвище`}
${user.age !== unspecifiedValue ? `Твій вік: ${user.age}` : `${tempPhraseOfRegret} свою дату народження`} 
${
  user.city !== unspecifiedValue
    ? `Ти живеш у ${isUserLivesInCapital ? `столиці ${userCountry}` : `місті ${user.city}`}`
    : `${tempPhraseOfRegret} своє місто`
} 
${
  user.favouriteSport !== unspecifiedValue
    ? `${
        sportСhampion !== undefined ? `Круто! Хочеш стати ${sportСhampion}?` : `Твій улюблений спорт: ${user.favouriteSport}`
      }`
    : `${tempPhraseOfRegret} свій улюблений вид спорту`
}`);
}

const user = getUser();
setUserInformation(user);
getUserInformation(user);
