import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Header.module.css';
import logo from './images/logo.png';

function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logodiv}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <ul className={styles.links}>
        <li><Link to="/">Rockets</Link></li>
        <li><Link to="/Missions">Missions</Link></li>
        <li><Link to="/Profile">My Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
