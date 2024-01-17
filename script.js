const apiKey = "27f5bc7cb45316417cdec232f08787ed";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").innerHTML = "Invalid City";
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else if (response.status == 400) {
    document.querySelector(".error").innerHTML = "Please enter city name";
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "Images/clouds.png";
      console.log("cl");
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "Images/clear.png";
      console.log("clear");
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "Images/rain.png";
      console.log("rain");
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "Images/drizzle.png";
      console.log("dr");
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "Images/mist.png";
      console.log("mist");
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  console.log("jkj");
});
