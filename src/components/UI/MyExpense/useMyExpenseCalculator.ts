import { DAYS, TRANSACTIONS } from '@/config/constants'
import { ITransaction } from '../AllTransactions/AllTransactions.interface'
import { useMemo } from 'react'

export const useMyExpenseCalculator = (transactions: ITransaction[]) => {
  const MY_EXPENSE_DATA = useMemo(() => {
    const DATA_MAP = new Map()
    transactions?.forEach((el) => {
      if (el.type === TRANSACTIONS.type.outgoing) {
        const date = new Date(el.date)
        const isoDate = date.toISOString().split('T')[0]
        // const day = days[date.getDay()]
        const label = date.toLocaleDateString('ru-Ru', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
        })

        // DATA_MAP.set(dayKey, (DATA_MAP.get(dayKey) || 0) + Number(el.amount))
        if (!DATA_MAP.has(isoDate)) {
          DATA_MAP.set(isoDate, { label, amount: 0 })
        } else {
          DATA_MAP.get(isoDate).amount += el.amount
        }
      }
      // while (DATA_MAP.size > 7) {
      //   const first = DATA_MAP.keys().next().value
      //   console.log('dsa')
      //   DATA_MAP.delete(first!)
      // }
    })

    const sorted = [...DATA_MAP.entries()].sort(([a], [b]) =>
      a.localeCompare(b)
    )
    // const lastWeek = sorted.slice(-7)
    console.log(transactions)
    return {
      isTitle: false,
      isLegend: false,
      isGrid: false,
      labels: sorted.map(([, entry]) => entry.label),
      // labels: Array.from(DATA_MAP.keys()),
      datasets: [
        {
          label: 'Dataset 2',
          data: sorted.map(([, entry]) => entry.amount),
          // data: Array.from(DATA_MAP.values()),
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

// if (!DATA[day]) {
//           DATA[day] = Number(el.amount)
//         } else {
//           DATA[day] += Number(el.amount)
//         }
