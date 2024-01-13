var APIKey = "89fd17c1d5d7414ecd0f21b3c17c86ec";

//getting value from input

const inputEl = document.querySelector("#search-input");
const searchBtn = document.querySelector('#search-button')


searchBtn.addEventListener('click', function () {
    const inputValue = inputEl.value
    localStorage.setItem('city', inputValue);
})

//executing the rest of the code only if there is a value in localStorage for city
if (localStorage.getItem('city') !== null) {

//==========================STORING CITY SEARCH DATA==========================//

//storing city search history
const cityFromStorage = localStorage.getItem('city');
let cityHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
cityHistory.unshift(cityFromStorage)
localStorage.setItem('searchHistory', JSON.stringify(cityHistory));

//button from search history
function addButton(value){
  const button = document.createElement('button')
  button.textContent = value;
  const buttonDiv = document.querySelector('#history')
  buttonDiv.appendChild(button)
}

const firstFive = cityHistory.slice(0, 5)
firstFive.forEach((city) => addButton(city))


//==========================SHOWING WEATHER DATA==========================//

//getting coordinates fom city name 


  var cityName = localStorage.getItem('city')
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
      
        //arrays for all days weather

        const todayWeather = [];
        const fiveDaysWeather =[];

        for (let m = 0; m < data.list.length; m++) {

          if (data.list[0].dt_txt.split(' ')[0] === data.list[m].dt_txt.split(' ')[0]) {
            todayWeather.push(data.list[m])
          } else {
            fiveDaysWeather.push(data.list[m])
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

        //data for current date

        for (let m = 1; m < todayWeather.length; m++) {

          todayTemps.push(todayWeather[m].main.temp)
          todayWinds.push(todayWeather[m].wind.speed)
          todayHumis.push(todayWeather[m].main.humidity)
          
        }

        function add(accumulator, currentValue) {return accumulator + currentValue}

        const todayTemperature = Math.round(todayTemps.reduce(add) / todayTemps.length)
        const todayHumidity = Math.round(todayHumis.reduce(add) / todayHumis.length)
        const todayWindSpeed = Math.round(todayWinds.reduce(add) / todayWinds.length)



        //data for next days

        for (let j = 0; j < fiveDaysWeather.length; j++) {
          if (j < 8) {
          dayOneTemps.push(fiveDaysWeather[j].main.temp)
          dayOneWinds.push(fiveDaysWeather[j].wind.speed)
          dayOneHumis.push(fiveDaysWeather[j].main.humidity)
          } else if (j >= 8 && j < 16) {
            dayTwoTemps.push(fiveDaysWeather[j].main.temp)
            dayTwoWinds.push(fiveDaysWeather[j].wind.speed)
            dayTwoHumis.push(fiveDaysWeather[j].main.humidity)
          } else if (j >= 16 && j < 24) {
            dayThreeTemps.push(fiveDaysWeather[j].main.temp)
            dayThreeWinds.push(fiveDaysWeather[j].wind.speed)
            dayThreeHumis.push(fiveDaysWeather[j].main.humidity)
          } else if (j >= 24 && j < 32) {
            dayFourTemps.push(fiveDaysWeather[j].main.temp)
            dayFourWinds.push(fiveDaysWeather[j].wind.speed)
            dayFourHumis.push(fiveDaysWeather[j].main.humidity)
          } else {
            dayFiveTemps.push(fiveDaysWeather[j].main.temp)
            dayFiveWinds.push(fiveDaysWeather[j].wind.speed)
            dayFiveHumis.push(fiveDaysWeather[j].main.humidity)
          }
        }

        //day one data
        const dayOneTemperature = Math.round(dayOneTemps.reduce(add) / dayOneTemps.length)
        const dayOneHumidity = Math.round(dayOneHumis.reduce(add) / dayOneHumis.length)
        const dayOneWindSpeed = Math.round(dayOneWinds.reduce(add) / dayOneWinds.length)

        //day two data
        const dayTwoTemperature = Math.round(dayTwoTemps.reduce(add) / dayTwoTemps.length)
        const dayTwoHumidity = Math.round(dayTwoHumis.reduce(add) / dayTwoHumis.length)
        const dayTwoWindSpeed = Math.round(dayTwoWinds.reduce(add) / dayTwoWinds.length)

        //day three data
        const dayThreeTemperature = Math.round(dayThreeTemps.reduce(add) / dayThreeTemps.length)
        const dayThreeHumidity = Math.round(dayThreeHumis.reduce(add) / dayThreeHumis.length)
        const dayThreeWindSpeed = Math.round(dayThreeWinds.reduce(add) / dayThreeWinds.length)

        //day four data
        const dayFourTemperature = Math.round(dayFourTemps.reduce(add) / dayFourTemps.length)
        const dayFourHumidity = Math.round(dayFourHumis.reduce(add) / dayFourHumis.length)
        const dayFourWindSpeed = Math.round(dayFourWinds.reduce(add) / dayFourWinds.length)

        //day five data
        const dayFiveTemperature = Math.round(dayFiveTemps.reduce(add) / dayFiveTemps.length)
        const dayFiveHumidity = Math.round(dayFiveHumis.reduce(add) / dayFiveHumis.length)
        const dayFiveWindSpeed = Math.round(dayFiveWinds.reduce(add) / dayFiveWinds.length)

        //getting icon for todays weather
        const todayIcon = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";

        //getting icon for next days
        const dayOneIcon = "http://openweathermap.org/img/w/" + fiveDaysWeather[4].weather[0].icon + ".png";
        const dayTwoIcon = "http://openweathermap.org/img/w/" + fiveDaysWeather[12].weather[0].icon + ".png";
        const dayThreeIcon = "http://openweathermap.org/img/w/" + fiveDaysWeather[20].weather[0].icon + ".png";
        const dayFourIcon = "http://openweathermap.org/img/w/" + fiveDaysWeather[28].weather[0].icon + ".png";
        const dayFiveIcon = "http://openweathermap.org/img/w/" + fiveDaysWeather[fiveDaysWeather.length - 1].weather[0].icon + ".png";

        //display today's weather
        const todayWeatherDiv = document.querySelector('#today');
        const todaysDate = dayjs().format('D MMM YYYY')
        todayWeatherDiv.innerHTML = `
        <h3>${cityName}</br>${todaysDate}</h3>
        <div id="icon"><img id="wicon" src="${todayIcon}" alt="Weather icon"></div>
        <p>Temperature: ${todayTemperature}°C</p>
        <p>Wind Speed: ${todayWindSpeed} m/s</p>
        <p>Humidity: ${todayHumidity}%</p>
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
        <div id="icon"><img id="wicon" src="${dayOneIcon}" alt="Weather icon"></div>
        <p>Temperature: ${dayOneTemperature}°C</p>
        <p>Wind Speed: ${dayOneWindSpeed} m/s</p>
        <p>Humidity: ${dayOneHumidity}%</p>
        <h4>${dayTwo}</h4>
        <div id="icon"><img id="wicon" src="${dayTwoIcon}" alt="Weather icon"></div>
        <p>Temperature: ${dayTwoTemperature}°C</p>
        <p>Wind Speed: ${dayTwoWindSpeed} m/s</p>
        <p>Humidity: ${dayTwoHumidity}%</p>
        <h4>${dayThree}</h4>
        <div id="icon"><img id="wicon" src="${dayThreeIcon}" alt="Weather icon"></div>
        <p>Temperature: ${dayThreeTemperature}°C</p>
        <p>Wind Speed: ${dayThreeWindSpeed} m/s</p>
        <p>Humidity: ${dayThreeHumidity}%</p>
        <h4>${dayFour}</h4>
        <div id="icon"><img id="wicon" src="${dayFourIcon}" alt="Weather icon"></div>
        <p>Temperature: ${dayFourTemperature}°C</p>
        <p>Wind Speed: ${dayFourWindSpeed} m/s</p>
        <p>Humidity: ${dayFourHumidity}%</p>
        <h4>${dayFive}</h4>
        <div id="icon"><img id="wicon" src="${dayFiveIcon}" alt="Weather icon"></div>
        <p>Temperature: ${dayFiveTemperature}°C</p>
        <p>Wind Speed: ${dayFiveWindSpeed} m/s</p>
        <p>Humidity: ${dayFiveHumidity}%</p>
        `;

    })

    });
  }
  
