import Widget from "@/components/UI/Widget/Widget";
import {
  BODY_TABLE_DATA,
  LOANS_HEADER_TABLE_DATA,
  WIDGET_LOANS_DATA,
} from "./LoansPage.data";
import styles from "./LoansPage.module.scss";
import { TableBlock } from "@/components/UI/TableBlock/TableBlock";
import { getCardValues } from "@/utiles/getCardValues";
import { WidgetWrapper } from "@/components/UI/widgetWrapper/widgetWrapper";

const LoansPage = () => {

  return (
    <div className={styles.page}>
      <WidgetWrapper>
        {WIDGET_LOANS_DATA.map((el) => (
          <Widget
            className={styles.widget}
            text={el.text}
            title={el.title}
            color={el.color}
            key={el.id}
          >
            {el.icon}
          </Widget>
        ))}
      </WidgetWrapper>
      <div>
        <h2>Active Loans Overview</h2>
        <TableBlock header={LOANS_HEADER_TABLE_DATA}>
          <tbody>
            {BODY_TABLE_DATA.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>${getCardValues.balance(el.total)}</td>
                <td>${getCardValues.balance(el.remainder)}</td>
                <td>{el.duration}</td>
                <td>{el.rate}</td>
                <td>${getCardValues.balance(el.Installment)} / month</td>
                <td>
                  <button>Repay</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>${getCardValues.balance(String(BODY_TABLE_DATA.reduce((a, b) => Number(b.total) + a, 0)))}</td>
              <td>${getCardValues.balance(String(BODY_TABLE_DATA.reduce((a, b) => Number(b.remainder) + a, 0)))}</td>
              <td></td>
              <td></td>
              <td>${getCardValues.balance(String(BODY_TABLE_DATA.reduce((a, b) => Number(b.Installment) + a, 0)))} / month</td>
            </tr>
          </tfoot>
        </TableBlock>
      </div>
    </div>
  );
};

export default LoansPage;
