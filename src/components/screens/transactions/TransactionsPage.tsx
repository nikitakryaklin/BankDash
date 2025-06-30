import CardBlock from "@/components/UI/cardBlock/cardBlock";
import styles from "./transactionsPage.module.scss";
import { MyExpense } from "@/components/UI/MyExpense/MyExpense";
import { AllTransactions } from "@/components/UI/AllTransactions/AllTransactions";

const TransactionsPage = () => {
  return (
    <div className={styles.wrapper}>
      <CardBlock buttomText="+ Add Card" />
      <MyExpense />
      <AllTransactions />
    </div>
  );
};

export default TransactionsPage;
