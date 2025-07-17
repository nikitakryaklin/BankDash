import { useMemo } from 'react'
import { useStatistics } from '@/context/statsContext/statsContext'

export const useMyExpenseCalculator = () => {
  const { myExpense } = useStatistics()

  const MY_EXPENSE_DATA = useMemo(() => {
    return {
      isTitle: false,
      isLegend: false,
      isGrid: false,
      labels: myExpense.labels,
      datasets: [
        {
          label: 'Dataset 2',
          data: myExpense.expenses,
          backgroundColor: '#EDF0F7',
          borderRadius: 10,
          borderSkipped: false,
          borderWidth: 7,
          borderColor: '#EDF0F7',
          hoverBorderWidth: 6,
          hoverBackgroundColor: '#16DBCC',
          hoverBorderColor: '#16DBCC',
        },
      ],
    }
  }, [myExpense])

  return { MY_EXPENSE_DATA }
}
