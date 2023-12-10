import React from 'react';

import { Profile } from "./profile.jsx";
import { Statistics } from "./statistics.jsx";
import { FriendList } from "./friends.jsx";
import { TransactionHistory } from './transactions.jsx';

import user from 'json/user.json';
import data from 'json/data.json';
import friends from 'json/friends.json';
import transactions from 'json/transactions.json';


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