import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';

class App extends Component {
  state = {
    map: "",
    coordinates: {lat: 59.9473364, lng: 30.2685361},
    zoom: 12,
    locations: [],
    filteredLocations: [],
    error: false
  }
  componentDidMount() {
    this.getAllLocations()
    //GoogleMapsLoader.KEY = 'AIzaSyCLgxZfnB0Z_jW23hZqWbpnR4LU9TW9oQ0';

  }
  getAllLocations() {
    const key = "DWSRTUBHPKWDGKIQMO0QATTR2I43KYQBZ3TVCQ5NNQ1JF03Q";
    const secret = "IU0FZU1DKGWXVBKWP3XR4MQZA3GVCZTEO0WN4EFHX2LNZLIR";
    const place = "59.9473,30.2685"
    fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${key}&client_secret=${secret}&v=20180323&ll=${place}&radius=6000&limit=36&categoryId=4d4b7104d754a06370d81259`)
    .then(response => response.json())
    .then(r => {
      const locations = r.response.groups[0].items;
      console.log(r.response.groups[0].items)
        this.setState({
          locations: locations,
          filteredLocations: locations
        });
    })
    .catch((error) => {
      console.log(error);
      this.setState({ error: true });
    });
  }
  render() {
    return (
      <Map center={this.state.coordinates} zoom={this.state.zoom} locations={this.state.filteredLocations}/>
    );
  } 
}

// ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
export default App;
