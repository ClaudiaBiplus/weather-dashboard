var APIKey = "89fd17c1d5d7414ecd0f21b3c17c86ec";

//getting value from input

const inputEl = document.querySelector("#search-input");
const searchBtn = document.querySelector('#search-button')

searchBtn.addEventListener('click', function () {
    const inputValue = inputEl.value
    localStorage.setItem("city", inputValue);
})

//getting coordinates fom city name 

var cityName = localStorage.getItem("city")
var cityQueryURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + APIKey 

fetch(cityQueryURL)
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data)
      console.log(data[0].lat)
      console.log(data[0].lon)

//where latitude and longitude are
      const lat = data[0].lat
      const lon = data[0].lon

      console.log(lat + ` ` + lon)

//getting weather info
      var coordQueryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey

      fetch(coordQueryURL)
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data)
      console.log(data.list)
    })

    

    });

// ================================================================================== //

   