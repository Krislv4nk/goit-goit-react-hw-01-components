
import React, { Component } from 'react';
import { getRandomColor } from 'helpers/getRandomColor';
import css from './statistics.module.css';

export class Statistics extends Component {
  render() {
    const { title, stats } = this.props;
return (
      <section className={(css.statistics, css.container)}>
        {title && <h2 className={css.title}>{title}</h2>}
  <ul className={css.statlist}>
          {stats.map((stat) => (
            <li
              key={stat.id}
              className={css.item}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={css.label}>{stat.label}</span><br/>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
