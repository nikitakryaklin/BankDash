import {
  BanknoteArrowDownIcon,
  BanknoteArrowUp,
  LucideReceipt,
  PiggyBankIcon,
} from "lucide-react";

export const WIDGET_ACCOUNT_DATA = [
  {
    id: 1,
    title: "My Balance",
    color: "#FFBB38",
    icon: <LucideReceipt style={{ fill: "none", stroke: "#FFBB38" }} />,
  },
  {
    id: 2,
    title: "Income",
    color: "#396AFF",
    icon: <BanknoteArrowUp style={{ fill: "none", stroke: "#396AFF" }} />,
  },
  {
    id: 3,
    title: "Expense",
    color: "#FF82AC",
    icon: <BanknoteArrowDownIcon style={{ fill: "none", stroke: "#FF82AC" }} />,
  },
  {
    id: 4,
    title: "Total Saving",
    color: "#16DBCC",
    icon: <PiggyBankIcon style={{ fill: "none", stroke: "#16DBCC" }} />,
  },
];
