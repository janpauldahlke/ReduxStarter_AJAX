import React, { Component } from 'react';

import { connect } from 'react-redux';

import Chart from '../components/chart';




class WeatherList extends Component {

  //renders a single row
  renderWeather ( cityData ) {

    const city = cityData.city.name;
    //map all temp in one array
    //one should recalc in °Celsisus here
    // C = K - 273.15)
    const temps = cityData.list.map(weather => weather.main.temp = (weather.main.temp-273.15) );
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    console.log(temps);

    //TODO
    //break up re-used Sparklines in multicompnent
    //toprevent repeating here

    return (
      <tr key= { city }>
        <td>{ city }</td>
        <td>
          <Chart data={ temps } color="orange"/>
        </td>
        <td>
          <Chart data={ pressure } color="green" />
        </td>
        <td>
          <Chart data={ humidity } color="black" />
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
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
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
