import { useState } from 'react';
import './ExpenseForm.css';
import Button from '../ui/Button';

const ExpenseForm = ({ onGet }) => {
  const [userInputs, setUserInputs] = useState({
    title: '',
    price: '',
    date: '',
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInputs((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onGet({
      title: userInputs.title.trim(),
      price: Number(userInputs.price),
      date: new Date(userInputs.date),
    });

    setUserInputs({ title: '', price: '', date: '' });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input name="title" type="text" value={userInputs.title} onChange={inputChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Price</label>
          <input name="price" type="number" value={userInputs.price} onChange={inputChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input name="date" type="date" value={userInputs.date} onChange={inputChangeHandler} />
        </div>

        <div className="new-expense__actions">
          <Button>Add Expense</Button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;