import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';
import styles from './styles/Mission.module.css';

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
    <div className={styles.missionDiv}>
      <div className={styles.heading}>
        <p>Mission Name:</p>
        <p>Description:</p>
        <p>Status:</p>
        <p>Reserve Mission:</p>
      </div>
      { missionElements }
    </div>
  );
};

export default Missions;
