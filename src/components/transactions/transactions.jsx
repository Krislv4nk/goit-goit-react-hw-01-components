import React from 'react';
import PropTypes from 'prop-types';
import css from './transactions.module.css';

export const Transaction = ({ type, amount, currency }) => (
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

