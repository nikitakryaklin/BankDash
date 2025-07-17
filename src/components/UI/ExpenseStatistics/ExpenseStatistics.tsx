import StatsProvider from '@/context/statsContext/statsContext'
import { ExpenseStatisticsChart } from './ExpenseStatisticsChart'

export const ExpenseStatistics = () => {
  return (
    <StatsProvider>
      <ExpenseStatisticsChart />
    </StatsProvider>
  )
}
