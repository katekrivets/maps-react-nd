import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import icon from './../img/marker.svg'

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCLgxZfnB0Z_jW23hZqWbpnR4LU9TW9oQ0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap 
  defaultZoom={props.zoom} 
  defaultCenter={props.center}>
    { props.locations[0] && props.locations.map(marker => (
      <Marker icon={icon} 
              key={marker.venue.id} 
              position={{ lat: marker.venue.location.lat, lng: marker.venue.location.lng }} 
      />
    ))}
  </GoogleMap>
));

export default MyMapComponent;
