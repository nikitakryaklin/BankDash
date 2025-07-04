import { CONSTANTS, DAYS, TRANSACTIONS } from '@/config/constants'
import { ITransaction } from '@/types/Transactions.type'
import { useMemo } from 'react'

interface IData {
  expenses: number
  replenishments: number
}

export function useWeeklyActivityCalculator(transactions: ITransaction[]) {
  const result = useMemo(() => {
    let data: Record<string, IData> = {}

    transactions?.forEach((el) => {
      const date = new Date(el.date)
      const day = DAYS[date.getDay()]

      if (!data[day]) {
        data[day] = { expenses: 0, replenishments: 0 }

        if (el.type === TRANSACTIONS.type.incoming) {
          data[day].replenishments += Number(el.amount)
        } else {
          data[day].expenses += Number(el.amount)
        }
      } else {
        if (el.type === TRANSACTIONS.type.incoming) {
          data[day].replenishments += Number(el.amount)
        } else {
          data[day].expenses += Number(el.amount)
        }
      }
    })
    const labels = Object.keys(data)
    return {
      isTitle: false,
      isLegend: true,
      isGrid: true,
      labels: Object.keys(data),
      datasets: [
        {
          label: 'Expenses',
          data: labels.map((label) => data[label].expenses),
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
          data: labels.map((label) => data[label].replenishments),
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
  }, [transactions])

  return { result }
}
