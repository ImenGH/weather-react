import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `the temperature in ${response.data.name} is ${response.data.main.temp}`
    );
  }
  let apiKey = "b016d3139dfb068d018e3bb03da1b5f3";
  let units = "metric";
  let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(urlApi).then(handleResponse);
  return (
    <Loader type="Bars" color="#00BFFF" height={80} width={80} timeout={3000} />
  );
}
