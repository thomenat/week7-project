// Get user input for the city
//let cityName = prompt("Enter a city");
//let formattedCity = cityName.toLowerCase();

// Check if the entered city exists in the weather data
//if (weather.hasOwnProperty(formattedCity)) {
// let temperature = weather[formattedCity].temp;
// let humidity = weather[formattedCity].humidity;
// let celsiusTemperature = Math.round(temperature);
// let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
// alert(
//   `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${formattedCity} with a humidity of ${humidity}%`
// );
//} else {
// Display a default message if the entered city is not found
//let googleSearchLink = `https://www.google.com/search?q=weather+${formattedCity}`;
//alert(
//  `Sorry, we don't know the weather for this city, try going to ${googleSearchLink}`
// );
//}

//Get current date and time

function currentDate() {
    let now = new Date();
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
    let hour = now.getHours().toString().padStart(2, "0");
    let minute = now.getMinutes().toString().padStart(2, "0");
  
    let dateNow = document.querySelector(".current-date-time");
    dateNow.innerHTML = `${day}, ${hour}:${minute}`;
  }
  
  currentDate();
  
  function displayTemperature(response) {
    let temperatureHeading = document.querySelector(".current-temp");
    let temperature = Math.round(response.data.temperature.current);
    temperatureHeading.innerHTML = temperature;
  }
  
  function searchCity(event) {
    event.preventDefault();
  
    let cityName = document.querySelector(".city-name");
    let currentCityName = document.querySelector(".city-field").value;
    cityName.innerHTML = currentCityName;
    let apiKey = "deabbt600bd7ofd44dbd308802faa2f2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${currentCityName}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }
  
  let form = document.querySelector("form");
  form.addEventListener("submit", searchCity);
  