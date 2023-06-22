// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const city = 'Fairbanks';
const units = 'imperial';
const appId = 'eb9a0d74fedfaddac7cd755d3937ea78'; // Replace with your registered application ID

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${appId}`;
// const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=eb9a0d74fedfaddac7cd755d3937ea78&units=imperial';


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const capitalizedDesc = desc.charAt(0).toUpperCase() + desc.slice(1);

  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = capitalizedDesc;
}