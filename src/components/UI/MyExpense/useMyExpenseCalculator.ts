import { useMemo } from 'react'
import { useStatistics } from '@/context/statsContext/statsContext'

export const useMyExpenseCalculator = () => {
  const { myExpense } = useStatistics()

  const MY_EXPENSE_DATA = useMemo(() => {
    //   const DATA_MAP = new Map()
    //   transactions?.forEach((el) => {
    //     if (el.type === TRANSACTIONS.type.outgoing) {
    //       const { day, isoDate: date } = useDateTranscript(el.date)

    //       if (!DATA_MAP.has(date)) {
    //         DATA_MAP.set(date, { day, amount: 0 })
    //       } else {
    //         DATA_MAP.get(date).amount += el.amount
    //       }
    //     }
    //   })
    //   const sorted = [...DATA_MAP.entries()].sort(([a], [b]) =>
    //     a.localeCompare(b)
    //   )

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
