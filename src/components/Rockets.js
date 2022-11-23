import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReserve } from '../redux/rockets/rockets';
import style from '../styles/Rockets.module.css';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  return (
    <div className={`${style.card} ${style.flex}`}>
      <div className={style.flickr}>
        <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      </div>

      <div className={style.content}>
        <div>
          <span className={style.rocketName}>{rocket.rocket_name}</span>
        </div>
        <div className={style.description}>
          {rocket.reserved && <span className={style.badge}>Reserved</span>}
          {!rocket.reserved && ''}
          <span>{rocket.description}</span>
        </div>
        <button type="submit" className={`${rocket.reserved && style.reserved} ${!rocket.reserved && style.notReserved}`} onClick={() => dispatch(rocketReserve(rocket.rocket_id))}>
          {rocket.reserved && 'Cancel Reservation'}
          {!rocket.reserved && 'Reserver Rocket'}

        </button>
      </div>
    </div>
  );
};
Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    reserved: PropTypes.bool,
  }).isRequired,
};
export default Rocket;
