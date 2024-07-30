document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '512b8e312d246481337a608224c8a6c6'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${'512b8e312d246481337a608224c8a6c6'}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the JSON response for inspection
            const location = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            // Update HTML elements with data
            document.getElementById('location').textContent = location;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('description').textContent = description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
