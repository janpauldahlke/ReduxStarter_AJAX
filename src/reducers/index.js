
import { combineReducers } from 'redux';
//import reducer
import WeaterReducer from './reducer_weather.js';

const rootReducer = combineReducers({
  weather: WeaterReducer
});

export default rootReducer;
