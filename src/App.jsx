import { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpenses from './components/newExepnses/NewExpenses';

const INITIAL_EXPENSES = [
  {
    id: 1,
    title: "Cola",
    price: 100,
    date: new Date(2025, 1, 12)
  },
  {
    id: 2,
    title: "Carpet",
    price: 2500,
    date: new Date(2026, 10, 9)
  },
  {
    id: 3,
    title: "Sofa",
    price: 10330,
    date: new Date(2024, 3, 6)
  },
]

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header__inner">
          <div className="app-title">Expense Tracker</div>
          <div className="app-subtitle">Add expenses and filter by year</div>
        </div>
      </header>

      <main className="app-content">
        <NewExpenses onAdd={addExpenseHandler} />
        <Expenses expenses={expenses} />
      </main>
    </div>
  );
}

export default App;