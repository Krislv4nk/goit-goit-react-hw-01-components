import React from 'react';

import { Profile } from "../profile/profile.jsx";
import { Statistics } from "../statistics/statistics.jsx";
import { FriendList } from "../friends/friends.jsx";
import { TransactionHistory } from '../transactions/transactions.jsx';

import user from 'profile/user.json';
import data from 'statistics/data.json';
import friends from 'friends/friends.json';
import transactions from 'transactions/transactions.json';



export const App = () => {
  return (
     <div>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </div>
      <div><FriendList friends={friends} /></div>
      <div><TransactionHistory items={transactions} /></div>
    </div>
    
  );
};