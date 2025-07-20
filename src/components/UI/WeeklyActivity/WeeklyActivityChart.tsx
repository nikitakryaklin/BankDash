import { BarChart } from '../Chart/Bar/Bar-chart'
import { useWeeklyActivityCalculator } from './useWeeklyActivityCalculator'

export const WeeklyActivityChart = () => {
  const { WEEKLY_ACTIVITY_DATA } = useWeeklyActivityCalculator()

  return <BarChart chartData={{ ...WEEKLY_ACTIVITY_DATA }} />
}
