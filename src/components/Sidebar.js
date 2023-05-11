import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styling/sidebar.css'

const Sidebar = () => {

    const [sidebarOpen, setSidebarOpen] = useState('');
    const [menuOpen, setMenuOpen] = useState('bx-menu')

    const cb = () => {
        if (sidebarOpen === '') {
            setSidebarOpen('open')
            setMenuOpen('bx-menu-alt-right')
        } else {

            setSidebarOpen('')
            setMenuOpen('bx-menu')
        }
    }

    return (
        <div className={`sidebar ${sidebarOpen}`}>
            <div className="logo_details">
                <img className="icon" alt="" src="./GTrac.png"></img>
                <div className="logo_name">ITG Telematics</div>
                <i className={`bx ${menuOpen}`} onMouseEnter={cb} id="btn"></i>
            </div>
            <ul className="nav-list">
                <li>
                    <Link to="#">
                        <i className="bx bx-grid-alt"></i>
                        <span className="link_name">Dashboard</span>
                    </Link>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <Link to="#">
                        <i className="bx bx-user"></i>
                        <span className="link_name">Vehicles</span>
                    </Link>
                    <span className="tooltip">Vehicles</span>
                </li>
                <li>
                    <Link to="#">
                        <i className="bx bx-chat"></i>
                        <span className="link_name">Plan</span>
                    </Link>
                    <span className="tooltip">Plan</span>
                </li>
                <li>
                    <Link to="#">
                        <i className="bx bx-pie-chart-alt-2"></i>
                        <span className="link_name">Trips</span>
                    </Link>
                    <span className="tooltip">Trips</span>
                </li>
                <li>
                    <Link to="#">
                        <i className="bx bx-cog"></i>
                        <span className="link_name">Settings</span>
                    </Link>
                    <span className="tooltip">Settings</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar