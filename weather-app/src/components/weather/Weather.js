import "./Weather.css";
import React, { useState } from "react";
import "animate.css/animate.min.css";

const Weather = () => {
  const api = {
    key: "d67b6272f9ffd6283b727a196e3bcdf0",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [backgroundClass, setBackgroundClass] = useState("");
  const [apiError, setApiError] = useState(undefined);

  const search = (evt) => {
    setApiError(undefined);
    if (evt.key === "Enter" && query.length > 0) {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw response;
        })
        .then((result) => {
          setWeather(result);
          setQuery("");
          weatherBackground(result.weather[0].main);
        })
        .catch(function (err) {
          err.json().then((data) => {
            setApiError({ message: data.message });
          });
        });
    }
  };
  const weatherBackground = (description) => {
    switch (true) {
      case description === "Thunderstorm":
        setBackgroundClass("thunderstorm");
        break;
      case description === "Drizze":
        setBackgroundClass("drizze");
        break;
      case description === "Rain":
        setBackgroundClass("rain");
        break;
      case description === "Atmosphere":
        setBackgroundClass("atmosphere");
        break;
      case description === "Snow":
        setBackgroundClass("snow");
        break;
      case description === "Clouds":
        setBackgroundClass("clouds");
        break;
      case description === "Clear":
        setBackgroundClass("clear");
        break;

      default:
        break;
    }
  };
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const calcTemp = (temp) => {
    let cell = Math.round(temp);
    return cell;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? `weather-app ${backgroundClass}`
          : "weather-app"
      }
    >
      {apiError && (
        <div className="error-container animated fadeInDown">
          <p className="error">{apiError.message}</p>
        </div>
      )}
      <main>
        <div className="wrapper">
          <div className="search-box ">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {typeof weather.main != "undefined" ? (
            <div>
              <div className="location-box">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                </div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box animated zoomIn">
                <div className="temperature">
                  {calcTemp(weather.main.temp)}&#176; C
                </div>
                <div className="weather-info">
                  <img
                    className="weather-icon"
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt={weather.weather[0].icon}
                  />
                  <div className="min-max-container">
                    <span className="min-temp">
                      Min: {calcTemp(weather.main.temp_min)}
                    </span>
                    <span className="max-temp">
                      Max: {calcTemp(weather.main.temp_max)}
                    </span>
                  </div>
                  <div className="weather-description">
                    {weather.weather[0].main}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="default-title-container">
              <h1 className="default-title animated fadeInDown">SELECT CITY</h1>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Weather;
