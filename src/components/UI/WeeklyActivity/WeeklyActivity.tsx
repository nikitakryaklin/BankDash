import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import { NotEnougtData } from '../NotEnougtData/NotEnougtData'
import styles from './WeeklyActivity.module.scss'
import { BarChart } from '../Chart/Bar/Bar-chart'
import { useTransactionsByDate } from '@/hooks/useTransactionsByDate'
import { useWeeklyActivityCalculator } from './useWeeklyActivityCalculator'

const WeeklyActivity = () => {
  const { data: transactions, isLoading } = useTransactionsByDate()

  if (!transactions && !isLoading) {
    return <NotEnougtData />
  }

  const { result } = useWeeklyActivityCalculator(transactions)

  console.log(result)
  return (
    <div className={styles.wrapper}>
      <h2>Weekly Activity</h2>
      <CardWrapper className={styles.card}>
        <BarChart chartData={{ ...result }} />
      </CardWrapper>
    </div>
  )
}

export default WeeklyActivity
