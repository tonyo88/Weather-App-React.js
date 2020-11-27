import "./WeatherContent.css";
import React from "react";
import SearchBar from "./searchBar/SearchBar";
import WeatherInfoBox from "./weatherInfoBox/WeatherInfoBox";
import DefaultTitle from "./defaultTitle/DefaultTitle";

const WeatherContent = (props) => {
  return (
    <main className="weather-content">
      <div className="wrapper">
        <SearchBar
          searchEvent={props.searchEvent}
          value={props.value}
          search={props.search}
        />
        {typeof props.weather.main != "undefined" ? (
          <WeatherInfoBox weather={props.weather} />
        ) : (
          <DefaultTitle />
        )}
      </div>
    </main>
  );
};

export default WeatherContent;
