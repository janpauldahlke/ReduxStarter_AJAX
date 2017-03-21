import axios from 'axois';


const API_KEY = '99c1bb4595b0ddfe1e5bc12f0b988b3a';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=';
const ROOT_URL = BASE_URL + API_KEY;

/*
  flow
  action
  middleware:changes actions=gatekeeper to the reducers
  reducer
  to do so
  npm install --save redux-promise
*/

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( city ) {
  //final url string
  //countrycode!!
  //https://en.wikipedia.org/wiki/ISO_3166-1
  //default is germany
  const url = `${ROOT_URL}&q=${city},DEU`;

  //AJAX
  //npm install --save axios
  const request = axios.get(url);

  //actions return actions as object, that ALWAYS has a type
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
