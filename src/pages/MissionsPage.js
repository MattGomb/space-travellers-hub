import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionsTable from '../components/MissionsTable';
import { fetchMissions } from '../redux/missions/missions';
import style from '../styles/Missions.module.css';

let join = false;

const MissionsDisplay = () => {
  // useselector
  const missions = useSelector((state) => state.missions);

  // dispatch
  const dispatch = useDispatch();

  // useeffect
  useEffect(() => {
    if (join === false) {
      join = true;
      dispatch(fetchMissions());
    }
  }, [dispatch]);

  return (
    <section>
      <table className={style.missionTableContainer}>
        <thead className={style.tableHeader}>
          <tr className={style.titleRow}>
            <th className={style.headTM}>Mission</th>
            <th className={style.headTD}>Description</th>
            <th className={style.headTS}>Status</th>
          </tr>
        </thead>
        <tbody className={style.tableBody}>
          <MissionsTable missions={missions} />
        </tbody>
      </table>
    </section>
  );
};

export default MissionsDisplay;
