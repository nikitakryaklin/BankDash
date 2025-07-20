import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './MyExpense.module.scss'
import { ElementWrapper } from '../ElementWrapper/ElementWrapper'
import dynamic from 'next/dynamic'
import { Loader } from '../Loader/loader'

const DynamicStatsProvider = dynamic(
  () => import('@/context/statsContext/statsContext').then((D) => D.default),
  { ssr: false, loading: () => <Loader /> }
)
const DynamicMyExpenseChart = dynamic(
  () => import('./MyExpenseChart').then((D) => D.MyExpenseChart),
  { ssr: false, loading: () => <Loader /> }
)

export const MyExpense = () => {
  return (
    <ElementWrapper className={styles.wrapper} id="my_expense">
      <h2>My Expense</h2>
      <CardWrapper>
        <DynamicStatsProvider>
          <DynamicMyExpenseChart />
        </DynamicStatsProvider>
      </CardWrapper>
    </ElementWrapper>
  )
}
