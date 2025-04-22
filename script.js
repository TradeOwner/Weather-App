'use strict';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const cityImages = {
    "San Pablo": "lake.jpg"
}

let dateObj = new Date();
let month = monthNames[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let newdate = `${month}, ${day}, ${year}`;

const app = document.querySelector('.app'); // Fixed: quarySelector ➝ querySelector

fetch('https://api.openweathermap.org/data/2.5/weather?q=san%20pablo&appid=714c79d4ad22eac6308e669f54895e60&units=metric')
  .then(response => response.json())
  .then(data => { // Fixed: data = { ➝ data => {
    console.log(data);

    app.insertAdjacentHTML('afterbegin', `
      <div class="titlebar">
        <p class="date">${newdate}</p>
        <h4 class="city">${data.name}</h4>
        <p class="description">${data.weather[0].description}</p>
      </div>

      <div class="temperature">
        <div class="temp-info">
            <h2>${Math.round(data.main.temp)}°C</h2>
            <div class="temp-details">
                <div class="view">
                    <h5>Wind</h5>
                    <p>${data.wind.speed} m/s</p>
                </div>
                <div class="view">
                    <h5>Visibility</h5>
                    <p>${data.visibility} m</p>
                </div>
                <div class="view">
                    <h5>Humidity</h5>
                    <p>${data.main.humidity}%</p>
                </div>
                <div class="view">
                    <h5>Air Pressure</h5>
                    <p>${data.main.pressure} Pa</p>
                </div>
            </div>
        </div>
        <div class="temp-img">
            <img src="${cityImages['San Pablo']}" alt="Weather in San Pablo" />
        </div>
      </div>

      <div class="footer">
        <p>&copy; 2025, Lean Lopez</p>
      </div>
    `);
  });
