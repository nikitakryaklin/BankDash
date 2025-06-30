import {
  ChartColumnIncreasing,
  LucideHandCoins,
  ShieldCheckIcon,
  ShieldPlusIcon,
  ShoppingBag,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";

export const WIDGET_DATA = [
  {
    id: 1,
    title: "Life Insurance",
    text: "Unlimited protection",
    color: "#396AFF",
    icon: <ShieldCheckIcon style={{ fill: "#396AFF3a", stroke: "#396AFF" }} />,
  },
  {
    id: 2,
    title: "Shopping",
    text: "Buy. Think. Grow",
    color: "#FFBB38",
    icon: <ShoppingBag style={{ fill: "#FFBB38", stroke: "#FFF5D9" }} />,
  },
  {
    id: 3,
    title: "Safety",
    text: "We are your allies",
    color: "#16DBCC",
    icon: <ShieldPlusIcon style={{ fill: "#16DBCC", stroke: "#DCFAF8" }} />,
  },
];

export const SERVICES_LIST = [
  {
    id: 1,
    color: "#FF82AC",
    icon: <LucideHandCoins style={{ fill: "#FF82AC3a", stroke: "#FF82AC" }} />,
    title: "Business loans",
    text: "It is a long established",
    description_title: "Lorem Ipsum",
    discription_text: "Many publishing",
  },
  {
    id: 2,
    color: "#FFBB38",
    icon: <ShoppingBag style={{ fill: "#FFBB38", stroke: "#FFF5D9" }} />,
    title: "Checking accounts",
    text: "It is a long established",
    description_title: "Lorem Ipsum",
    discription_text: "Many publishing",
  },
  {
    id: 3,
    color: "#FF82AC",
    icon: <ChartColumnIncreasing style={{ fill: "none", stroke: "#FF82AC" }} />,
    title: "Savings accounts",
    text: "It is a long established",
    description_title: "Lorem Ipsum",
    discription_text: "Many publishing",
  },
  {
    id: 4,
    color: "#396AFF",
    icon: <UserIcon style={{ fill: "#396AFF", stroke: "none" }} />,
    title: "Debit and credit cards",
    text: "It is a long established",
    description_title: "Lorem Ipsum",
    discription_text: "Many publishing",
  },
  {
    id: 5,
    color: "#16DBCC",
    icon: <ShieldPlusIcon style={{ fill: "#16DBCC3a", stroke: "#16DBCC" }} />,
    title: "Life Insurance",
    text: "It is a long established",
    description_title: "Lorem Ipsum",
    discription_text: "Many publishing",
  },
];
