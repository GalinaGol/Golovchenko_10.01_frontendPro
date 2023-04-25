fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    weatherBlock.innerHTML = `
    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp} C</p>
    <p>Pressure:${data.main.pressure} millibars</p>
    <p>Weather description:${data.weather[0].description}</p>
    <p>Humidity:${data.main.humidity}%</p>
    <p>Wind speed: ${data.wind.speed}m/s</p>
    <p>Wind degree: ${data.wind.deg} degree</p>
    `
  })
  .catch(error => {
    console.log(error);
});
