import React from 'react'
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import './navBarStyle.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <a className="navbar-brand text-light" href="#">CRUD</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Home" className="nav-link text-light" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Users" className="nav-link text-light" >Users</Link>
            </li>
            <li className="nav-item">
              <Link to="/Products" className="nav-link text-light" >Products</Link>
            </li>
          </ul>
          <div className="d-flex userContainer">
            <p className='userName'>User name</p>
            <FiUser className='userIcon' size={25}/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;