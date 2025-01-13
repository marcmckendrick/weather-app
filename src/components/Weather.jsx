import React from "react";

function Weather({ data  }) {
  return (
    <div className="weather">
      <h1>{data?.location?.name || "Unknown Location"}</h1>
      <h3>{data?.location?.region || "Region not available"}</h3>
      <h2>{data?.location?.country || "Unknown Country"}</h2>

    <div className="country-flag">
      <img 
        src={`./public/flags/${data.location.country}.png` || ""}
      />
    </div>

      <p>{data?.location?.localtime}</p>

      <div className="weather-condition">
        <img
          src={data?.current?.condition?.icon || ""}
          alt={data?.current?.condition?.text || "No description available"}
        />
        <p>{data?.current?.condition?.text || "Condition unavailable"}</p>
      </div>

      <p>Temperature: {data?.current?.temp_c ?? "N/A"}°C</p>
      <p>Feels Like: {data?.current?.feelslike_c ?? "N/A"}°C</p>
      <p>Humidity: {data?.current?.humidity ?? "N/A"}%</p>
      <p>Wind Speed: {data?.current?.wind_mph ?? "N/A"} mp/h</p>
    </div>
  );
}

export default Weather;
