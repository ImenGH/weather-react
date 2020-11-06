import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metrics");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{props.celsius}</span>
        °C |{" "}
        <a href="/" onClick={convertToFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{fahrenheit()}</span>
        <a href="/" onClick={convertToCelsius}>
          °C
        </a>{" "}
        | °F
      </div>
    );
  }
}
