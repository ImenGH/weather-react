import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row currentWeather">
        <div className="col-4">
          <div className="clearfix">
            <h1 id="city">{props.data.city}</h1>
            <h4 id="visibility" className="text-capitalize">
              {props.data.description}
            </h4>
            <br />
            <div>
              <span className="temperature" id="temp">
                {props.data.temperature}
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
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="climat"
          ></img>
        </div>

        <div className="col-4">
          <div className="row precipitation">
            <div className="col-12">
              <span
                className="iconify"
                data-icon="wi-humidity"
                data-inline="false"
              ></span>
              <span id="humidity">{props.data.humidity}</span> %
            </div>

            <div className="col-12">
              <span
                className="iconify"
                data-icon="bx:bx-wind"
                data-inline="false"
              ></span>
              <span id="windy">{props.data.wind}</span> m/s
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
