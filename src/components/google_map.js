import React, { Component } from 'react';


//glimpse how to bring 3rd party tools to react, componentDidMount
class GoogleMap extends Component {

    componentDidMount(){
      //this.refs.map = attribute ref="map" on the div, to pass args there
      new google.maps.Map(this.refs.map, {
        zoom: 12,
        center: {
          lat: this.props.lat,
          lng: this.props.lon
        }
      });
    }

    render(){
    return (
      <div ref="map"></div>
    )
  }
}


export default GoogleMap;
