var APIKey = "a37b207ab7356c57e7f33d87a8a3d1e1";

//getting coordinates from city name

const inputEl = document.querySelector("#search-input");
const searchBtn = document.querySelector('#search-button')

searchBtn.addEventListener('click', function () {
    const inputValue = inputEl.value
    localStorage.setItem("city", inputValue);
})



var cityName = lll

var cityQueryURL = "api.openweathermap.org/geo/1.0/direct?q={" + cityName + "}&appid={" + APIKey + "}"

var lat = x 
var lon = y 

var coordQueryURL = "api.openweathermap.org/data/2.5/forecast?lat={" + lat + "}&lon={" + lon + "}&appid={" + APIKey + "}"