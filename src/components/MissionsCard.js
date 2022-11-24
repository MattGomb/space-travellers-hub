import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission } from '../redux/missions/missions';
import style from '../styles/Missions.module.css';

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
    <tr className={style.missionCard}>
      <td className={style.missionName}>{name}</td>
      <td className={style.missionDesc}>{description}</td>
      <td className={style.missionStatus}>
        {reserved && (
          <span className={style.badgeActive}>Active Member</span>
        )}
        {!reserved && (
          <span className={style.badgePassive}>NOT A MEMBER</span>
        )}
      </td>
      <td className={style.missionButton}>
        {reserved && (
          <button type="button" className={`${style.missionBtn} ${reserved && style.badgeQuit} ${!reserved && style.badgeJoin}`} id={`j${id}`} onClick={toggleJoin}>Leave Mission</button>
        )}
        {!reserved && (
          <button type="button" className={`${style.missionBtn} ${reserved && style.badgeQuit} ${!reserved && style.badgeJoin}`} id={`l${id}`} onClick={toggleJoin}>Join Mission</button>
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
