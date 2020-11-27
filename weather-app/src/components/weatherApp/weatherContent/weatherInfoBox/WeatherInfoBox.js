import React from "react";
import LocationBox from "./locationBox/LocationBox";
import WeatherBox from "./weatherBox/WeatherBox";

const WeatherInfoBox = (props) => {
  return (
    <div className="weather-info-box">
      <LocationBox
        cityName={props.weather.name}
        country={props.weather.sys.country}
      />
      <WeatherBox
        mainTemp={props.weather.main.temp}
        weatherIcon={props.weather.weather[0].icon}
        minTemp={props.weather.main.temp_min}
        maxTemp={props.weather.main.temp_max}
        weatherDescription={props.weather.weather[0].main}
      />
    </div>
  );
};

export default WeatherInfoBox;
