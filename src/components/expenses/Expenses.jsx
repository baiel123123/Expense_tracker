import { useState } from "react";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2025");

    const years = Array.from(
        new Set(props.expenses.map((e) => e.date.getFullYear().toString()))
    ).sort((a, b) => Number(b) - Number(a));

    const filterChangeHandler = (event) => setSelectedYear(event.target.value);

    const filteredExpenses = props.expenses.filter(
        (el) => el.date.getFullYear().toString() === selectedYear
    );

    return (
        <Card className="expenses">
            <div className="expenses-filter">
                <label>Filter by year</label>
                <select value={selectedYear} onChange={filterChangeHandler}>
                    {years.map((y) => (
                        <option key={y} value={y}>
                            {y}
                        </option>
                    ))}
                </select>
            </div>

            {
                filteredExpenses.length === 0
                    ? <p>No expenses found</p>
                    : filteredExpenses.map(el => (
                        <ExpenseItem key={el.id} expense={el} />
                    ))
            }

        </Card>
    );
};

export default Expenses;