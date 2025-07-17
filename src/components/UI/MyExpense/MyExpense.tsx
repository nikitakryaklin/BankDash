import StatsProvider from '@/context/statsContext/statsContext'
import { MyExpenseChart } from './MyExpenseChart'

export const MyExpense = () => {
  return (
    <StatsProvider>
      <MyExpenseChart />
    </StatsProvider>
  )
}
