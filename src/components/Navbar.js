import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import style from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.logoHolder}>
        <img src={logo} alt="logo" className={style.logo} />
        <h1>Space Travellers&apos; Hub</h1>
      </div>
      <ul className={style.navLinks}>
        <li>
          <NavLink to="/rockets" className={style.links}>Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions" className={style.links}>Missions</NavLink>
        </li>
        <li>
          <NavLink to="/my-profile" className={style.links}>My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
