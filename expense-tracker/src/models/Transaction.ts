export type Transaction = {
  id: number;
  type: "Income" | "Expense";
  title: string;
  amount: number;
  category: string;
  date: string;
};

export const expenseCategories = [
  "food",
  "transport",
  "bills",
  "shopping",
  "other",
];

export const incomeCategories = ["salary", "freelance", "gift", "other"];
