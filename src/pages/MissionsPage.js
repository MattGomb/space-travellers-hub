import React, { useEffect } from 'react';
/* import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions'; */
import Mission from '../components/Missions';

const Missions = () => {
  // useselector

  // dispatch

  // useeffect
  useEffect(() => {

  }, []);

  return (
    <section>
      <table>
        <thead>
          <tr className="title-row">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Mission />
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
