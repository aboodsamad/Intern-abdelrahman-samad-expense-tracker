import type { Transaction } from "../models/Transaction";

type Props = {
  transactions: Transaction[];
};

export function TransactionList({ transactions }: Props) {
  return (
    <ul className="transaction-list">
      {transactions.map((t) => (
        <li key={t.id} className="transaction-item">
          <b>{t.title}</b>
          <span>{t.category}</span>
          <span>{t.date}</span>
          <span>${t.amount}</span>
        </li>
      ))}
    </ul>
  );
}