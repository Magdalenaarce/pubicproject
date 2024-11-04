let now = new Date();

let currentDate = document.querySelector("#current-date");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
console.log(`${day} ${hours}:${minutes}`);

currentDate.innerHTML = `${day} ${hours}:${minutes}`;

let form1 = document.querySelector("#city-form");
let cityText = document.querySelector("#city-text");
let cityInput = document.querySelector("#city");

function changeCity(event) {
  event.preventDefault();
  cityText.innerHTML = cityInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput.value}&key=ec2tac9a4a7ec807298084203cbof638`;
  axios.get(apiUrl).then(updateTemperature);
  console.log(cityInput.value);
}

form1.addEventListener("submit", changeCity);

let temperature = document.querySelector(".temperature-today");

function updateTemperature(response) {
  temperature.innerHTML = `${Math.round(response.data.temperature.current)}°C`;
  console.log(response.data.temperature.current);
}
