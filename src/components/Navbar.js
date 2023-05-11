import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/navbar.css'

const Navbar = () => {
  return (
    <div className="GTracNavbar" style={{ padding: '3px', marginBottom: '2px', borderBottom: '1px solid grey' }}>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img className="navbar-brand GTracNavbarImg" alt="" src="./GTrac.png"></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">itgt</Link>
              </li>
              <li className="nav-item dropdown GTracLogout"><button className="dropdown-item logout" style={{ marginTop: 0 }}><i
                className="fas fa-sign-out-alt"></i> Logout</button></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar