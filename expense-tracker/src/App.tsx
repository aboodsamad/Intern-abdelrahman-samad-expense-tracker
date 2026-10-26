import { TransactionForm } from "./TransactionManagement/TransactionForm";
import { TransactionList } from "./TransactionManagement/TransactionList";
import { useTransactions } from "./Hooks/hooks";
import { SummaryCards } from "./TransactionManagement/summaryCards";

function App() {
  const { transactions, setTransactions} = useTransactions();

  return (
    <div className="app">
      <SummaryCards transactions={transactions}/> 
      <TransactionForm setTransactions={setTransactions} />
      <TransactionList transactions={transactions} setTransactions={setTransactions}/>
    </div>
  );
}

export default App;