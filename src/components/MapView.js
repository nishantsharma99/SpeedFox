// import { useState } from "react";
// import {
//     GoogleMap,
//     LoadScript,
//     Marker,
//     MarkerClusterer
// } from "@react-google-maps/api";
// import '../styling/MapView.css'

// const containerStyle = {
//     width: "100%",
//     height: "90vh",
// };

// const center = {
//     lat: 23.600944,
//     lng: 78.341832,
// };

// export default function MapView({ data }) {
//     data = Object.values(data)
//     const [selectedMarker, setSelectedMarker] = useState("");
//     const [zoomOut, setZoomOut] = useState(5);


//     return (
//         <>

//             <LoadScript googleMapsApiKey="">
//                 {data.length === 8 ?

//                     <GoogleMap
//                         key={Math.random().toString()}
//                         mapContainerStyle={containerStyle}
//                         center={{
//                             lat: data[5].latLngDtl.lat,
//                             lng: data[5].latLngDtl.lng,
//                         }}
//                         zoom={10}>

//                         <Marker
//                             key={Math.random().toString()}
//                             position={{
//                                 lat: data[5].latLngDtl.lat,
//                                 lng: data[5].latLngDtl.lng,
//                             }}
//                             title={data[1]}
//                             label={data[0].toString()}
//                         />
//                     </GoogleMap>

//                     :
//                     <GoogleMap

//                         key={Math.random().toString()}
//                         mapContainerStyle={containerStyle}
//                         center={center}
//                         zoom={zoomOut}>
//                         <MarkerClusterer>
//                             {(clusterer) => (
//                                 < div style={{ maxHeight: '100vh' }} >

//                                     {
//                                         data?.map((item, index) => (
//                                             <Marker
//                                             key={Math.random().toString()}
//                                                 position={{
//                                                     lat: item.gpsDtl.latLngDtl.lat,
//                                                     lng: item.gpsDtl.latLngDtl.lng,
//                                                 }}
//                                                 title={item.vehReg}
//                                                 label={item.veh}
//                                                 onClick={() => setSelectedMarker(item)}
//                                                 clusterer={clusterer}
//                                             />
//                                         ))
//                                     }
//                                 </div>
//                             )}
//                         </MarkerClusterer>
//                     </GoogleMap>

//                 }

//             </LoadScript >

//         </>
//     );
// }

import { useState } from "react";
import {
    GoogleMap,
    LoadScript,
    Marker,
    MarkerClusterer
} from "@react-google-maps/api";
import '../styling/MapView.css'

const containerStyle = {
    width: "100%",
    height: "90vh",
};



export default function MapView({ data, zoomControl }) {
    var center = {
        lat: 23.600944,
        lng: 78.341832,
    }
    data = Object.values(data)
    if (zoomControl === 10 && data.length === 8) {
        center = {
            lat: data[5].latLngDtl.lat,
            lng: data[5].latLngDtl.lng,
        }
    }
    const [selectedMarker, setSelectedMarker] = useState("");


    return (


        <LoadScript key={Math.random().toString()} googleMapsApiKey="">
            <GoogleMap

                key={Math.random().toString()}
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoomControl}
                disableDefaultUI={{zoomLevel: 16,
            latitudeForFocusingMap: 51.4934,
            longitudeForFocusingMap: 0.0098,
            markerLongitude: 51.4934,
            markerLatitude: 0.0098,
            apiKey: '',
            useDefaultUI: false,
            googleMapsMarkerIcon: 'marker icon link'
                    }}>

            {data.length === 8 ?
                <Marker
                    key={Math.random().toString()}
                    position={{
                        lat: data[5].latLngDtl.lat,
                        lng: data[5].latLngDtl.lng,
                    }}
                    title={data[1]}
                    label={data[0].toString()}
                /> :
                <MarkerClusterer key={Math.random().toString()}>
                    {(clusterer) => (
                        < div key={Math.random().toString()} style={{ maxHeight: '100vh' }} >

                            {
                                data?.map((item, index) => (
                                    <Marker
                                        key={Math.random().toString()}
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
                </MarkerClusterer>}
        </GoogleMap>



        </LoadScript >


    );
}