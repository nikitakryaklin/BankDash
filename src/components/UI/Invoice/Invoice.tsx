import CardWrapper from "@/components/loayout/CardWrapper/CardWrapper";
import styles from "./Invoice.module.scss";
import { INVOICE_DATA } from "./Invoice.data";

export const Invoice = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Invoices Sent</h2>
      <CardWrapper className={styles.invoice_card}>
        {INVOICE_DATA.map((el, index) => (
          <div key={index} className={styles.invice}>
            <div
              className={styles.icon}
              style={{ background: `${el.color}1a` }}
            >
              {el.icon}
            </div>
            <div className={styles.info}>
              <h3>{el.title}</h3>
              <p>{el.time}</p>
            </div>
            <p className={styles.amount}>{el.amount}</p>
          </div>
        ))}
      </CardWrapper>
    </div>
  );
};
