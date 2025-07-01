import { DAYS, TRANSACTIONS } from '@/config/constants'
import { useUserBalance } from '@/hooks/useUserBalance'
import { ITransaction } from '@/types/Transactions.type'
import { useMemo } from 'react'

interface IData {
  day: string[]
  balance: number[]
}

export const useBalanceHistoryCalculator = (transactions: ITransaction[]) => {
  const { balance } = useUserBalance()

  const data = useMemo(() => {
    const treansactions_reverse = transactions?.reverse()
    let local_balance = balance

    let DATA: IData = {
      day: [],
      balance: [],
    }

    treansactions_reverse?.forEach((el: ITransaction) => {
      const date = new Date(el.date)
      const day = DAYS[date.getDay() - 1]

      if (el.type !== TRANSACTIONS.type.cancelled) {
        if (el.type === TRANSACTIONS.type.incoming) {
          DATA.day.push(day)
          DATA.balance.push(Number(local_balance) - Number(el.amount))
          local_balance -= Number(el.amount)
        } else {
          DATA.day.push(day)
          DATA.balance.push(Number(local_balance) + Number(el.amount))
          local_balance += Number(el.amount)
        }
      }
    })

    return { labels: DATA.day.reverse(), data: DATA.balance.reverse() }
  }, [transactions])

  return { labels: data.labels, data: data.data }
}
