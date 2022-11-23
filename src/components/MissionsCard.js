import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission } from '../redux/missions/missions';
import '../styles/MissionsPage.css';

const MissionCard = (props) => {
  const { mission } = props;
  const {
    id, name, description, reserved,
  } = mission;

  const dispatch = useDispatch();

  const toggleJoin = (e) => {
    dispatch(reserveMission(e.target.id.slice(1)));
  };

  return (
    <tr className="mission-card">
      <td className="mission-name">{name}</td>
      <td className="mission-desc">{description}</td>
      <td className="mission-status">
        {reserved ? (
          <span className="badge-active">Active Member</span>
        ) : (
          <span className="badge-passive">NOT A MEMBER</span>
        )}
      </td>
      <td className="mission-button">
        {reserved ? (
          <button type="button" className={`mission-btn ${reserved ? 'badge-quit' : 'badge-join'}`} id={`j${id}`} onClick={toggleJoin}>Leave Mission</button>
        ) : (
          <button type="button" className={`mission-btn ${reserved ? 'badge-quit' : 'badge-join'}`} id={`l${id}`} onClick={toggleJoin}>Join Mission</button>
        )}
      </td>
    </tr>
  );
};

MissionCard.defaultProps = {
  mission: {},
  id: '',
  name: '',
  description: '',
};

MissionCard.propTypes = {
  mission: PropTypes.instanceOf(Object),
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default MissionCard;
