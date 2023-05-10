import React, { useState, useEffect } from 'react';
import axios from "axios";
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Card from './Card';
import GoogleMaps from './GoogleMaps';
import MapView from './MapView';


const vehicleMode = { "RUNNING": 0, "STOPPED": 0, "NOT WORKING": 0 }


const DashboardView = () => {
    const url = "http://gtrac.in:8080/trackingdashboard/getListVehicles?token=53096";

    const [data, setData] = useState([]);
    const [listType, setListType] = useState("RUNNING")
    const [listData, setListData] = useState([])
    const [mapData, setMapData] = useState([])
    const [single, setSingle] = useState([])
    const [a,setA]=useState(false)

    const getData = () => {
        axios.get(url)
            .then((res) => {
                setData(Object.values(res.data.list));
                res.data.list.map((item) => {
                    // console.log(item.gpsDtl.mode)
                    vehicleMode[item.gpsDtl.mode]++;
                    // console.log(vehicleMode["RUNNING"], typeof(vehicleMode))
                })
                setListData(Object.values(res.data.list.filter(item => item.gpsDtl.mode === "RUNNING")))
                setMapData(Object.values(res.data.list.filter(item => item.gpsDtl.mode === "RUNNING")))

                // console.log(mapData, listData)
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const handleMapClick = (item) => {
        setSingle(item)
        setA(!a)

    }
    useEffect(() => {
        document.title = "Home";
        getData();

    }, []);

    useEffect(() => {

        // console.log('useEffect ran');
        // console.log(listData,"BEFORE")
        setListData(Object.values(data?.filter((item) => {
            if (listType === "RUNNING" || listType === "STOPPED")
                return item.gpsDtl.mode === listType
            else
                return item
        })))
        setMapData(Object.values(data?.filter((item) => {
            if (listType === "RUNNING" || listType === "STOPPED")
                return item.gpsDtl.mode === listType
            else
                return item
        })))
        // setTimeout(() => {
        //     console.log(listData,"AFTER")
        //   }, "1000");


    }, [listType]);

    useEffect(() => {
        if (!a && Object.values(single).length === 8 && single.vId===mapData.vId) {
            setMapData(Object.values(data?.filter((item) => {
                if (listType === "RUNNING" || listType === "STOPPED")
                    return item.gpsDtl.mode === listType
                else
                    return item
            })))

        } else {

            setMapData(single)
        }
    }, [single, a])

    // console.log(vehicleMode)


    // console.log(data, typeof (data));

    return (
        <>
            <Navbar key={Math.random()} />
            <Sidebar key={Math.random()} />
            <Searchbar key={Math.random()} vehicleMode={vehicleMode} listType={listType} setListType={setListType} />

            <div key={Math.random().toString()} style={{ display: 'flex', maxHeight: '70vh' }}>
                <div key={Math.random().toString()} style={{ justifyContent: 'center', alignItems: 'center', fontSize: '10px', marginLeft: '80px' }}>
                    <div key={Math.random().toString()} style={{ maxHeight: '90vh', maxWidth: '27rem', overflowY: 'scroll' }}>
                        {listData?.map((item) => (
                            <div key={Math.random().toString()} onClick={() => { handleMapClick(item) }}>
                                <Card key={(Math.random() * 10).toString()} data={item} />
                                <hr key={Math.random().toString()} style={{ margin: '0' }} />
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ width: '100%', height: '90vh', lineHeight: '0' }}>

                    {/* <GoogleMaps key={Math.random()} /> */}
                    <MapView data={mapData} />
                </div>

            </div>
        </>
    )
}

export default DashboardView


