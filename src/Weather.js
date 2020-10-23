import React from "react";

import cloudy from "./images/cloudy.svg";
import sunny from "./images/sunny.svg";
import rain from "./images/rain.svg";
import snow from "./images/snow.svg";

export default function Weather() {
  return (
    <div className="box-wrap">
      <form id="real-city" className="mb-2">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              id="city-input"
              autocomplete="off"
              autofocus="on"
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
            <h1 id="city"></h1>
            <h4 id="visibility"></h4>
            <br />
            <div>
              <span className="temperature" id="temp"></span>
              <a href="#" id="celsius" className="active">
                °C
              </a>{" "}
              |
              <a href="#" id="fahrenheit">
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
              <span id="humidity"></span> %
            </div>

            <div className="col-12">
              <span
                className="iconify"
                data-icon="bx:bx-wind"
                data-inline="false"
              ></span>
              <span id="windy"></span> m/s
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row date">
        <div className="col-4">
          <span id="actual-month"></span>
          <span id="actual-date"> </span>
        </div>
        <div className="col-4">
          <span id="today"></span>
        </div>
        <div className="col-4">
          <span id="actual-hour"></span>
        </div>
      </div>

      <hr />

      <div className="row weekWeather">
        <div className="col-3">
          <div className="friday">
            <h5 id="day-one"></h5>

            <img
              className="cloudy weather-icon"
              src={cloudy}
              alt="cloudy"
              id="img-day1"
            />
            <div>
              <b id="max-1"></b>°/ <span id="min-1"></span>°
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="saturday">
            <h5 id="day-two"></h5>

            <img
              className="cloudy weather-icon"
              src={cloudy}
              alt="cloudy"
              id="img-day2"
            />
            <div>
              <b id="max-2"></b>°/ <span id="min-2"></span>°
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="sunday">
            <h5 id="day-three"></h5>

            <img
              className="sunny weather-icon"
              src={sunny}
              alt="sunny"
              id="img-day3"
            />
            <div>
              <b id="max-3"></b>°/ <span id="min-3"></span>°
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="monday">
            <h5 id="day-four"></h5>

            <img
              className="cloudy weather-icon"
              src={cloudy}
              alt="cloudy"
              id="img-day4"
            />
            <div>
              <b id="max-4"></b>°/ <span id="min-4"></span>°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
