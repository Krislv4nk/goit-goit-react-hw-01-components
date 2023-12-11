
import React, { Component } from 'react';

import css from './statistics.module.css';
function getRandomColor() {
  const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * values.length);
    color += values[index];
  }
  return color;
}
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
