import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCLgxZfnB0Z_jW23hZqWbpnR4LU9TW9oQ0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
    { props.locations[0] && props.locations.map(marker => (
      <Marker key={marker.venue.id} position={{ lat: marker.venue.location.lat, lng: marker.venue.location.lng }} />
    ))}
    {/* {props.locations[0] && console.log(props.locations[0].venue.location.lat)} */}
  </GoogleMap>
));

export default MyMapComponent;
