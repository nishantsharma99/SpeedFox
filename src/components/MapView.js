import { useState, useEffect } from "react";
import {
    GoogleMap,
    LoadScript,
    Marker,
    MarkerClusterer,
    InfoWindow,
} from "@react-google-maps/api";
import '../styling/MapView.css'

import { useNavigate, useLocation } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@mui/material";

const containerStyle = {
    width: "100%",
    height: "90vh",
};

const center = {
    lat: 23.600944,
    lng: 78.341832,
};

const styles = {
    key: {
        fontSize: "12px",
        fontWeight: 800,
        color: "#FD6A02",
        paddingBottom: "7px",
    },

    values: {
        fontWeight: 500,
        color: "#303030",
    },
};

export default function MapView({ data }) {
    data= Object.values(data)
    // console.log(data,typeof(data))
    const [selectedMarker, setSelectedMarker] = useState("");
    const [zoomOut, setZoomOut] = useState(5);


    return (
        <>

            <LoadScript googleMapsApiKey="">
                {data.length === 8 ?
                    
                    
                        <GoogleMap
                        key={Math.random().toString()}
                        mapContainerStyle={containerStyle}
                        center={{
                            lat: data[5].latLngDtl.lat,
                            lng: data[5].latLngDtl.lng,
                        }}
                        zoom={10}>

                        <Marker
                            key={Math.random().toString()}
                            position={{
                                lat: data[5].latLngDtl.lat,
                                lng: data[5].latLngDtl.lng,
                            }}
                            title={data[1]}
                            label={data[0].toString()}
                            // onClick={() => setSelectedMarker(item)}
                        />
                    </GoogleMap>
                
                    :
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={zoomOut}>
                        <MarkerClusterer>
                            {(clusterer) => (
                                < div style={{ maxHeight: '100vh' }} >

                                    {
                                        data?.map((item, index) => (
                                            <Marker
                                                key={index}
                                                position={{
                                                    lat: item.gpsDtl.latLngDtl.lat,
                                                    lng: item.gpsDtl.latLngDtl.lng,
                                                }}
                                                title={item.vehReg}
                                                label={item.veh}
                                                onClick={() => setSelectedMarker(item)}
                                                clusterer={clusterer}
                                            />
                                        ))
                                    }
                                </div>
                            )}
                        </MarkerClusterer>
                    </GoogleMap>

                }

            </LoadScript >
         
        </>
    );
}