import PropTypes from 'prop-types';
import defaultImg from '../Profile/default.jpg';
import s from '../FriendListItem/FriendListItem.module.scss';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={s[isOnline]}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

FriendListItem.defaultProps = {
  avatar: defaultImg,
};

export default FriendListItem;
