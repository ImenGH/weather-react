import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <WeatherIcon code={props.data.icon} />
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
