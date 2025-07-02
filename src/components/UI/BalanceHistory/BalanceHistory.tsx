import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import { NotEnougtData } from '../NotEnougtData/NotEnougtData'
import styles from './BalanceHistory.module.scss'
import { BALANCE_HISTORY_DATA } from './BalanceHistory.data'
import { LineChart } from '../Chart/Line/Line-chart'
import { useTransactionsByDate } from '@/hooks/useTransactionsByDate'
import { useBalanceHistoryCalculator } from './useBalanceHistoryCalculator'

const BalanceHistory = () => {
  const { data: transactions, isLoading } = useTransactionsByDate()

  if (!transactions && !isLoading) {
    return <NotEnougtData />
  }

  const { labels, data } = useBalanceHistoryCalculator(transactions)

  return (
    <div className={styles.wrapper}>
      <h2>Balance History</h2>
      <CardWrapper className={styles.card}>
        <LineChart
          chartData={{
            ...BALANCE_HISTORY_DATA,
            labes: labels,
            data: data,
          }}
          isPlugin={true}
        />
      </CardWrapper>
    </div>
  )
}

export default BalanceHistory
