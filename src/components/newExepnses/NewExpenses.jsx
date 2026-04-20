import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';
import Card from '../ui/Card';

const NewExpenses = (props) => {
  const getExpenseHandler = (expense) => {
    const expenseWithId = { ...expense, id: crypto.randomUUID?.() ?? Math.random().toString(16).slice(2) };
    props.onAdd(expenseWithId);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onGet={getExpenseHandler} />
    </Card>
  );
};

export default NewExpenses;