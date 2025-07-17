import { useStatistics } from '@/context/statsContext/statsContext'
import { useMemo } from 'react'

export const useExpenseStatisticsCalculator = () => {
  const { expenseStatistics } = useStatistics()

  const EXPENSE_STATISTICS_DATA = useMemo(() => {
    return {
      labels: expenseStatistics.labels,
      datasets: expenseStatistics.datasets,
      backgroundColor: expenseStatistics.colors,
      border: 6,
      cutout: '0',
      label: 'In a %',
      padding: 5,
    }
  }, [expenseStatistics])
  return { EXPENSE_STATISTICS_DATA }
}
