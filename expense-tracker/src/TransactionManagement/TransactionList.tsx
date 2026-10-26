import type { Dispatch, SetStateAction } from "react";
import type { Transaction } from "../models/Transaction";

type Props = {
  transactions: Transaction[];
  setTransactions: Dispatch<SetStateAction<Transaction[]>>;
};

export function TransactionList({ transactions, setTransactions }: Props) {
  function deleteTransaction(id: number) {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }
  return (
    <ul className="transaction-list">
      {transactions.map((t) => (
        <li key={t.id} className={"transaction-item " + t.type}>
          <b>{t.title}</b>
          <span>{t.category}</span>
          <span>{t.date}</span>
          <span>${t.amount}</span>
          <span>{t.type === "Income" ? "+" : "-"}${t.amount}</span>
          <button onClick={() => deleteTransaction(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
