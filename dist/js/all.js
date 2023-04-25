const weatherBlock=document.getElementById("weather-block"),API_URL="http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";fetch(API_URL).then((e=>e.json())).then((e=>{weatherBlock.innerHTML=`\n    <img src="http://openweathermap.org/img/w/${e.weather[0].icon}.png">\n    <h2>Weather in ${e.name}</h2>\n    <p>Temperature: ${e.main.temp} C</p>\n    <p>Pressure:${e.main.pressure} millibars</p>\n    <p>Weather description:${e.weather[0].description}</p>\n    <p>Humidity:${e.main.humidity}%</p>\n    <p>Wind speed: ${e.wind.speed}m/s</p>\n    <p>Wind degree: ${e.wind.deg} degree</p>\n    `})).catch((e=>{console.log(e)}));
//# sourceMappingURL=all.js.map
