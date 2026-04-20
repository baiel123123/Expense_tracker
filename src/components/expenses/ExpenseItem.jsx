import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <h2 className="expense-item__description">{props.expense.title}</h2>
      <div className="expense-item__price">{props.expense.price} KGS</div>
    </div>
  );
};

export default ExpenseItem;