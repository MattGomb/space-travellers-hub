import React from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/ProfilePage.module.css';

const MyProfile = () => {
  const JoinedMissionsList = () => {
    const missions = useSelector((state) => state.missions);
    const joinedMissions = missions.filter((mission) => mission.reserved);
    return (
      <table className={style.reservedMTable}>
        <tbody>
          {joinedMissions.map((mission) => (
            <tr key={mission.id}>
              <td className={style.missionSelected}>{mission.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const ReservedRocketsList = () => {
    const rockets = useSelector((state) => state.rockets);
    const reservedRockets = rockets.filter((rocket) => rocket.reserved);
    return (
      <table className={style.reservedRTable}>
        <tbody>
          {reservedRockets.map((rocket) => (
            <tr key={rocket.id}>
              <td className={style.rocketSelected}>{rocket.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <section className={style.profile}>
      <div className={style.profileContainer}>
        <div className={style.reservedMissions}>
          <h2>My Mission</h2>
          <JoinedMissionsList />
        </div>
        <div className={style.reservedRockets}>
          <h2>My Rockets</h2>
          <ReservedRocketsList />
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
