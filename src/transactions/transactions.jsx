import React from 'react';
import PropTypes from 'prop-types';
import css from './transactions.module.css';

const Transaction = ({ type, amount, currency }) => (
  <tr>
    <td className={css.td}>{type}</td>
    <td className={css.td}>{amount}</td>
    <td className={css.td}>{currency}</td>
  </tr>
);

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export const TransactionHistory = ({ items }) => (
  <table className={(css.transactionhistory, css.container)}>
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