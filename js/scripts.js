"use strict";

async function requestWeather(url) {
  try {
    const jsonWeatherData = await fetchData(url);
    const weatherData = await parseJSONData(jsonWeatherData);
    const selectedData = {
      city: weatherData.name,
      temp: weatherData.main.temp,
      pressure: weatherData.main.pressure,
      description: weatherData.weather[0].description,
      humidity: weatherData.main.humidity,
      speed: weatherData.wind.speed,
      deg: weatherData.wind.deg,
      icon: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
    };

    createBasicWeatherTableFromData(selectedData);

    return weatherData;
  } catch (error) {
    console.error(`Произошла ошибка: ${error.message}`);
  }
}

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Ошибка при запросе данных у сервера...");

    return response;
  } catch (error) {
    console.error(`Произошла ошибка: ${error.message}`);
  }
}

async function parseJSONData(jsonData) {
  try {
    const data = await jsonData.json();
    return data;
  } catch (error) {
    console.error(`Произошла ошибка во время распарсивания данных: ${error.message}`);
  }
}

function createBasicWeatherTableFromData(data) {
  const table = document.querySelector("#weather-table");
  table.style.display = "block";

  for (const key in data) {
    const tableRow = document.createElement("tr");
    const tableHead = document.createElement("th");
    const tableData = document.createElement("td");

    if (key === "icon") {
      tableHead.colSpan = 2;
      tableHead.innerHTML = `<img src="${data[key]}" alt="Изображение">`;
      tableRow.appendChild(tableHead);
      table.append(tableRow);
    } else {
      tableHead.textContent = key;
      tableData.textContent = data[key];
      tableRow.append(tableHead);
      tableRow.append(tableData);
      table.append(tableRow);
    }
  }
}

const url = "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&APPID=5d066958a60d315387d9492393935c19";
requestWeather(url);
