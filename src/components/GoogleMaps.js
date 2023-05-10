import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const GoogleMaps=()=> {
  return (
    <>
    <LoadScript
      googleMapsApiKey=""
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
            lat: 20.5937,
            lng:  78.9629
          }}
        zoom={5}
      >
      </GoogleMap>
    </LoadScript>
    </>
  )
}

export default GoogleMaps