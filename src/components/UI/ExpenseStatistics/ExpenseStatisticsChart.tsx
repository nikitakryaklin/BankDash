import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './ExpenseStatistics.module.scss'
import { CircleChart } from '../Chart/Circle/Circle-chart'
import { useExpenseStatisticsCalculator } from './useExpenseStatisticsCalculator'
import { ElementWrapper } from '../ElementWrapper/ElementWrapper'

export const ExpenseStatisticsChart = () => {
  const { EXPENSE_STATISTICS_DATA } = useExpenseStatisticsCalculator()

  return (
    <ElementWrapper id="expense_statistics" className={styles.wrapper}>
      <h2>Expense Statistics</h2>
      <CardWrapper className={styles.card}>
        <CircleChart chartData={EXPENSE_STATISTICS_DATA} />
      </CardWrapper>
    </ElementWrapper>
  )
}
