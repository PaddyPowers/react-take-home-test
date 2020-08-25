import {
 SET_CURRENT_WEATHER_DATA,
  API_START,
  API_END,
  FETCH_CURRENT_WEATHER_DATA,
  FETCH_FORECAST_WEATHER_DATA,
  SET_FORECAST_WEATHER_DATA,
  START_TIMER,
  TICK,
  RESET_TIMER
} from "../actions/types";

const initialState = {
  seconds: 0,
  start_time : 0,
  status: 'paused',
  decrement_interval: 0
}


export default function(state = initialState, action) {
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
      case START_TIMER :
        return {
          ...state,
          start_time : action.start_time,
          seconds : action.start_time,
        };
        case RESET_TIMER :
          return {
            ...state,
            start_time : action.start_time,
            seconds : state.start_time,
          };
      case TICK :
        return {
          ...state,
          seconds: (state.seconds - .01).toFixed(2)
        };
    default:
      return state;
  }
}
