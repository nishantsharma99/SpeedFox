import React from 'react'
import {Link} from 'react-router-dom'
import '../styling/navbar.css'

const Searchbar = (props) => {
    // console.log(props.listType, "Searchbar");
    return (
<div className="GTracNavbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" onClick={()=>props.setListType("RUNNING")}>
                                <Link className="nav-link active GTracUnderline" aria-current="page" to="#">Running({props.vehicleMode["RUNNING"]})</Link>
                            </li>
                            <li className="nav-item" onClick={()=>props.setListType("STOPPED")}>
                                <Link className="nav-link active GTracUnderline" aria-current="page" to="#">Idle({props.vehicleMode["STOPPED"]})</Link>
                            </li>
                            <li className="nav-item" onClick={()=>props.setListType("ALL")}>
                                <Link className="nav-link active GTracUnderline" aria-current="page" to="#">All({props.vehicleMode["RUNNING"]+props.vehicleMode["STOPPED"]+props.vehicleMode["NOT WORKING"]})</Link>
                            </li>
                            <li className="nav-item" onClick={()=>props.setListType("POI")}>
                                <Link className="nav-link active GTracUnderline" aria-current="page" to="#">POI({props.vehicleMode["RUNNING"]+props.vehicleMode["STOPPED"]+props.vehicleMode["NOT WORKING"]})</Link>
                            </li>

                        </ul>
                        <form className="d-flex" style={{flexGrow:'0', flexDirection:'row', paddingBottom:'0'}}>
                            <input className="form-control me-2" type="search" placeholder="" aria-label="Search" style={{padding:'0', margin: '2px'}}/>
                                <button className="btn btn-outline-success" type="submit" style={{marginTop: 0}}><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </nav>


        </div>

        
    )
}

export default Searchbar