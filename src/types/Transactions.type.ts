export interface ITransaction {
  title: string;
  date: string | Date;
  type: "incoming" | "outgoing" | "cancelled";
  category: string;
  amount: number;
  id: number;
}
