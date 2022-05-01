import PropTypes from 'prop-types';
import s from './FriendsList.module.css'
import FriendsListItem from './FriendsListItem';

const FriendsList = ({ friends } ) => {
  return (
    <ul className={s.friendsList}>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>);
}
  

FriendsList.propTypes = {
  key: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

  export default FriendsList;
