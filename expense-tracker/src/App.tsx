import { TransactionForm } from "./TransactionManagement/TransactionForm";
import { TransactionList } from "./TransactionManagement/TransactionList";
import { useTransactions } from "./Hooks/hooks";
import { SummaryCards } from "./TransactionManagement/summaryCards";
import { expenseCategories, incomeCategories } from "./models/Transaction";
import { useState } from "react";

const allCategories = [...new Set([...expenseCategories, ...incomeCategories])];

function App() {
  const { transactions, setTransactions } = useTransactions();
  const [filterCategory, setFilterCategory] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toISOString().slice(0, 7),
  );

  const monthTransactions = transactions.filter(
    (t) => t.date.slice(0, 7) === selectedMonth,
  );

  const filteredTransactions =
    filterCategory === "all"
      ? transactions
      : transactions.filter((t) => t.category === filterCategory);
  return (
    <div className="app">
      <TransactionForm setTransactions={setTransactions} />

      <input
        type="month"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      />

      <SummaryCards transactions={monthTransactions} />
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="all">All categories</option>
        {allCategories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <TransactionList
        transactions={filteredTransactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default App;
