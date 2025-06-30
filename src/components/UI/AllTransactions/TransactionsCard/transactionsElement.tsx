import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import styles from "./TransactionsCard.module.scss";
import clsx from "clsx";
import { typeCategory } from "@/types/Amount.type";
import { getCardValues } from "@/utiles/getCardValues";
import { getFormatDate } from "@/utiles/getFormatDate";
import { downloadReport } from "@/utiles/downloadReport";

interface IProps {
  title: string;
  id: number;
  category: string;
  cardNumber: string;
  date: Date;
  amount: string;
  type: string;
}

export const TransactionsElement = ({
  title,
  id,
  category,
  cardNumber,
  date,
  amount,
  type,
}: IProps) => {
  const hendleClick = () => {
    downloadReport(
      title,
      date,
      id,
      category,
      `${getCardValues.number(cardNumber)}`,
      `${typeCategory[type].mark}` +
        "$" +
        `${getCardValues.balance(amount.toString())}`,
      type,
    );
  };

  return (
    <div className={styles.transactionsElement}>
      <div className={styles.trans_title}>
        {type === "incoming" ? (
          <ArrowDownCircle
            style={{ fill: "none", stroke: "var(--text-color)" }}
            size={30}
          />
        ) : (
          <ArrowUpCircle
            style={{ fill: "none", stroke: "var(--text-color)" }}
            size={30}
          />
        )}
        <p>{title}</p>
      </div>
      <p>#{id}</p>
      <p>{category}</p>
      <p>{getCardValues.number(cardNumber).slice(0, 8)}</p>
      <p>{getFormatDate(date.toString(), "D MMMM HH:mm")}</p>
      <p style={{ color: `${typeCategory[type].color}` }}>
        {typeCategory[type].mark}${getCardValues.balance(amount.toString())}
      </p>
      <button onClick={() => hendleClick()}>Download</button>
    </div>
  );
};
