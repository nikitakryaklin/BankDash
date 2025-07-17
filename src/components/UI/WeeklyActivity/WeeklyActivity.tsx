import StatsProvider from '@/context/statsContext/statsContext'
import { WeeklyActivityChart } from './WeeklyActivityChart'

export const WeeklyActivity = () => {
  return (
    <StatsProvider>
      <WeeklyActivityChart />
    </StatsProvider>
  )
}
