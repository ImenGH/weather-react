import React from "react";

export default function ActualDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="row date">
      <div className="col-4">
        <span id="actual-month">{month}</span>
        <span id="actual-date"> {date}</span>
      </div>
      <div className="col-4">
        <span id="today">{day}</span>
      </div>
      <div className="col-4">
        <span id="actual-hour">
          {hours}:{minutes}
        </span>
      </div>
    </div>
  );
}
