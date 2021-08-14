import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from '../FriendList/FriendList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          name={item.name}
          avatar={item.avatar}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({})),
};

export default FriendList;
