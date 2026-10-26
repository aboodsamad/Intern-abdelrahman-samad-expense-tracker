import type { Transaction } from "../models/Transaction";

type Props = {
  transactions: Transaction[];
};

export function SummaryCards({ transactions }: Props) {
  const income = transactions
  .filter((t) => t.type == "Income")
  .reduce((sum , t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="summary-cards">
      <div>Income: ${income.toFixed(2)}</div>
      <div>Expenses: ${expenses.toFixed(2)}</div>
      <div>Balance: ${balance.toFixed(2)}</div>
    </div>
  );
}