import "./WeatherBox.css";
import React from "react";

const WeatherBox = (props) => {
  const calcTemp = (temp) => {
    let cell = Math.round(temp);
    return cell;
  };
  return (
    <div className="weather-box middle-positioning animated zoomIn">
      <div className="temperature">{calcTemp(props.mainTemp)}&#176; C</div>
      <div className="weather-info">
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${props.weatherIcon}.png`}
          alt={props.weatherIcon}
        />
        <div className="min-max-container">
          <span className="min-temp">Min: {calcTemp(props.minTemp)}</span>
          <span className="max-temp">Max: {calcTemp(props.maxTemp)}</span>
        </div>
        <div className="weather-description">{props.weatherDescription}</div>
      </div>
    </div>
  );
};

export default WeatherBox;
