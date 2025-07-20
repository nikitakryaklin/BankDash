import styles from './LoansPage.module.scss'
import { WidgetBlock } from './widgetBlock'
import { TableBlockLoans } from './tableBlockLoans'

export const LoansPage = () => {
  return (
    <div className={styles.page}>
      <WidgetBlock />
      <TableBlockLoans />
    </div>
  )
}
