import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import SideMenu from './components/SideMenu';
class App extends Component {
  state = {
    map: "",
    key: "DWSRTUBHPKWDGKIQMO0QATTR2I43KYQBZ3TVCQ5NNQ1JF03Q",
    secret: "IU0FZU1DKGWXVBKWP3XR4MQZA3GVCZTEO0WN4EFHX2LNZLIR",
    place: "59.9473,30.2685",
    coordinates: {lat: 59.9473364, lng: 30.2685361},
    zoom: 12,
    locations: [],
    filteredLocations: [],
    error: false,
    menuShown: true
  }
  componentDidMount() {
    this.getAllLocations()
    //GoogleMapsLoader.KEY = 'AIzaSyCLgxZfnB0Z_jW23hZqWbpnR4LU9TW9oQ0';
  }

  searchLocations = (query) => {
    if ( query === undefined || query === '') {
      return;
    }
    const info = {
      key: "DWSRTUBHPKWDGKIQMO0QATTR2I43KYQBZ3TVCQ5NNQ1JF03Q",
      secret: "IU0FZU1DKGWXVBKWP3XR4MQZA3GVCZTEO0WN4EFHX2LNZLIR",
      place: "59.9473,30.2685"
    }
    const {key, secret, place} = info;
    fetch(`https://api.foursquare.com/v2/venues/search?client_id=${key}&client_secret=${secret}&v=20180826&ll=${place}&radius=150000&limit=40&categoryId=4d4b7104d754a06370d81259&query=${query}`)
      .then((resp) => { if(resp) { return resp.json()}} )
      .then((r) => {
        const locations = r.response.venues;
          this.setState({
            filteredLocations: locations
          });
          console.log(this.state.filteredLocations)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getAllLocations() {
    const {key, secret, place} = this.state;
    fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${key}&client_secret=${secret}&v=20180826&ll=${place}&radius=150000&limit=40&categoryId=4d4b7104d754a06370d81259`)
    .then(response => response.json())
    .then(r => {
      const locations = r.response.groups[0].items;
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
                      />}
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

export default App;
