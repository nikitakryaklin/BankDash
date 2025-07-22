import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './ExpenseStatistics.module.scss'
import { ElementWrapper } from '../../loayout/ElementWrapper/ElementWrapper'
import dynamic from 'next/dynamic'
import { Loader } from '../Loader/loader'

const DynamicStatsProvider = dynamic(
  () => import('@/context/statsContext/statsContext').then((D) => D.default),
  { ssr: false, loading: () => <Loader /> }
)
const DynamicExpenseStatisticsChart = dynamic(
  () =>
    import('./ExpenseStatisticsChart').then((D) => D.ExpenseStatisticsChart),
  { ssr: false, loading: () => <Loader /> }
)

export const ExpenseStatistics = () => {
  return (
    <ElementWrapper id="expense_statistics" className={styles.wrapper}>
      <h2>Expense Statistics</h2>
      <CardWrapper className={styles.card}>
        <DynamicStatsProvider>
          <DynamicExpenseStatisticsChart />
        </DynamicStatsProvider>
      </CardWrapper>
    </ElementWrapper>
  )
}
