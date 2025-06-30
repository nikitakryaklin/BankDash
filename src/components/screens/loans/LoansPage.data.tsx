import { getCardValues } from "@/utiles/getCardValues";
import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  User2,
  Wrench,
} from "lucide-react";

export const WIDGET_LOANS_DATA = [
  {
    id: 1,
    title: "Personal Loans",
    color: "#396AFF",
    text: `$${getCardValues.balance("550000")}`,
    icon: <User2 style={{ fill: "none", stroke: "#396AFF" }} />,
  },
  {
    id: 2,
    title: "Corporate Loans",
    color: "#FFBB38",
    text: `$${getCardValues.balance("100000")}`,
    icon: <BriefcaseBusiness style={{ fill: "none", stroke: "#FFBB38" }} />,
  },
  {
    id: 3,
    title: "Business Loans",
    color: "#FF82AC",
    text: `$${getCardValues.balance("500000")}`,
    icon: <ChartNoAxesCombined style={{ fill: "none", stroke: "#FF82AC" }} />,
  },
  {
    id: 4,
    title: "Custom Loans",
    color: "#16DBCC",
    text: "Choose Money",
    icon: <Wrench style={{ fill: "none", stroke: "#16DBCC" }} />,
  },
];

export const LOANS_HEADER_TABLE_DATA = [
  {
    text: "SL No",
  },
  {
    text: "Loan Money",
  },
  {
    text: "Left to repay",
  },
  {
    text: "Duration",
  },
  {
    text: "Interest rate",
  },
  {
    text: "Installment",
  },
  {
    text: "Repay",
  },
];

export const BODY_TABLE_DATA = [
  {
    id: "01.",
    total: "100000",
    remainder: "40500",
    duration: "8 Months",
    rate: "12%",
    Installment: "2000",
  },
  {
    id: "02.",
    total: "500000",
    remainder: "250000",
    duration: "36 Months",
    rate: "10%",
    Installment: "8000",
  },
  {
    id: "03.",
    total: "900000",
    remainder: "40500",
    duration: "12 Months",
    rate: "12%",
    Installment: "5000",
  },
  {
    id: "04.",
    total: "50000",
    remainder: "40500",
    duration: "25 Months",
    rate: "5%",
    Installment: "2000",
  },
  {
    id: "05.",
    total: "50000",
    remainder: "40500",
    duration: "5 Months",
    rate: "16%",
    Installment: "16000",
  },
  {
    id: "06.",
    total: "80000",
    remainder: "25000",
    duration: "14 Months",
    rate: "8%",
    Installment: "2000",
  },
  {
    id: "07.",
    total: "12000",
    remainder: "5500",
    duration: "9 Months",
    rate: "13%",
    Installment: "500",
  },
  {
    id: "08.",
    total: "160000",
    remainder: "100000",
    duration: "3 Months",
    rate: "13%",
    Installment: "900",
  },
];
