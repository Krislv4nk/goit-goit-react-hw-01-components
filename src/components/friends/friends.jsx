import css from './friends.module.css';
import { FriendListItem } from 'components/friendListItem/friendListItem';

export const FriendList = ({ friends }) =>{
  return (
    <ul className={(css.friendlist, css.container)}>
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
