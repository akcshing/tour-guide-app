import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';


const NavBar = (props) => {
  return (
    <header className="navbar-header">
      <ul>
        <li className="navLink">
          <Link to="/">Home</Link>
        </li>
        <li className="navLink">
          <Link to="/bookings">Bookings</Link>
        </li>
        <li className="navLink">
          <Link to="/bookings/new">Create Booking</Link>
        </li>
        <li className="navLink">
          <Link to="/attractions">Attractions</Link>
        </li>
        <li className="navLink">
          <Link to="/customers" >Customers</Link>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
