import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import SideMenu from './components/SideMenu';
import { getLocations, searchLoca } from './LocationsApi';
class App extends Component {
  state = {
    map: "",
    coordinates: {lat: 59.9473364, lng: 30.2685361},
    zoom: 12,
    locations: [],
    filteredLocations: [],
    error: false,
    menuShown: true,
    clickedMarker: {}
  }
  componentDidMount() {
    this.getAllLocations()
    //GoogleMapsLoader.KEY = 'AIzaSyCLgxZfnB0Z_jW23hZqWbpnR4LU9TW9oQ0';

  }
  searchLocations = (query) => {
    searchLoca(query)
    .then(r => {
      const locations = r.response.venues;
          this.setState({
            filteredLocations: locations
          });
      })
      .catch(err => this.setState({error: err}))
  }
  onMapClick = () => {
    this.setState({
      showInfoWindow: false
    });
  }
  getAllLocations() {
    getLocations()
    .then(r => {
      const locations = r.response.groups[0].items;
      this.setState({
          locations: locations,
          filteredLocations: locations
      });
    })
    .catch(err => this.setState({error: err}))
  }
  hideSideMenu = () => {
    this.setState(this.state.menuShown?{menuShown: false}:{menuShown:true})
  }
  render() {
    return (
      <div className="container">
        <header>
          <div className="burger-menu" onClick={this.hideSideMenu}></div>
          <div className="github-link"></div>
        </header>
        <main>
          { this.state.menuShown && 
                    <SideMenu 
                      searchLocations={this.searchLocations}
                      filteredLocations={this.state.filteredLocations}
                      >
                    </SideMenu> }
          <div className="map-container">
            <Map 
              center={this.state.coordinates} 
              zoom={this.state.zoom} 
              locations={this.state.locations}
            />  
          </div>
        </main>
      </div>
    );
  } 
}

// ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
export default App;
