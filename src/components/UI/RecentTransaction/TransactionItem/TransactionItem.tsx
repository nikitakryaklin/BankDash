import { getFormatDate } from "@/utiles/getFormatDate";
import { TransantionCategory } from "./TransactionItem.data";
import style from "./TransactionItem.module.scss";
import { getCardValues } from "@/utiles/getCardValues";
import { typeCategory } from "@/types/Amount.type";

interface ITransactionItem {
  title: string;
  date: string;
  type: "incoming" | "outgoing" | "cancelled";
  category: string;
  amount: number;
  flug: boolean;
}

const TransactionItem = ({
  title,
  date,
  type,
  category,
  amount,
  flug,
}: ITransactionItem) => {
  return (
    <div className={style.wrapper}>
      <div
        className={style.icon}
        style={
          category !== undefined
            ? { background: `${TransantionCategory[category].color}` }
            : {}
        }
      >
        {category !== undefined && TransantionCategory[category].icon}
      </div>
      <div className={style.info}>
        <h4
          style={
            type === "cancelled"
              ? { color: `${typeCategory[type].color}` }
              : { color: "var(--title)" }
          }
        >
          {title}
        </h4>
        <p
          style={
            type === "cancelled"
              ? { color: `${typeCategory[type].color}` }
              : { color: "var(--text-color)" }
          }
        >
          {getFormatDate(date, "D MMMM HH:mm")}
        </p>
      </div>
      {flug && (
        <div className={style.main_info}>
          <p
            style={
              type === "cancelled"
                ? { color: `${typeCategory[type].color}` }
                : { color: "var(--text-color)" }
            }
          >
            {category}
          </p>
          <p
            style={
              type === "cancelled"
                ? { color: `${typeCategory[type].color}` }
                : { color: "var(--text-color)" }
            }
          >
            {getCardValues.number("1111222233334444").slice(0, 8)}
          </p>
          <p
            style={
              type === "cancelled"
                ? { color: `${typeCategory[type].color}` }
                : { color: "var(--text-color)" }
            }
          >
            Completed
          </p>
        </div>
      )}
      <p style={{ color: `${typeCategory[type].color}` }}>
        {typeCategory[type].mark}${getCardValues.balance(amount.toString())}
      </p>
    </div>
  );
};

export default TransactionItem;
