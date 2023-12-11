
import React, { Component } from 'react';
import css from './profile.module.css';

export class Profile extends Component {
render() {
    
    const { username, tag, location, avatar, stats } = this.props;
    return (
    
      <div className={(css.profile, css.container)}>
        <div className={css.description}>
          <img src={avatar} alt="User avatar" className={css.avatar} />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.item}>
            <span className={css.label}>Followers </span>
            <span className={css.quantity}> {stats.followers}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}> {stats.views}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Likes</span><br/>
            <span className={css.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }
}


