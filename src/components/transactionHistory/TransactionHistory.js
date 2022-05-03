import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead >
        <tr className={s.head} >
          <th className={s.headItem}>Type</th>
          <th className={s.headItem}>Amount</th>
          <th className={s.headItem}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.list}>
        {items.map(item => ( 
          <tr key={item.id} className={s.listItem}>
            <td className={s.listItemCell}>{item.type}</td>
            <td className={s.listItemCell}>{item.amount}</td>
            <td className={s.listItemCell}>{item.currency}</td>
          </tr>         
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
  }),
  ),
};

export default TransactionHistory;

