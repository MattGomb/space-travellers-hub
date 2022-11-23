import React from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/ProfilePage.module.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  const JoinedMissionsList = () => (
    <section>
      <table className={style.reservedMTable}>
        <tbody>
          {joinedMissions.map((mission) => (
            <tr key={mission.id}>
              <td className={style.missionSelected}>{mission.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {joinedMissions.length === 0 && (
        <p className={style.noMissions}>NO MISSIONS JOINED</p>
      )}
    </section>
  );

  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const ReservedRocketsList = () => (
    <section>
      <table className={style.reservedRTable}>
        <tbody>
          {reservedRockets.map((rocket) => (
            <tr key={rocket.id}>
              <td className={style.rocketSelected}>{rocket.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {reservedRockets.length === 0 && (
        <p className={style.noRockets}>NO ROCKETS RESERVED</p>
      )}
    </section>
  );

  return (
    <section className={style.profile}>
      <div className={style.profileContainer}>
        <div className={`${style.reservedMissions} ${style.column} ${joinedMissions.length === 0 && style.columnB}`}>
          <h2>My Mission</h2>
          <JoinedMissionsList />
        </div>
        <div className={`${style.reservedRockets} ${style.column} ${reservedRockets.length === 0 && style.columnB}`}>
          <h2>My Rockets</h2>
          <ReservedRocketsList />
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
