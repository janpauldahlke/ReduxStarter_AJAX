import React, { Component } from 'react';

import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

import _ from 'lodash';


//TODO
/*
  add google maps previewn instead of city name
  create new component to achieve this

  create a new component google_map.js
*/

class WeatherList extends Component {

  //renders a single row
  renderWeather ( cityData ) {

    const city = cityData.city.name;
    //map all temp in one array
    //one should recalc in °Celsisus here
    // C = K - 273.15)
    //theseleads into an error, if called multiple times
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    //const lon = cityData.city.coord.lon;
    //const lat = cityData.city.coord.lat;
    //now the ES6 way
    const { lon, lat } = cityData.city.coord;

    console.log(temps);

    //TODO
    //break up re-used Sparklines in multicompnent
    //toprevent repeating here

    return (
      <tr key= { city }>
        <td>
          <GoogleMap lon={ lon } lat={ lat }/>
        </td>
        <td>
          <Chart data={ temps } color="orange" units="°C"/>
        </td>
        <td>
          <Chart data={ pressure } color="green" units="hPA" />
        </td>
        <td>
          <Chart data={ humidity } color="black" units="%"/>
        </td>
      </tr>
    );
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature in (°C)</th>
          <th>Pressure in (hPA)</th>
          <th>Humidity in (%)</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

//connect to get data
/*
  condense this to es6
*/

function mapStateToProps ({ weather }) {
  return { weather }; // { weather } === { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
