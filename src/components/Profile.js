import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles/Profile.module.css';

function Profile() {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.mission);
  const rocketElement = rockets.map((rocket) => (
    rocket.active === true ? <li className={styles.element}>{rocket.rocket_name}</li> : null));
  const missionElement = missions.map((mission) => (
    mission.active === true ? <li className={styles.element}>{mission.mission_name}</li> : null
  ));
  return (
    <div className={styles.profileDiv}>
      <div className={styles.left}>
        <h4>My Missions</h4>
        <ul className={styles.elements}>
          { missionElement }
        </ul>
      </div>
      <div className={styles.right}>
        <h4>My Rockets</h4>
        <ul className={styles.elements}>
          { rocketElement }
        </ul>
      </div>
    </div>
  );
}

export default Profile;
