import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';

class App extends Component {
  state = {
    map: "",
    coordinates: {lat: 59.9473364, lng: 30.2685361},
    zoom: 12,
    locations: []
  }
  componentDidMount() {
    this.getAllLocations()
    //GoogleMapsLoader.KEY = 'AIzaSyCLgxZfnB0Z_jW23hZqWbpnR4LU9TW9oQ0';

  }
  getAllLocations() {
    fetch('locations.json').then((resp) => {
      console.log(resp)
    }).then(data => {console.log(data)});
  }
  render() {
    return (
      <Map center={this.state.coordinates} zoom={this.state.zoom}/>
    );
  } 
}

// ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
export default App;
