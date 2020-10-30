import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import cloudy from "./images/cloudy.svg";
import sunny from "./images/sunny.svg";
import rain from "./images/rain.svg";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].main,
      iconUrl: "https:/ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="weather">
        <form id="real-city" className="mb-2">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                id="city-input"
                autoComplete="off"
                autoFocus="on"
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

        <div className="row currentWeather">
          <div className="col-4">
            <div className="clearfix">
              <h1 id="city">{weatherData.city}</h1>
              <h4 id="visibility" className="text-capitalize">
                {weatherData.description}
              </h4>
              <br />
              <div>
                <span className="temperature" id="temp">
                  {weatherData.temperature}
                </span>
                <a href="NAN" id="celsius" className="active">
                  °C
                </a>{" "}
                |
                <a href="NAN" id="fahrenheit">
                  °F
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
          </div>

          <div className="col-4">
            <div className="row precipitation">
              <div className="col-12">
                <span
                  className="iconify"
                  data-icon="wi-humidity"
                  data-inline="false"
                ></span>
                <span id="humidity">{weatherData.humidity}</span> %
              </div>

              <div className="col-12">
                <span
                  className="iconify"
                  data-icon="bx:bx-wind"
                  data-inline="false"
                ></span>
                <span id="windy">{weatherData.wind}</span> m/s
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row date">
          <div className="col-4">
            <span id="actual-month">month</span>
            <span id="actual-date"> date</span>
          </div>
          <div className="col-4">
            <span id="today">day</span>
          </div>
          <div className="col-4">
            <span id="actual-hour">hour</span>
          </div>
        </div>

        <hr />

        <div className="row weekWeather">
          <div className="col-3">
            <div className="friday">
              <h5 id="day-one">day1</h5>

              <img
                className="cloudy weather-icon"
                src={cloudy}
                alt="cloudy"
                id="img-day1"
              />
              <div>
                <b id="max-1">tempmax1</b>°/ <span id="min-1">tempmin1</span>°
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="saturday">
              <h5 id="day-two">day2</h5>

              <img
                className="cloudy weather-icon"
                src={rain}
                alt="cloudy"
                id="img-day2"
              />
              <div>
                <b id="max-2">tempmax2</b>°/ <span id="min-2">tempmin2</span>°
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="sunday">
              <h5 id="day-three">day3</h5>

              <img
                className="sunny weather-icon"
                src={sunny}
                alt="sunny"
                id="img-day3"
              />
              <div>
                <b id="max-3">tempmax3</b>°/ <span id="min-3">tempmin3</span>°
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="monday">
              <h5 id="day-four">day4</h5>

              <img
                className="cloudy weather-icon"
                src={cloudy}
                alt="cloudy"
                id="img-day4"
              />
              <div>
                <b id="max-4">tempmax4</b>°/ <span id="min-4">tempmin4</span>°
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b016d3139dfb068d018e3bb03da1b5f3";
    let units = "metric";

    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(urlApi).then(handleResponse);

    return "loading...";
  }
}
