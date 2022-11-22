import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionsTable from '../components/MissionsTable';
import { fetchMissions } from '../redux/missions/missions';
import '../styles/MissionsPage.css';

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
      <table className="mission-table-container">
        <thead className="table-header">
          <tr className="title-row">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <MissionsTable missions={missions} />
        </tbody>
      </table>
    </section>
  );
};

export default MissionsDisplay;
