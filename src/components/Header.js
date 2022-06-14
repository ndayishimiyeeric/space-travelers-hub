import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Header.module.css';
import logo from './images/logo.png';

function Header() {
  const [active, setActive] = React.useState({
    rocket: true,
    mission: false,
    profile: false,
  });

  const style = {
    borderBottom: '2px solid #344563',
  };

  const setRocket = () => {
    setActive({
      rocket: true,
      mission: false,
      profile: false,
    });
  };

  const setMission = () => {
    setActive({
      rocket: false,
      mission: true,
      profile: false,
    });
  };

  const setProfile = () => {
    setActive({
      rocket: false,
      mission: false,
      profile: true,
    });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logodiv}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <ul className={styles.links}>
        <li>
          <Link
            className={styles.link}
            style={active.rocket ? style : null}
            to="/"
            onClick={setRocket}
          >
            Rockets
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            style={active.mission ? style : null}
            to="/Missions"
            onClick={setMission}
          >
            Missions
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            style={active.profile ? style : null}
            to="/Profile"
            onClick={setProfile}
          >
            My Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
