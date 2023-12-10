

const FriendListItem = ({ avatar, name, isOnline }) =>{
  return (
    <li className="item">
      <span className="status" style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
export const FriendList = ({ friends }) =>{
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
