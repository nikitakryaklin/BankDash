import { useStatistics } from '@/context/statsContext/statsContext'
import { useMemo } from 'react'

export function useWeeklyActivityCalculator() {
  const { weeklyActivity } = useStatistics()

  const WEEKLY_ACTIVITY_DATA = useMemo(() => {
    return {
      isTitle: false,
      isLegend: true,
      isGrid: true,
      labels: weeklyActivity.labels,
      datasets: [
        {
          label: 'Expenses',
          data: weeklyActivity.expenses,
          backgroundColor: '#1814F3',
          borderRadius: 25,
          borderSkipped: false,
          borderWidth: 7,
          hoverBorderWidth: 6,
          borderColor: '#fff',
          hoverBackgroundColor: '#1814F3',
          hoverBorderColor: '#fff',
        },
        {
          label: 'Replenishments',
          data: weeklyActivity.replenishment,
          backgroundColor: '#16DBCC',
          borderRadius: 25,
          borderSkipped: false,
          borderWidth: 7,
          borderColor: '#fff',
          hoverBorderWidth: 6,
          hoverBackgroundColor: '#16DBCC',
        },
      ],
    }
  }, [weeklyActivity])

  return { WEEKLY_ACTIVITY_DATA }
}
