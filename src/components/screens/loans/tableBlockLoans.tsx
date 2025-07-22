import { ElementWrapper } from '@/components/loayout/ElementWrapper/ElementWrapper'
import styles from './LoansPage.module.scss'
import { TableBlock } from '@/components/UI/TableBlock/TableBlock'
import { BODY_TABLE_DATA, LOANS_HEADER_TABLE_DATA } from './LoansPage.data'
import { getCardValues } from '@/utiles/getCardValues'

export const TableBlockLoans = () => {
  return (
    <>
      <ElementWrapper id="active_loans_overview" className={styles.tableBlock}>
        <h2>Active Loans Overview</h2>
        <TableBlock header={LOANS_HEADER_TABLE_DATA} className={styles.table}>
          <TableBlock.body className={styles.table}>
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
          </TableBlock.body>
          <TableBlock.foot className={styles.table}>
            <tr>
              <td>Total</td>
              <td>
                $
                {getCardValues.balance(
                  String(
                    BODY_TABLE_DATA.reduce((a, b) => Number(b.total) + a, 0)
                  )
                )}
              </td>
              <td>
                $
                {getCardValues.balance(
                  String(
                    BODY_TABLE_DATA.reduce((a, b) => Number(b.remainder) + a, 0)
                  )
                )}
              </td>
              <td></td>
              <td></td>
              <td>
                $
                {getCardValues.balance(
                  String(
                    BODY_TABLE_DATA.reduce(
                      (a, b) => Number(b.Installment) + a,
                      0
                    )
                  )
                )}{' '}
                / month
              </td>
            </tr>
          </TableBlock.foot>
        </TableBlock>
      </ElementWrapper>
    </>
  )
}
