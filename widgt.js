

// Mock weather data for demonstration (Replace this with actual API call)
function fetchWeather() {
    // Simulate an API response for weather info
    const weatherData = {
        temperature: 28, // Celsius
        condition: "Partly Cloudy",
        location: "Calabar"
    };
    
    // Inject weather data into the widget
    document.getElementById('weather-info').innerHTML = `
        <p>${weatherData.location}</p>
        <p class="temperature">${weatherData.temperature}°C</p>
        <p class="condition">${weatherData.condition}</p>
    `;
}

// Fetch weather info when the page loads
document.addEventListener('DOMContentLoaded', function() {
    fetchWeather();
});






document.addEventListener("DOMContentLoaded", function() {
    const ads = document.querySelectorAll('.ad');
    let currentIndex = 0;

    function showAd(index) {
        ads.forEach((ad, i) => {
            ad.classList.remove('active'); // Remove active class from all ads
            if (i === index) {
                ad.classList.add('active'); // Add active class to current ad
            }
        });
    }

    function nextAd() {
        currentIndex = (currentIndex + 1) % ads.length; // Cycle through ads
        showAd(currentIndex);
    }

    showAd(currentIndex); // Show the first ad
    setInterval(nextAd, 3000); // Change ad every 3 seconds
});





