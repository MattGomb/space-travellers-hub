import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReserve } from '../redux/rockets/rockets';
import style from '../styles/Rockets.module.css';

const Rocket = (props) => {
  const { rocket } = props;
  const {
    id, name, description, images, reserved,
  } = rocket;

  const dispatch = useDispatch();

  const toggleReserve = (e) => {
    dispatch(rocketReserve(e.target.id));
  };

  return (
    <div className={`${style.card} ${style.flex}`}>
      <div className={style.flickr}>
        <img src={images} alt={name} />
      </div>
      <div className={style.content}>
        <div>
          <span className={style.rocketName}>{name}</span>
        </div>
        <div className={style.description} data-testid="reserved">
          {reserved && (
            <span className={style.badge}>Reserved</span>
          )}
          {!reserved && (
            ''
          )}
          <span>{description}</span>
        </div>
        <button data-testid="button" id={id} type="submit" className={`${reserved && style.reserved} ${!reserved && style.notReserved}`} onClick={toggleReserve}>
          {reserved && (
            'Cancel Reservation'
          )}
          {!reserved && (
            'Reserve Rocket'
          )}
        </button>
      </div>
    </div>
  );
};

Rocket.defaultProps = {
  rocket: {},
  name: '',
  description: '',
  images: '',
};

Rocket.propTypes = {
  rocket: PropTypes.instanceOf(Object),
  name: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.string,
};

export default Rocket;
