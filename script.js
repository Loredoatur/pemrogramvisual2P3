const apiKey = "YOUR_API_KEY"; // Dapatkan API Key dari OpenWeatherMap

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Masukkan nama kota!");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weather = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <h3>${data.weather[0].description}</h3>
                <p>🌡️ Suhu: ${data.main.temp}°C</p>
                <p>💧 Kelembaban: ${data.main.humidity}%</p>
            `;
            document.getElementById("weatherResult").innerHTML = weather;
        })
        .catch(() => alert("Kota tidak ditemukan!"));
}