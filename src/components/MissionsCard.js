import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission } from '../redux/missions/missions';

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
      <td className="mission-btn">
        {reserved ? (
          <button type="button" className={`mission-btn ${reserved ? 'badge-join' : 'badge-quit'}`} id={id} onClick={toggleJoin}>Join Mission</button>
        ) : (
          <button type="button" className={`mission-btn ${reserved ? 'badge-quit' : 'badge-join'}`} id={id} onClick={toggleJoin}>Leave Mission</button>
        )}
      </td>
    </tr>
  );
};

Mission.defaultProps = {
  mission: {},
  id: '',
  name: '',
  description: '',
};

Mission.propTypes = {
  mission: PropTypes.instanceOf(Object),
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default MissionCard;
