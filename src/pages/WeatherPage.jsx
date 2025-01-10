import React, { useState } from "react";
import Weather from "../components/Weather";
import { fetchWeather } from "../utils/fetchWeather";
import '../styles/Weather.css'

const WeatherPage = () => {

      const [city, setCity] = useState("");
      const [weatherData, setWeatherData] = useState(null);
    
      let cityLower = city.toLowerCase();
    
      const handleSearch = async () => {
        const data = await fetchWeather(city);
        if (data && data.location) {
          setWeatherData(data);
          document.body.style.background = `url(/images/${cityLower}.jpg)`;
        } else {
          alert("City not found or error fetching data.");
          document.body.style.background = '#ffffff';
        }
      };

    return (
        <div className="Home">
          <h1>Weather App</h1>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          {weatherData && <Weather data={weatherData} />}
        </div>
      );
};

export default WeatherPage;