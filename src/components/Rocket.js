import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { reserve } from '../redux/rockets/rockets';
import styles from './styles/Rocket.module.css';

function Rocket(props) {
  const {
    title, description, img, active, id,
  } = props;

  const dispatch = useDispatch();
  const handleReserve = (id) => {
    dispatch(reserve(id));
  };

  return (
    <div className={styles.rocket}>
      <div className={styles.image}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>
          {active && <span className={styles.reserved}>Reserved</span>}
          {description}
        </p>
        <button
          type="button"
          className={active ? styles.btnActive : styles.btnLocked}
          onClick={() => handleReserve(id)}
        >
          {active ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
}

export default Rocket;

Rocket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
