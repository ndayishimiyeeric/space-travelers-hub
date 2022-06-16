import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';
import styles from './styles/Missions.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.mission);
  const missionElements = missions.map((mission) => (
    <Mission
      key={mission.id}
      id={mission.id}
      missionName={mission.mission_name}
      description={mission.description}
      active={mission.active}
    />
  ));

  return (
    <>
      <p className={styles.header}>Mission Name</p>
      <p className={styles.header}>Description</p>
      <p className={styles.header}>Status</p>
      <p className={styles.header}>Active</p>

      { missionElements }
    </>
  );
};

export default Missions;
