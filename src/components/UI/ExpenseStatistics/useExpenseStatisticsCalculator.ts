import { TRANSACTIONS } from '@/config/constants'
import { ITransaction } from '@/types/Transactions.type'
import { useMemo } from 'react'

interface IData {
  dataset: number
  color: string
}

const COLORS: Record<string, string> = {
  Products: '#A8D86D',
  Transport: '#FC7900',
  Utilities: '#5A91C5',
  CommunicationsAndInternet: '#343C6A',
  Entertainment: '#00B894',
  Health: '#C56FC5',
  Education: '#FF6B6B',
  Shopping: '#00A8FF',
  Travel: '#8868FF',
  Subscriptions: '#FA00FF',
  Gifts: '#5B82E6',
  Income: '#FF7855',
  BonusesAndCashback: '#37B24D',
  Investments: '#4DA3D9',
  Other: '#FFBB38',
  Send: '#BDBDBD',
}

export const useExpenseStatisticsCalculator = (
  transactions: ITransaction[]
) => {
  const EXPENSE_STATISTICS_DATA = useMemo(() => {
    const data: Record<string, IData> = {}
    transactions?.forEach((el) => {
      if (el.type === TRANSACTIONS.type.outgoing) {
        if (!data[el.category]) {
          data[el.category] = { dataset: el.amount, color: COLORS[el.category] }
        } else {
          data[el.category].dataset += el.amount
        }
      }
    })

    console.log(data)
    const labels = Object.keys(data)
    const dataset = Object.values(data).map((el) => el.dataset)
    const colors = Object.values(data).map((el) => el.color)

    return {
      labels: labels,
      datasets: dataset,
      backgroundColor: colors,
      border: 6,
      cutout: '0',
      label: 'In a %',
      padding: 5,
    }
  }, [transactions])
  return { EXPENSE_STATISTICS_DATA }
}
