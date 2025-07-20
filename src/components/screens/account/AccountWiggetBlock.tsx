import { useUserBalance } from '@/hooks/useUserBalance'
import styles from './AccountPage.module.scss'
import { useTransactionsByDate } from '@/hooks/useTransactionsByDate'
import { useAccountPageCalculator } from './useAccountPageCalculator'
import { Widget } from '@/components/UI/Widget/Widget'

export const AccountWiggetBlock = () => {
  const { balance } = useUserBalance()
  const { data: transactions } = useTransactionsByDate()
  const { WIDGET_ACCOUNT_DATA } = useAccountPageCalculator(
    balance,
    transactions
  )

  return (
    <div className={styles.widget_wrapper}>
      {WIDGET_ACCOUNT_DATA.map((el) => (
        <Widget
          key={el.id}
          id={el.HTMLID}
          title={el.title}
          text={el.text}
          color={el.color}
        >
          {el.icon}
        </Widget>
      ))}
    </div>
  )
}
