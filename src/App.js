import React, { useState } from "react";
import "./App.css";
import { fetchWeather } from "./api/fetchWeather";
const App = () => {
  const [query, setQuery] = useState("");
  const [wheather, setWeather] = useState("");

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
    }
  };
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        onKeyPress={search}
      />
      {wheather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{wheather.name}</span>
            <sup>{wheather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(wheather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
          <img className="city-icon" src={`https://openweathermap.org/img/wn/${wheather.weather[0].icon}@2x.png`} alt={wheather.weather[0].description} />

          </div>
        </div>
      )}
    </div>
  );
};

export default App;
