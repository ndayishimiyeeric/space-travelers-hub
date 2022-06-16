import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserve } from '../redux/missions/missions';
import styles from './styles/Missions.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  const handleReserve = (id) => {
    dispatch(reserve(id));
  };
  const missionElements = missions.map((mission) => (
    <tr key={mission.id}>
      <td className={styles.name}>{ mission.mission_name }</td>
      <td className={styles.desc}>{ mission.description }</td>
      <td className={styles.statusSpace}><span className={mission.active ? styles.cardTOpen : styles.cardT}>{ mission.active ? 'Active Member' : 'NOT A MEMBER' }</span></td>
      <td className={styles.buttonSpace}>
        <button
          type="button"
          className={mission.active ? styles.btnOpen : styles.btnClosed}
          onClick={() => handleReserve(mission.id)}
        >
          { mission.active ? 'Leave Mission' : 'Join Mission' }
        </button>
      </td>
    </tr>
  ));

  return (
    <div className={styles.mainDiv}>
      <table>
        <thead className={styles.headers}>
          <tr>
            <th className={styles.name}>Mission</th>
            <th className={styles.desc}>Description</th>
            <th className={styles.statusSpace}>Status</th>
            <th className={styles.buttonSpace}>{}</th>
          </tr>
        </thead>
        <tbody>
          {missionElements}
        </tbody>
      </table>

    </div>
  );
};

export default Missions;
