let key = `7fc4c0597f7ac1aa3f52ffe1b0773d9b`;
let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = days[currentTime.getDay()];
let clock = currentTime.getHours();
let minutes = currentTime.getMinutes();
let realTime = document.querySelector("#real-time");
realTime.innerHTML = `${today} ${clock}:${minutes}`;

function submitCity(event) {
  event.preventDefault();
}
let citySearch = document.querySelector("#city-example");
citySearch.addEventListener("click", submitCity);

function search() {
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = citySearch.value;
  //this should change
  let city = prompt("Please enter city here once more");
  let currenttemp = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7fc4c0597f7ac1aa3f52ffe1b0773d9b&units=metric`;
  function showTemp(response) {
    let celcius = Math.round(response.data.list[0].main.temp);
    let newCelcius = document.querySelector("#currentDegree");
    newCelcius.innerHTML = celcius;
    let newWeather = document.querySelector("#weather");
    newWeather.innerHTML = response.data.list[0].weather[0].main;
    let humidity = document.querySelector("#humidity-value");
    humidity.innerHTML = Math.round(response.data.list[0].main.humidity);
    let windSpeed = document.querySelector("#wind-speed-value");
    windSpeed.innerHTML = Math.round(response.data.list[0].wind.speed);
    //just checking
    console.log(response.data);
  }
  axios.get(currenttemp).then(showTemp);
}
let searchButton = document.querySelector("#button-addon2");
searchButton.addEventListener("click", search);

function showPosition(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
}
navigator.geolocation.getCurrentPosition(showPosition);

function currentLocation(position) {
  showPosition(position);
  let currentLocationTemp = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7fc4c0597f7ac1aa3f52ffe1b0773d9b&units=metric`;
  let newTemp = document.querySelector("#currentDegree");
  newTemp.innerHTML = currentLocationTemp;
}
let currentLocationButton = document.querySelector("#geoButton");
currentLocationButton.addEventListener("click", currentLocation);
