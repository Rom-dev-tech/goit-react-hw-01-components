import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.scss';
import defaultImg from '../Profile/default.jpg';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={s.card}>
      <div className={s.description}>
        <img src={avatar ?? defaultImg} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.profileTag}>@{tag}</p>
        <p className={s.profileLocation}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItems}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>

        <li className={s.statsItems}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>

        <li className={s.statsItems}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

Profile.defaultProps = {
  avatar: defaultImg,
};

export default Profile;
