import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Transaction } from "../models/Transaction";
import { expenseCategories, incomeCategories } from "../models/Transaction";

type Props = {
  setTransactions: Dispatch<SetStateAction<Transaction[]>>;
};

export function TransactionForm({ setTransactions }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");
  const [date, setDate] = useState("");
  const [type, setType] = useState<"Income" | "Expense">("Expense");

  const categories = type === "Income" ? incomeCategories : expenseCategories;

  function changeType(newType: "Income" | "Expense") {
    setType(newType);
    setCategory(
      newType === "Income" ? incomeCategories[0] : expenseCategories[0],
    );
  }

  function addTransaction(e: React.FormEvent) {
    e.preventDefault();
    setTransactions((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: type,
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

      <select
        value={type}
        onChange={(e) => changeType(e.target.value as "Income" | "Expense")}
      >
        <option value="expense">Expense</option>
        <option value="Income">Income</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((c) => (
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
