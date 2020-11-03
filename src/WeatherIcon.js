import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon() {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="#ff6372"
      size={100}
      animate={true}
    />
  );
}
