import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/' className="navbar-brand" style={{ color: 'white' }}>Todo's List</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mr-2" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: 'white' }} to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar