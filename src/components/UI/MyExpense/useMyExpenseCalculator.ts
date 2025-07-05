import { DAYS, TRANSACTIONS } from '@/config/constants'
import { ITransaction } from '../AllTransactions/AllTransactions.interface'
import { useMemo } from 'react'
import { useDateTranscript } from '@/hooks/useDateTranscript'

export const useMyExpenseCalculator = (transactions: ITransaction[]) => {
  const MY_EXPENSE_DATA = useMemo(() => {
    const DATA_MAP = new Map()
    transactions?.forEach((el) => {
      if (el.type === TRANSACTIONS.type.outgoing) {
        const { day, isoDate: date } = useDateTranscript(el.date)

        if (!DATA_MAP.has(date)) {
          DATA_MAP.set(date, { day, amount: 0 })
        } else {
          DATA_MAP.get(date).amount += el.amount
        }
      }
    })
    const sorted = [...DATA_MAP.entries()].sort(([a], [b]) =>
      a.localeCompare(b)
    )
    return {
      isTitle: false,
      isLegend: false,
      isGrid: false,
      labels: sorted.map(([, entry]) => entry.day.slice(0, 3)),
      datasets: [
        {
          label: 'Dataset 2',
          data: sorted.map(([, entry]) => entry.amount),
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
  }, [transactions])

  return { MY_EXPENSE_DATA }
}
