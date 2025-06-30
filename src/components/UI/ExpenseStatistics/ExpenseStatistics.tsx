import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import { NotEnougtData } from '../NotEnougtData/NotEnougtData'
import styles from './ExpenseStatistics.module.scss'
import { CircleChart } from '../Chart/Circle/Circle-chart'
import { EXPENSE_STATISTICS_DATA } from './ExpenseStatistics.data'

const ExpenseStatistics = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Expense Statistics</h2>
      <CardWrapper className={styles.card}>
        {/* <NotEnougtData /> */}

        <CircleChart chartData={EXPENSE_STATISTICS_DATA} />
      </CardWrapper>
    </div>
  )
}

export default ExpenseStatistics
