import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import Rocket from '../components/Rockets';
import style from '../styles/Rockets.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rocketsData.length) {
      dispatch(fetchRockets());
    }
  });

  return (
    <section>
      <div className={style.rocketContainer}>
        {rocketsData.map((rocketData) => (
          <Rocket key={rocketData.id} rocket={rocketData} />
        ))}
      </div>
    </section>
  );
};

export default Rockets;
