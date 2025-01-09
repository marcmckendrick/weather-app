import React, { useState } from "react";
import Weather from "./components/Weather";
import { fetchWeather } from "./utils/fetchWeather";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchWeather(city);
    if (data && data.location) {
      setWeatherData(data);
    } else {
      alert("City not found or error fetching data.");
    }
  };

  return (
    <div className="App">
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
}

export default App;
