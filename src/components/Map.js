import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 51.5108, lng: -0.13137 }}>
      <Marker position={{ lat: 51.5108, lng: -0.13137 }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div className="map_container col-10 offset-md-1 col-md-8 offset-md-2">
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD7VRnojeVMloiD6fgT0nkWAnrdbwqahBE"
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
