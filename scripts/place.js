document.addEventListener("DOMContentLoaded", function() {
    const currentYearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");

    const today = new Date();
    currentYearElement.textContent = today.getFullYear();

    const lastModified = document.lastModified;
    lastModifiedElement.textContent = "Last Modified: " + lastModified;
});

function calculateWindChill(temperature, windSpeed) {
    const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(0);
}

const temperatureElement = document.getElementById('temperature');
const windSpeedElement = document.getElementById('windSpeed');
const windChillElement = document.getElementById("windChill");

const temperature = parseFloat(temperatureElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

windChillElement.textContent = calculateWindChill(temperature, windSpeed);