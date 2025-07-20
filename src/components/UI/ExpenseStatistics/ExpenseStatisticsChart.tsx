import { CircleChart } from '../Chart/Circle/Circle-chart'
import { useExpenseStatisticsCalculator } from './useExpenseStatisticsCalculator'

export const ExpenseStatisticsChart = () => {
  const { EXPENSE_STATISTICS_DATA } = useExpenseStatisticsCalculator()

  return <CircleChart chartData={EXPENSE_STATISTICS_DATA} />
}
