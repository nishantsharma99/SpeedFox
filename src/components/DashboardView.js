import React, { useState, useEffect } from 'react';
import axios from "axios";
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Card from './Card';
import MapView from './MapView';

const vehicleMode = { "RUNNING": 0, "STOPPED": 0, "NOT WORKING": 0 }


const DashboardView = () => {
    const url = "http://gtrac.in:8080/trackingdashboard/getListVehicles?token=53096";
const [a1,setA1]=useState(0)
    const [data, setData] = useState([]);
    const [listType, setListType] = useState("RUNNING")
    const [listData, setListData] = useState([])
    const [mapData, setMapData] = useState([])
    const [single, setSingle] = useState([])
    const [a, setA] = useState(false)
    var widthOnA = a ? ('100%') : ('0%')
    var zoomControl = a ? 10 : 5
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
        if (single.length === 0) {
            setA(!a)
            setSingle(item)
            
        }
        else if (a && Object.values(single).length === 8)
            if (single.vId === item.vId) {

                setA(!a)

                setSingle([])
                return
            }
        setSingle(item)

    }
    useEffect(() => {
        document.title = "Home";
        getData();

    }, []);

    useEffect(() => {
        if (Object.values(single).length === 8) {
            setA(!a)
            setSingle([])
            
        }
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



    }, [listType]);

    useEffect(() => {
        if (a && Object.values(single).length === 8 ){
            setMapData(single)
        } else if (Object.values(single).length === 0) {
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

    return (
        <>
            <Navbar key={Math.random()} />
            <Sidebar key={Math.random()} />
            <Searchbar key={Math.random()} vehicleMode={vehicleMode} listType={listType} setListType={setListType} a1={a1} setA1={setA1} />

            <div key={Math.random().toString()} style={{ display: 'flex', maxHeight: '70vh' }}>
                <div key={Math.random().toString()} style={{ justifyContent: 'center', alignItems: 'center', width: '40%', fontSize: '10px', marginLeft: '80px' }}>
                    <div key={Math.random().toString()} style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
                        {listData?.map((item) => (
                            <div key={Math.random().toString()} onClick={() => { handleMapClick(item) }}>
                                <Card key={(Math.random() * 10).toString()} data={item} />
                                <hr key={Math.random().toString()} style={{ margin: '0' }} />
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ display: 'flex', height: '90vh', width: '60%' }}>
                    <div key={(Math.random() * 10).toString()} style={{ background: "#fff", width: widthOnA, height: '90vh', lineHeight: '0' }}>
                        {a ? <Card key={(Math.random() * 10).toString()} data={single} /> : <></>}

                    </div>


                    <div key={(Math.random() * 10).toString()} style={{ width: '100%', height: '90vh', lineHeight: '0' }}>
                        <MapView key={(Math.random() * 10).toString()} data={mapData} zoomControl={zoomControl} />
                    </div>
                </div>


            </div>
        </>
    )
}

export default DashboardView


