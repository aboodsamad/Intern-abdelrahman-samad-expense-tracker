import { useState } from "react";
import type { Transaction } from "./models/Transaction";
import { TransactionForm } from "./TransactionManagement/TransactionForm";
import { TransactionList } from "./TransactionManagement/transactionList";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  return (
    <div className="app">
      <TransactionForm setTransactions={setTransactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;