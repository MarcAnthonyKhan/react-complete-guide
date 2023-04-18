import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [expense_title, set_expense_title] = useState(props.title)
  const change_title = () => {
    set_expense_title('updated')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <h2 className="expense-item__description">{expense_title}</h2>

      <div className="expense-item__price">{props.amount}</div>

      <button onClick={change_title}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
