import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import type { Transaction } from "../models/Transaction";

type Props = {
  transactions: Transaction[];
  monthTransactions: Transaction[];
};

const colors = ["#4f46e5", "#16a34a", "#f59e0b", "#dc2626", "#0891b2"];

export function Charts({ transactions, monthTransactions }: Props) {
  const totals: Record<string, number> = {};
  monthTransactions
    .filter((t) => t.type === "Expense")
    .forEach((t) => {
      totals[t.category] = (totals[t.category] || 0) + t.amount;
    });
  const pieData = Object.keys(totals).map((name) => ({
    name: name,
    value: totals[name],
  }));


  const monthly: Record<string, { month: string; income: number; expenses: number }> = {};
  
  transactions.forEach((t) => {
    const month = t.date.slice(0, 7);
    if (!monthly[month]) {
      monthly[month] = { month: month, income: 0, expenses: 0 };
    }
    if (t.type === "Income") {
      monthly[month].income += t.amount;
    } else {
      monthly[month].expenses += t.amount;
    }
  });
  const barData = Object.values(monthly).sort((a, b) =>
    a.month.localeCompare(b.month),
  );

  return (
    <div className="charts">
      <h3>Expenses by category</h3>
      {pieData.length === 0 ? (
        <p>No expenses this month</p>
      ) : (
        <PieChart width={400} height={300}>
          <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
            {pieData.map((item, index) => (
              <Cell key={item.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}

      <h3>Income vs expenses per month</h3>
      <BarChart width={500} height={300} data={barData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="#16a34a" />
        <Bar dataKey="expenses" fill="#dc2626" />
      </BarChart>
    </div>
  );
}