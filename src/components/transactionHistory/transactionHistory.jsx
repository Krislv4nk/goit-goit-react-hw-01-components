import React from 'react';
import PropTypes from 'prop-types';
import { Transaction } from 'components/transactions/transactions';
import css from './transactionHistory.module.css';


export const TransactionHistory = ({ items }) => (
  <table className={(css.transactionHistory, css.container)}>
    <thead className={css.thead}>
      <tr className={css.tr}>
        <th className={css.type}>Type</th>
        <th className={css.amount}>Amount</th>
        <th className={css.currency}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <Transaction key={item.id} {...item} />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};