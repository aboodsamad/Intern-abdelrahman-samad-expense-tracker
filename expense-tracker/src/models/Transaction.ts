export type Transaction = {
  id: number;
  type: "income" | "expense";
  title: string;
  amount: number;
  category: string;
  date: string;
};

export const expenseCategories = ["food", "transport", "bills", "shopping", "other"];