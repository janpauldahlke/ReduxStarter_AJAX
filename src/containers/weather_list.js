import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Sparklines, SparklinesLine } from 'react-sparklines';


class WeatherList extends Component {

  //renders a single row
  renderWeather ( cityData ) {

    const city = cityData.city.name;
    //map all temp in one array
    //one should recalc in °Celsisus here
    // C = K - 273.15)
    const temps = cityData.list.map(weather => weather.main.temp = (weather.main.temp-273.15) );

    console.log(temps);


    return (
      <tr key= { city }>
        <td>{ city }</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="blue"></SparklinesLine>
          </Sparklines>
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
