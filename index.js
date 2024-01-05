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
      var coordQueryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&units=metric"

      fetch(coordQueryURL)
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data)
      console.log(data.list)
      //getting date
      //console.log(data.list[0].dt_txt)
      const dateStr = data.list[0].dt_txt
      console.log(dateStr)
      const splitStr = dateStr.split(' ')
      const date = splitStr[0]
      console.log(date)
      const compareDate = data.list[1].dt_txt.split(' ')[0]
      console.log(compareDate)

      //getting temperature
      console.log(data.list[0].main.temp)
      //getting wind
      console.log(data.list[0].wind.speed)
      //getting humidity
      console.log(data.list[0].main.humidity)

      //getting temperatures of the different days
      let todayAllTemp = [data.list[0].main.temp];
      let dayOneAllTemp = [];
      let dayTwoAllTemp = [];
      let dayThreeAllTemp =[];
      let dayFourAllTemp = [];
      let dayFiveAllTemp = [];
      let fiveDaysAllTemp = []

      console.log(data.list.length)

      for (let j = 1; j < data.list.length; j++) {

        if (data.list[0].dt_txt.split(' ')[0] === data.list[j].dt_txt.split(' ')[0]) {
          todayAllTemp.push(data.list[j].main.temp)
        } else {
          fiveDaysAllTemp.push(data.list[j].main.temp)
        }
      }

      function add(accumulator, currentValue) {
        return accumulator + currentValue
      }  
      const todayAvrgTemp = Math.round(todayAllTemp.reduce(add) / todayAllTemp.length)

      console.log(todayAllTemp)
      console.log(todayAvrgTemp)








    })

    

    });

// ================================================================================== //

   