import "./Weather.css";
import "animate.css/animate.min.css";
import React, { useState } from "react";
import ErrorMessage from "./errorMessage/ErrorMessage";
import WeatherContent from "./weatherContent/WeatherContent";

const WeatherApp = () => {
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

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? `weather-app ${backgroundClass}`
          : "weather-app"
      }
    >
      {apiError && <ErrorMessage errorMessage={apiError} />}
      <WeatherContent
        searchEvent={(e) => setQuery(e.target.value)}
        value={query}
        search={search}
        weather={weather}
      />
    </div>
  );
};

export default WeatherApp;
