document.addEventListener('DOMContentLoaded' , () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "e91b54ada70640593a66e0490a5a2084"   // env variables

  getWeatherBtn.addEventListener("click" , () => {
    cityInput.value.trim()
    if(!city) return ;

  })

  function fetchWeatherData(city) {
    // gets the data 
  }

  function displayWeatherData(weatherData) {
    // display
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove('hidden')
  }



})


