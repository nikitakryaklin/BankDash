import { ITypeColor } from "@/components/UI/RecentTransaction/TransactionItem/TransactionItem.type";

export const typeCategory: Record<string, ITypeColor> = {
  incoming: {
    color: "#41D4A8",
    mark: "+",
  },
  outgoing: {
    color: "#FF4B4A",
    mark: "-",
  },
  cancelled: {
    color: "#FF4B4A",
    mark: "",
  },
};
