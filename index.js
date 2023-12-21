var APIKey = "a37b207ab7356c57e7f33d87a8a3d1e1";

//getting value from input

const inputEl = document.querySelector("#search-input");
const searchBtn = document.querySelector('#search-button')

searchBtn.addEventListener('click', function () {
    const inputValue = inputEl.value
    localStorage.setItem("city", inputValue);
})

//getting coordinates fom city name 
//TODO: api key is not working, try second key

var cityName = localStorage.getItem("city")
var cityQueryURL = "http://api.openweathermap.org/geo/1.0/direct?q={" + cityName + "}&appid={" + APIKey + "}"

fetch(cityQueryURL)
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });

var lat = x 
var lon = y 

var coordQueryURL = "api.openweathermap.org/data/2.5/forecast?lat={" + lat + "}&lon={" + lon + "}&appid={" + APIKey + "}"