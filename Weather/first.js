
async function getWeather(citys) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2c83fe084a20443b840174822262506&q=${citys}&aqi=no`);
    const data = await response.json();
    // console.log(data);

    const city = data.location.name; //
    const temperature = data.current.temp_c; //
    const humidity = data.current.humidity;
    const icon = data.current.condition.icon;
    const windSpeed = data.current.wind_kph;
    const condition = data.current.condition.text; //

    // console.log(`City: ${city}`);
    // console.log(`Temperature: ${temperature}°C`);
    // console.log(`Humidity: ${humidity}%`);
    // console.log(`Wind Speed: ${windSpeed} kph`);
    // console.log(`Icon: ${icon}`);
    // console.log(`Condition: ${condition}`);


    const cityElement = document.getElementsByClassName('weather-info');
    cityElement[0].querySelector('h1').textContent = temperature + '°C';
    cityElement[0].querySelector('h2').textContent = city;
    cityElement[0].querySelector('p').textContent = condition;
    cityElement[0].querySelector('img').src = icon;

    const bd = document.getElementById('one');
    bd.querySelector('p').textContent = humidity + '%';

    const bd2 = document.getElementById('two');
    bd2.querySelector('p').textContent = windSpeed + ' kph';



}
getWeather('Dhaka');

const search = document.getElementById('city-input');



const button = document.getElementById('btn');
button.addEventListener('click', () => {
    const city = search.value;
    getWeather(city);
});