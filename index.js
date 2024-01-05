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

//where latitude and longitude are
      const lat = data[0].lat
      const lon = data[0].lon

//getting weather info
      var coordQueryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&units=metric"

      fetch(coordQueryURL)
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      
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
      
      //temperature for today's date
      const todayAvrgTemp = Math.round(todayAllTemp.reduce(add) / todayAllTemp.length)
      console.log(todayAvrgTemp)

      //temperature for days after today
      
      for (let i = 0; i < fiveDaysAllTemp.length; i++) {
        if (i < 8) {
        dayOneAllTemp.push(fiveDaysAllTemp[i])
        } else if (i >= 8 && i < 16) {
          dayTwoAllTemp.push(fiveDaysAllTemp[i])
        } else if (i >= 16 && i < 24) {
          dayThreeAllTemp.push(fiveDaysAllTemp[i])
        } else if (i >= 24 && i < 32) {
          dayFourAllTemp.push(fiveDaysAllTemp[i])
        } else {
          dayFiveAllTemp.push(fiveDaysAllTemp[i])
        }
      }

      const dayOneAvrgTemp = Math.round(dayOneAllTemp.reduce(add) / dayOneAllTemp.length)
      const dayTwoAvrgTemp = Math.round(dayTwoAllTemp.reduce(add) / dayTwoAllTemp.length)
      const dayThreeAvrgTemp = Math.round(dayThreeAllTemp.reduce(add) / dayThreeAllTemp.length)
      const dayFourAvrgTemp = Math.round(dayFourAllTemp.reduce(add) / dayFourAllTemp.length)
      const dayFiveAvrgTemp = Math.round(dayFiveAllTemp.reduce(add) / dayFiveAllTemp.length)
  
      console.log(dayOneAvrgTemp)
      console.log(dayTwoAvrgTemp)
      console.log(dayThreeAvrgTemp)
      console.log(dayFourAvrgTemp)
      console.log(dayFiveAvrgTemp)








    })

    

    });

// ================================================================================== //

   