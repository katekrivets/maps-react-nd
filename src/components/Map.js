import React from "react";
import { compose, withProps} from "recompose";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
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
  defaultCenter={props.center}
  onClick={props.closeInfoWindow}
  onError={console.log("Error")}>
    { props.locations[0] && props.locations.map(marker => (
      marker.venue?(
        <Marker icon={icon} 
          tabIndex="1"
          key={marker.venue.id} 
          position={{ lat: marker.venue.location.lat, lng: marker.venue.location.lng }} 
          name={marker.venue.name}
          address={marker.venue.location.address}
          id={marker.venue.id}
          onClick={() => (props.clickMarker(marker))}
          animation={props.chosenMarker.venue? marker.venue.id === props.chosenMarker.venue.id ?1:null : null}
        />):(
        <Marker icon={icon} 
          tabIndex="1"
          key={marker.id} 
          position={{ lat: marker.location.lat, lng: marker.location.lng }} 
          name={marker.name}
          address={marker.location.address}
          id={marker.id}
          onClick={() => (props.clickMarker(marker))}
          animation={marker.id === props.chosenMarker.id?1:null}
        />
        )
      )
    )}
    { props.showInfoWindow && 
          <InfoWindow 
            position={props.markerLoca}
            onCloseClick={props.closeInfoWindow}>
                {props.chosenMarker.venue?
                (<section>
                    <div className="location-name">{props.chosenMarker.venue.name}</div>
                    <div className="location-addr">
                        <p>{props.chosenMarker.venue.location.city}</p>
                        <span>{props.chosenMarker.venue.location.address},</span>
                        <span>{props.chosenMarker.venue.location.postalCode}</span>
                    </div>
                </section>):
                (<section>
                  <div className="location-name">{props.chosenMarker.name}</div>
                  <div className="location-addr">
                      <p>{props.chosenMarker.location.city}</p>
                      <span>{props.chosenMarker.location.address},</span>
                      <span>{props.chosenMarker.location.postalCode}</span>
                  </div>
              </section>)
              }
          </InfoWindow>
        }
  </GoogleMap>
));

export default MyMapComponent;
