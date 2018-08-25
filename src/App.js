import React, { Component } from 'react';
import GoogleMapsLoader from "google-maps";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: ""
    }
  }
  componentDidMount() {
    GoogleMapsLoader.load(function(google) {
      new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom: 13,
        mapTypeControl: false
      });
    })
    GoogleMapsLoader.KEY = 'AIzaSyCLgxZfnB0Z_jW23hZqWbpnR4LU9TW9oQ0';

  }
  render() {
    return (
      <div className="map"></div>
    );
  }
}

// ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
export default App;
