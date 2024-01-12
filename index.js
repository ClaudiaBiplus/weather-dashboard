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

      console.log(data.list)
      
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

//getting wind for the different days
      let todayAllWind = [data.list[0].wind.speed];
      let dayOneAllWind = [];
      let dayTwoAllWind = [];
      let dayThreeAllWind =[];
      let dayFourAllWind = [];
      let dayFiveAllWind = [];
      let fiveDaysAllWind = []

      for (let y = 1; y < data.list.length; y++) {

        if (data.list[0].dt_txt.split(' ')[0] === data.list[y].dt_txt.split(' ')[0]) {
          todayAllWind.push(data.list[y].wind.speed)
        } else {
          fiveDaysAllWind.push(data.list[y].wind.speed)
        }
      }

//wind for today's date
      const todayAvrgWind = Math.round(todayAllWind.reduce(add) / todayAllWind.length)
      console.log(todayAvrgWind)

//wind for days after today
      
      for (let x = 0; x < fiveDaysAllWind.length; x++) {
        if (x < 8) {
        dayOneAllWind.push(fiveDaysAllWind[x])
        } else if (x >= 8 && x < 16) {
          dayTwoAllWind.push(fiveDaysAllWind[x])
        } else if (x >= 16 && x < 24) {
          dayThreeAllWind.push(fiveDaysAllWind[x])
        } else if (x >= 24 && x < 32) {
          dayFourAllWind.push(fiveDaysAllWind[x])
        } else {
          dayFiveAllWind.push(fiveDaysAllWind[x])
        }
      }

      const dayOneAvrgWind = Math.round(dayOneAllWind.reduce(add) / dayOneAllWind.length)
      const dayTwoAvrgWind = Math.round(dayTwoAllWind.reduce(add) / dayTwoAllWind.length)
      const dayThreeAvrgWind = Math.round(dayThreeAllWind.reduce(add) / dayThreeAllWind.length)
      const dayFourAvrgWind = Math.round(dayFourAllWind.reduce(add) / dayFourAllWind.length)
      const dayFiveAvrgWind = Math.round(dayFiveAllWind.reduce(add) / dayFiveAllWind.length)
  
      console.log(dayOneAvrgWind)
      console.log(dayTwoAvrgWind)
      console.log(dayThreeAvrgWind)
      console.log(dayFourAvrgWind)
      console.log(dayFiveAvrgWind)

//getting humidity of the different days
      let todayAllHumidity = [data.list[0].main.humidity];
      let dayOneAllHumidity = [];
      let dayTwoAllHumidity = [];
      let dayThreeAllHumidity =[];
      let dayFourAllHumidity = [];
      let dayFiveAllHumidity = [];
      let fiveDaysAllHumidity = []

      for (let j = 1; j < data.list.length; j++) {

        if (data.list[0].dt_txt.split(' ')[0] === data.list[j].dt_txt.split(' ')[0]) {
          todayAllHumidity.push(data.list[j].main.humidity)
        } else {
          fiveDaysAllHumidity.push(data.list[j].main.humidity)
        }
      }

//humidity for today's date
      const todayAvrgHumidity = Math.round(todayAllHumidity.reduce(add) / todayAllHumidity.length)
      console.log(todayAvrgHumidity)

//humidity for days after today
      for (let i = 0; i < fiveDaysAllHumidity.length; i++) {
        if (i < 8) {
        dayOneAllHumidity.push(fiveDaysAllHumidity[i])
        } else if (i >= 8 && i < 16) {
          dayTwoAllHumidity.push(fiveDaysAllHumidity[i])
        } else if (i >= 16 && i < 24) {
          dayThreeAllHumidity.push(fiveDaysAllHumidity[i])
        } else if (i >= 24 && i < 32) {
          dayFourAllHumidity.push(fiveDaysAllHumidity[i])
        } else {
          dayFiveAllHumidity.push(fiveDaysAllHumidity[i])
        }
      }

      const dayOneAvrgHumidity = Math.round(dayOneAllHumidity.reduce(add) / dayOneAllHumidity.length)
      const dayTwoAvrgHumidity = Math.round(dayTwoAllHumidity.reduce(add) / dayTwoAllHumidity.length)
      const dayThreeAvrgHumidity = Math.round(dayThreeAllHumidity.reduce(add) / dayThreeAllHumidity.length)
      const dayFourAvrgHumidity = Math.round(dayFourAllHumidity.reduce(add) / dayFourAllHumidity.length)
      const dayFiveAvrgHumidity = Math.round(dayFiveAllHumidity.reduce(add) / dayFiveAllHumidity.length)
  
      console.log(dayOneAvrgHumidity)
      console.log(dayTwoAvrgHumidity)
      console.log(dayThreeAvrgHumidity)
      console.log(dayFourAvrgHumidity)
      console.log(dayFiveAvrgHumidity)

