import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/planet.png';

function Navbar() {
  return (
    <nav>
      <div className="logo-holder">
        <img src={logo} alt="logo" className="logo" />
        <h1>Space Travellers&apos; Hub</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/rockets">Rockets</Link>
        </li>
        <li>
          <Link to="/missions">Missions</Link>
        </li>
        <li>
          <Link to="/my-profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
