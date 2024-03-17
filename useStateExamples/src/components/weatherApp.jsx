import React, { useState } from "react";
// import "./WeatherApp.css";

const apiKey = "66357b34fd68f540089945a7deacc486";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const checkWeather = async () => {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    setWeatherData(data);
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      checkWeather();
    } else {
      console.error("Please enter a city name");
    }
  };

  return (
    <div className="weather-container">
      <div className="search-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />

        
        <button onClick={handleSearch}>Search</button>


      </div>


      {weatherData &&  (
        <div className="weather-details">
          <h2>{weatherData.name}</h2>
          <div>Temperature: {Math.round(weatherData.main.temp)}°C</div>
          <div>Humidity: {weatherData.main.humidity}%</div>
          <div>Wind Speed: {weatherData.wind.speed} km/h</div>
          <div>
            Sunrise:{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
          </div>
          <div>
            Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
