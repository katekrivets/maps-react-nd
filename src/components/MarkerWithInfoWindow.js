import React from "react";
import {
    Marker,
    InfoWindow
  } from "react-google-maps";
import icon from './../img/marker.svg'

class MarkerWithInfoWindow extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.onToggleOpen = this.onToggleOpen.bind(this);
    }

    onToggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Marker icon={icon} 
                key={this.props.marker.venue.id} 
                position={{ lat: this.props.marker.venue.location.lat, lng: this.props.marker.venue.location.lng }} 
                name={this.props.marker.venue.name}
                address={this.props.marker.venue.location.address}
                id={this.props.marker.venue.id}
                onClick={this.onToggleOpen}
            >
            { this.state.isOpen && 
              <InfoWindow 
                onCloseClick={this.onToggleOpen}>
                    <section>
                        <div className="location-name">{this.props.marker.venue.name}</div>
                        <div className="location-addr">
                            <p>{this.props.marker.venue.location.city}</p>
                            <span>{this.props.marker.venue.location.address},</span>
                            <span>{this.props.marker.venue.location.postalCode}</span>
                        </div>
                    </section>
              </InfoWindow>
            }
          </Marker>
        )
    }
}

export default MarkerWithInfoWindow