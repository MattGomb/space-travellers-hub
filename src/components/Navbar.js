import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-holder">
        <img src={logo} alt="logo" className="logo" />
        <h1>Space Travellers&apos; Hub</h1>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/rockets">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/my-profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
