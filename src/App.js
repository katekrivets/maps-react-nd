import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import SideMenu from './components/SideMenu';
import { getLocations, searchLoca } from './LocationsApi';
import Modal from 'react-responsive-modal';
class App extends Component {
  state = {
    map: "",
    coordinates: {
      lat: 59.9473364,
      lng: 30.2685361
    },
    zoom: 12,
    locations: [],
    filteredLocations: [],
    error: "Something went wrong while fetching locations :(",
    menuShown: true,
    showInfoWindow: false,
    chosenMarker: {},
    markerLoca: {},
    modalOpen: false
  }
  onOpenModal = () => {
    this.setState({ modalOpen: true });
  };

  onCloseModal = () => {
    this.setState({ modalOpen: false });
  };
  componentDidMount() {
    this.getAllLocations()
  }
  searchLocations = (query) => {
    searchLoca(query)
      .then(r => {
        const locations = r.response.venues;
        this.setState({
          filteredLocations: locations
        });
      })
      .catch(err => {
      console.log(err)
      this.onOpenModal()})
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
      .catch(err => {
        
        console.log(err)
      this.onOpenModal()})
  }
  hideSideMenu = () => {
    this.setState(this.state.menuShown ? {
      menuShown: false
    } : {
      menuShown: true
    })
  }

  clickMarker = (marker) => {
    console.log(marker)
    this.setState({
      showInfoWindow: true,
      chosenMarker: marker,
      markerLoca: marker.venue ? {
        lat: marker.venue.location.lat,
        lng: marker.venue.location.lng
      } : {
        lat: marker.location.lat,
        lng: marker.location.lng
      }
    })
  }

  clickkBox = (loca) => {
    console.log(loca)
    this.setState({
      chosenMarker: loca,
      showInfoWindow: true,
      markerLoca: loca.venue ? {
        lat: loca.venue.location.lat,
        lng: loca.venue.location.lng
      } : {
        lat: loca.location.lat,
        lng: loca.location.lng
      }
    })
  }

  closeInfoWindow = () => {
    this.setState({
      chosenMarker: {},
      showInfoWindow: false,
      markerLoca: {}
    })
  }
  render() {
    return (
      <div className="container">
        <header>
          <div className="burger-menu" onClick={this.hideSideMenu}></div>
          <div className="github-link"><a href="https://github.com/katerren">GitHub</a></div>
        </header>
        <main>
          { this.state.menuShown && 
            <SideMenu 
              searchLocations={this.searchLocations}
              filteredLocations={this.state.filteredLocations}
              clickkBox={this.clickkBox}
              >
            </SideMenu> }
          <div className="map-container">
            <Map 
              center={this.state.coordinates} 
              zoom={this.state.zoom} 
              locations={this.state.filteredLocations}
              showInfoWindow={this.state.showInfoWindow}
              chosenMarker={this.state.chosenMarker}
              clickMarker={this.clickMarker}
              closeInfoWindow={this.closeInfoWindow}
              markerLoca={this.state.markerLoca}
            />  
            <Modal open={this.state.modalOpen} onClose={this.onCloseModal} center>
              <h3>{this.state.error}</h3>
            </Modal>
          </div>
        </main>
      </div>
    );
  } 
}

export default App;
