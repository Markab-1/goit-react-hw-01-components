import s from './FriendsList.module.css'

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      {isOnline ?
        <span
          className={s.status}
          style={{backgroundColor: "green" }}></span> :
        <span
          className={s.status}
          style={{backgroundColor: "red" }}></span>}     
      <img className={s.avatar}
        src={avatar}
        alt="User avatar"
        width="80px" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
  
  export default FriendsListItem;