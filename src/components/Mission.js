import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserve } from '../redux/missions/missions';
import styles from './styles/Mission.module.css';

const Mission = (props) => {
  const {
    id, missionName, description, active,
  } = props;

  const dispatch = useDispatch();
  const handleReserve = (id) => {
    dispatch(reserve(id));
  };

  return (
    <>

      <div className={styles.mission_body}>
        <p>{ missionName }</p>
        <p>{ description }</p>
        <span>{ active ? 'Active Member' : 'Not A Member' }</span>
        <button onClick={() => handleReserve(id)} type="button">
          { active ? 'Leave Mission' : 'Join Mission' }
        </button>
      </div>
    </>
  );
};

export default Mission;

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
