import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
import FriendsListItem from './FriendsListItem';

const FriendsList = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <FriendsListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
