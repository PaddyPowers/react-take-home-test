import {SET_CURRENT_WEATHER_DATA,SET_FORECAST_WEATHER_DATA, API, FETCH_CURRENT_WEATHER_DATA, FETCH_FORECAST_WEATHER_DATA } from "./types";

export function fetchCurrentWeather() {
  return apiAction({
    url: "https://api.openweathermap.org/data/2.5/weather?q=london&appid=fe68f62a31f0a96b58e2ae5cc4f07fd0&units=metric",
    onSuccess: setCurrentWeatherData,
    onFailure: () => console.log("Error occured loading current Weather"),
    label: FETCH_CURRENT_WEATHER_DATA,
  });
}

export function fetchForecastWeather() {
  return apiAction({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=fe68f62a31f0a96b58e2ae5cc4f07fd0&units=metric",
    onSuccess: setForecastWeatherData,
    onFailure: () => console.log("Error occured loading forecast weather"),
    label: FETCH_FORECAST_WEATHER_DATA,
  });
}

function setCurrentWeatherData(data) {
  return {
    type:SET_CURRENT_WEATHER_DATA,
    payload: data
  };
}

function setForecastWeatherData(data) {
  return {
    type:SET_FORECAST_WEATHER_DATA,
    payload: data
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
