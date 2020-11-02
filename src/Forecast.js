import React from "react";
import cloudy from "./images/cloudy.svg";
import sunny from "./images/sunny.svg";
import rain from "./images/rain.svg";

export default function Forecast() {
  return (
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
  );
}
