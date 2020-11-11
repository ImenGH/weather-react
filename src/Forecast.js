import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState(null);

  function showForecast(response) {
    setWeatherForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.city === weatherForecast.city.name) {
    console.log(weatherForecast);
    return (
      <div className="forecast row">
        <WeatherForecastPreview data={weatherForecast.list[0]} />
        <WeatherForecastPreview data={weatherForecast.list[1]} />
        <WeatherForecastPreview data={weatherForecast.list[2]} />
        <WeatherForecastPreview data={weatherForecast.list[3]} />
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=b016d3139dfb068d018e3bb03da1b5f3&units=metric`;
    axios.get(url).then(showForecast);
    return null;
  }
}
