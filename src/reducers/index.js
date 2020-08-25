import {
 SET_CURRENT_WEATHER_DATA,
  API_START,
  API_END,
  FETCH_CURRENT_WEATHER_DATA,
  FETCH_FORECAST_WEATHER_DATA,
  SET_FORECAST_WEATHER_DATA
} from "../actions/types";



export default function(state = {}, action) {
  console.log("action type => ", action.type);
  switch (action.type) {
    case SET_CURRENT_WEATHER_DATA:
        return {...state, currentWeather: action.payload };
    case SET_FORECAST_WEATHER_DATA:
      return {...state, forecastWeather: action.payload };
      case API_START:
        // if (action.payload === FETCH_ARTICLE_DETAILS) {
          return {
            ...state,
            isLoadingData: true
          };
        // }
        break;
      case API_END:
        // if (action.payload === FETCH_ARTICLE_DETAILS) {
          return {
            ...state,
            isLoadingData: false
          };
        // }
      break;
    default:
      return state;
  }
}
