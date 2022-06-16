import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import styles from './styles/Rockets.module.css';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const rocketElements = rockets.map((rocket) => (
    <Rocket
      key={rocket.id}
      id={rocket.id}
      img={rocket.img}
      description={rocket.description}
      title={rocket.rocket_name}
      active={rocket.active}
    />
  ));
  return (
    <div className={styles.rocketsDiv}>
      { rocketElements }
    </div>
  );
}

export default Rockets;
