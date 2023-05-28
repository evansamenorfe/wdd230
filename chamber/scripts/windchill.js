// Get the input values of temperature and wind speed
var temperatureInput = parseFloat(document.getElementById('temperature').value);
var windSpeedInput = parseFloat(document.getElementById('windSpeed').value);

// Check if the input values meet the specification limits
if (temperatureInput <= 50 && windSpeedInput > 3.0) {
  // Calculate the wind chill factor
  var windChillFactor = calculateWindChill(temperatureInput, windSpeedInput);

  // Display the wind chill factor value
  document.getElementById('windChill').textContent = windChillFactor.toFixed(2);
} else {
  // Input values do not meet the requirements, display "N/A"
  document.getElementById('windChill').textContent = "N/A";
}

// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
  var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  return windChill;
}
