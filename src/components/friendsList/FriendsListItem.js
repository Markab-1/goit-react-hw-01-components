import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  const bcgColor = isOnline ? 'green' : 'red';
  return (
    <div className={s.itemThumb}>
      <span className={s.status} style={{ backgroundColor: bcgColor }}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="80px" />
      <p className={s.name}>{name}</p>
    </div>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
