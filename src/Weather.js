import React from "react";
import "./Weather.css";

import cloudy from "./images/cloudy.svg";
import sunny from "./images/sunny.svg";
import rain from "./images/rain.svg";

export default function Weather(props) {
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
            <h1 id="city">{props.city}</h1>
            <h4 id="visibility">{props.description}</h4>
            <br />
            <div>
              <span className="temperature" id="temp">
                {props.temperature}
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
          <i className="fas fa-circle" id="climat"></i>
        </div>

        <div className="col-4">
          <div className="row precipitation">
            <div className="col-12">
              <span
                className="iconify"
                data-icon="wi-humidity"
                data-inline="false"
              ></span>
              <span id="humidity">{props.humidity}</span> %
            </div>

            <div className="col-12">
              <span
                className="iconify"
                data-icon="bx:bx-wind"
                data-inline="false"
              ></span>
              <span id="windy">{props.wind}</span> m/s
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row date">
        <div className="col-4">
          <span id="actual-month">{props.month}</span>
          <span id="actual-date"> {props.date}</span>
        </div>
        <div className="col-4">
          <span id="today">{props.day}</span>
        </div>
        <div className="col-4">
          <span id="actual-hour">{props.hour}</span>
        </div>
      </div>

      <hr />

      <div className="row weekWeather">
        <div className="col-3">
          <div className="friday">
            <h5 id="day-one">{props.day1}</h5>

            <img
              className="cloudy weather-icon"
              src={cloudy}
              alt="cloudy"
              id="img-day1"
            />
            <div>
              <b id="max-1">{props.tempmax1}</b>°/{" "}
              <span id="min-1">{props.tempmin1}</span>°
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="saturday">
            <h5 id="day-two">{props.day2}</h5>

            <img
              className="cloudy weather-icon"
              src={rain}
              alt="cloudy"
              id="img-day2"
            />
            <div>
              <b id="max-2">{props.tempmax2}</b>°/{" "}
              <span id="min-2">{props.tempmin2}</span>°
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="sunday">
            <h5 id="day-three">{props.day3}</h5>

            <img
              className="sunny weather-icon"
              src={sunny}
              alt="sunny"
              id="img-day3"
            />
            <div>
              <b id="max-3">{props.tempmax3}</b>°/{" "}
              <span id="min-3">{props.tempmin3}</span>°
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="monday">
            <h5 id="day-four">{props.day4}</h5>

            <img
              className="cloudy weather-icon"
              src={cloudy}
              alt="cloudy"
              id="img-day4"
            />
            <div>
              <b id="max-4">{props.tempmax4}</b>°/{" "}
              <span id="min-4">{props.tempmin4}</span>°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
