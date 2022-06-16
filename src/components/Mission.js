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
    <table className={styles.mission_body}>
      <tr>
        <td>{ missionName }</td>
        <td>{ description }</td>
        <td>{ active ? 'Active' : 'Inactive' }</td>
        <td>
          <button className={active ? styles.btnActive : styles.btnDeactivate} type="button" onClick={() => handleReserve(id)}>
            { active ? 'Deactivate' : 'Activate' }
          </button>
        </td>
      </tr>
    </table>
  );
};

export default Mission;

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