//getting icon for todays weather
      const todayIcon = data.list[0].weather[0].icon
      const todayIconUrl = "http://openweathermap.org/img/w/" + todayIcon + ".png";

//getting icon for folllowing days


//display today's weather
      const todayWeatherDiv = document.querySelector('#today');
      const todaysDate = dayjs().format('D MMM YYYY')
      todayWeatherDiv.innerHTML = `
      <h3>${cityName}</br>${todaysDate}</h3>
      <div id="icon"><img id="wicon" src="${todayIconUrl}" alt="Weather icon"></div>
      <p>Temperature: ${todayAvrgTemp}°C</p>
      <p>Wind Speed: ${todayAvrgWind} m/s</p>
      <p>Humidity: ${todayAvrgHumidity}%</p>
      `;

//display following days weather
      const forecastDiv = document.querySelector('#forecast');
      const dayOne = dayjs().add(1, 'd').format('D MMM YYYY')
      const dayTwo = dayjs().add(2, 'd').format('D MMM YYYY')
      const dayThree = dayjs().add(3, 'd').format('D MMM YYYY')
      const dayFour = dayjs().add(4, 'd').format('D MMM YYYY')
      const dayFive = dayjs().add(5, 'd').format('D MMM YYYY')
      
      forecastDiv.innerHTML = `
      <h3>5-Day Forecast</h3>
      <h4>${dayOne}</h4>
      <p>Temperature: ${dayOneAvrgTemp}°C</p>
      <p>Wind Speed: ${dayOneAvrgWind} m/s</p>
      <p>Humidity: ${dayOneAvrgHumidity}%</p>
      <h4>${dayTwo}</h4>
      <p>Temperature: ${dayTwoAvrgTemp}°C</p>
      <p>Wind Speed: ${dayTwoAvrgWind} m/s</p>
      <p>Humidity: ${dayTwoAvrgHumidity}%</p>
      <h4>${dayThree}</h4>
      <p>Temperature: ${dayThreeAvrgTemp}°C</p>
      <p>Wind Speed: ${dayThreeAvrgWind} m/s</p>
      <p>Humidity: ${dayThreeAvrgHumidity}%</p>
      <h4>${dayFour}</h4>
      <p>Temperature: ${dayFourAvrgTemp}°C</p>
      <p>Wind Speed: ${dayFourAvrgWind} m/s</p>
      <p>Humidity: ${dayFourAvrgHumidity}%</p>
      <h4>${dayFive}</h4>
      <p>Temperature: ${dayFiveAvrgTemp}°C</p>
      <p>Wind Speed: ${dayFiveAvrgWind} m/s</p>
      <p>Humidity: ${dayFiveAvrgHumidity}%</p>
      `;


// ================================================================================== //
      console.log('test from here')

      //arrays for all days weather

      const todayWeather = [];
      const dayOneWeather = [];
      const dayTwoWeather = [];
      const dayThreeWeather = [];
      const dayFourWeather = [];
      const dayFiveWeather = [];
      const fiveDaysWeather =[];

      for (let m = 1; m < data.list.length; m++) {

        if (data.list[0].dt_txt.split(' ')[0] === data.list[m].dt_txt.split(' ')[0]) {
          let list = data.list[m]
          todayWeather.push(list)
        } else {
          fiveDaysWeather.push(data.list[m])
        }
      }

      for (let i = 0; i < fiveDaysWeather.length; i++) {
        if (i < 8) {
        dayOneWeather.push(fiveDaysWeather[i])
        } else if (i >= 8 && i < 16) {
          dayTwoWeather.push(fiveDaysWeather[i])
        } else if (i >= 16 && i < 24) {
          dayThreeWeather.push(fiveDaysWeather[i])
        } else if (i >= 24 && i < 32) {
          dayFourWeather.push(fiveDaysWeather[i])
        } else {
          dayFiveWeather.push(fiveDaysWeather[i])
        }
      }

      //extracting needed data

      const todayTemps = [todayWeather[0].main.temp]
      const dayOneTemps = []
      const dayTwoTemps = []
      const dayThreeTemps = []
      const dayFourTemps = []
      const dayFiveTemps = []

      const todayWinds = [todayWeather[0].wind.speed]
      const dayOneWinds = []
      const dayTwoWinds = []
      const dayThreeWinds = []
      const dayFourWinds = []
      const dayFiveWinds = []

      const todayHumis = [todayWeather[0].main.humidity]
      const dayOneHumis = []
      const dayTwoHumis = []
      const dayThreeHumis = []
      const dayFourHumis = []
      const dayFiveHumis = []



      console.log(todayWeather)
      console.log(dayOneWeather)
      console.log(dayTwoWeather)
      console.log(dayThreeWeather)
      console.log(dayFourWeather)
      console.log(dayFiveWeather)




    })



    });


   