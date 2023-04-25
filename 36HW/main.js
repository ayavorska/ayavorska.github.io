"use strict";
const API_KEY = "9ca9a3d3633655cbf17293a8810e3526";
const LAT = 50.038735;
const LON = 21.985346;

async function getWeather(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    if (!response.ok) {
      return false;
    }
    const body = await response.json();
    return body;
  } catch (error) {
    return false;
  }
}

function kToCelsius(tempK) {
  return tempK - 273.15;
}

async function initWeather() {
  const iconWeatherEl = document.querySelector("#icon");
  const temperatureWeatherEl = document.querySelector("#temperature");
  const cityWeatherEl = document.querySelector("#city");
  const timeWeatherEl = document.querySelector("#time");
  const humidityWeatherEl = document.querySelector("#humidity");
  const pressureWeatherEl = document.querySelector("#pressure");
  const windWeatherEl = document.querySelector("#wind");

  let weatherData;

  const lastUpdated = localStorage.getItem("lastUpdate");
  lastUpdated.toLocaleString();
  if (lastUpdated) {
    const lastUpdatedDate = new Date(lastUpdated);
    const currentDate = new Date();
    const differenceDate = (currentDate - lastUpdatedDate) / (1000 * 60);
    const twoHours = 2 * 60 * 60 * 1000;

    if (differenceDate < twoHours) {
      const storedWeatherDate = localStorage.getItem("weatherData");

      weatherData = JSON.parse(storedWeatherDate);
    } else {
      weatherData = await getWeather(LAT, LON);
      localStorage.setItem("lastUpdate", new Date());
      localStorage.setItem("weatherData", JSON.stringify(weatherData));
    }
  } else {
    weatherData = await getWeather(LAT, LON);

    localStorage.setItem("lastUpdate", new Date());
    localStorage.setItem("weatherData", JSON.stringify(weatherData));
  }
  console.log(weatherData);

  iconWeatherEl.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
  );
  temperatureWeatherEl.textContent = kToCelsius(weatherData.main.temp).toFixed(
    2
  );
  cityWeatherEl.textContent = weatherData.name;
  timeWeatherEl.textContent = lastUpdated;
  humidityWeatherEl.textContent = weatherData.main.humidity;
  pressureWeatherEl.textContent = weatherData.main.pressure;
  windWeatherEl.textContent = weatherData.wind.speed;
}

getWeather(LAT, LON);
initWeather();
