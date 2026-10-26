import { TransactionForm } from "./TransactionManagement/TransactionForm";
import { TransactionList } from "./TransactionManagement/TransactionList";
import { useTransactions } from "./Hooks/hooks";

function App() {
  const { transactions, setTransactions} = useTransactions();

  return (
    <div className="app">
      <TransactionForm setTransactions={setTransactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;