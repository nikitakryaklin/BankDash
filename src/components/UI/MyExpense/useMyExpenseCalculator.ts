import { TRANSACTIONS } from '@/config/constants'
import { ITransaction } from '../AllTransactions/AllTransactions.interface'
import { useMemo } from 'react'

export const useMyExpenseCalculator = (transactions: ITransaction[]) => {
  const MY_EXPENSE_DATA = useMemo(() => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const DATA: Record<string, number> = {}
    transactions?.forEach((el) => {
      if (el.type === TRANSACTIONS.type.outgoing) {
        const date = new Date(el.date)
        const day = days[date.getDay() - 1]
        if (!DATA[day]) {
          DATA[day] = Number(el.amount)
        } else {
          DATA[day] += Number(el.amount)
        }
      }
    })
    return {
      isTitle: false,
      isLegend: false,
      isGrid: false,
      labels: Object.keys(DATA),
      datasets: [
        {
          label: 'Dataset 2',
          data: Object.values(DATA),
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
