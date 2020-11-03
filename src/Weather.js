import React, { useState } from "react";
import ActualDate from "./ActualDate";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [city, setCIty] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    console.log(response.data.dt);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "b016d3139dfb068d018e3bb03da1b5f3";
    let units = "metric";

    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(urlApi).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function changeCity(event) {
    setCIty(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form id="real-city" className="mb-2" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                id="city-input"
                autoComplete="off"
                autoFocus="on"
                onChange={changeCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="🔍 Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />

        <ActualDate date={weatherData.date} />

        <hr />
        <Forecast />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
