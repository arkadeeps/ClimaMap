const inputText = document.querySelector('.input-text');
const submitButton = document.querySelector('.submit');
const locationButton = document.querySelector('.location-btn');
const content = document.querySelector('.content');
const bigContent = document.querySelector('.big-content');

const apiKey = config.API_KEY;

window.addEventListener('load', () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=" + apiKey)
        .then(response => response.json())
        .then(data => {
            displayContent(data);
        });
});

submitButton.addEventListener('click', () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputText.value + "&units=metric&appid=" + apiKey)
        .then(response => response.json())
        .then(data => {
            inputText.value = '';
            displayContent(data);
        });
});

locationButton.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    displayContent(data);
                });
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

function displayContent(data) {
    const { name, visibility } = data;
    const { country } = data.sys;
    const { icon, description } = data.weather[0];
    const { temp, humidity, feels_like, temp_min, temp_max, pressure } = data.main;
    const { speed } = data.wind;
    
    content.innerHTML = `
        <div class="temperature">
            <img src="/assets/icons/${icon}.png" alt="${description}">
            <h2>${name} / ${country}</h2>
            <h1>${temp}°C</h1>
            <p>Feels like <span>${feels_like}°C</span></p>
        </div>
        <div class="description">
            <h3>${description}</h3>     
            <p>Humidity <span>${humidity}%</span></p>
            <p>Wind speed <span>${speed} km/h</span></p>
            <p>Pressure <span>${pressure} hPa</span></p>
            <p>Visibility <span>${visibility} km</span></p>
            <p>Low <span>${temp_min}°C</span></p>
            <p>High <span>${temp_max}°C</span></p>    
        </div>
    `;

    const weatherCondition = icon;
    bigContent.style.backgroundImage = `url('/assets/background/${weatherCondition}.jpg')`;
}

inputText.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        submitButton.click();
    }
});
