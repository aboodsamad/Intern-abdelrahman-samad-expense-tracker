import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Transaction } from "../models/Transaction";
import { expenseCategories } from "../models/Transaction";

type Props = {
  setTransactions: Dispatch<SetStateAction<Transaction[]>>;
};

export function TransactionForm({ setTransactions }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");
  const [date, setDate] = useState("");

  function addTransaction(e: React.FormEvent) {
    e.preventDefault();
    setTransactions((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "expense",
        title: title,
        amount: Number(amount),
        category: category,
        date: date,
      },
    ]);
    setTitle("");
    setAmount("");
  }

  return (
    <form onSubmit={addTransaction} className="transaction-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        min="0"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {expenseCategories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}