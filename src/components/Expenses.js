import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ items }) => {
  //   const createExpense = (expenses) => {

  //     expenses.forEach((i) => {
  //       <ExpenseItem
  //         date={i.date}
  //         title={i.title}
  //         amount={i.amount}
  //       />;
  //     });

  //     return ExpenseItem
  //   };

  return (
    <Card className="expenses">
      <ExpenseItem
        date={items[0].date}
        title={items[0].title}
        amount={items[0].amount}
      />
      <ExpenseItem
        date={items[1].date}
        title={items[1].title}
        amount={items[1].amount}
      />
      <ExpenseItem
        date={items[2].date}
        title={items[2].title}
        amount={items[2].amount}
      />
      <ExpenseItem
        date={items[3].date}
        title={items[3].title}
        amount={items[3].amount}
      />
    </Card>
  );
};

export default Expenses;
