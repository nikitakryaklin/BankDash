import { TRANSACTIONS } from '@/config/constants'
import { useDateTranscript } from '@/hooks/useDateTranscript'
import { useTransactionsByDate } from '@/hooks/useTransactionsByDate'
import { ITransaction } from '@/types/Transactions.type'
import { useMemo } from 'react'

export const useDebitAndCreditCalculator = () => {
  const { data: transactions } = useTransactionsByDate()

  const DEBIT_AND_CREDIT_DATA = useMemo(() => {
    const result = new Map()
    transactions?.forEach((el: ITransaction) => {
      if (!el.card) {
        return null
      }

      if (el.type === TRANSACTIONS.type.outgoing) {
        const { day, isoDate: date } = useDateTranscript(el.date)
        if (!result.has(date)) {
          if (el.card.type === 'Debit') {
            result.set(date, {
              day,
              data: { debit: el.amount, credit: 0 },
            })
          }

          if (el.card.type === 'Credit') {
            result.set(date, {
              day,
              data: { debit: 0, credit: el.amount },
            })
          }
        } else {
          if (el.card.type === 'Debit') {
            result.get(date).data.debit += el.amount
          }

          if (el.card.type === 'Credit') {
            result.get(date).data.credit += el.amount
          }
        }
      }
    })

    const sorted = [...result.entries()].sort(([a], [b]) => a.localeCompare(b))

    const labels = sorted.map(([, el]) => el.day.slice(0, 3))
    const debit = sorted.map(([, el]) => el.data.debit)
    const credit = sorted.map(([, el]) => el.data.credit)

    console.log(sorted)
    return {
      isTitle: false,
      isLegend: true,
      isGrid: false,
      title: '$7,560 Debited & $5,420 Credited in this Week',
      labels: labels,
      datasets: [
        {
          label: 'Debit',
          data: debit,
          backgroundColor: '#1A16F3',
          borderRadius: 14,
          borderSkipped: false,
          borderWidth: 4,
          borderColor: '#fff',
          hoverBorderColor: '#EDF0F7',
        },
        {
          label: 'Credit',
          data: credit,
          backgroundColor: '#FCAA0B',
          borderRadius: 14,
          borderSkipped: false,
          borderWidth: 4,
          borderColor: '#fff',
          hoverBorderColor: '#EDF0F7',
        },
      ],
    }
  }, [transactions])
  return { DEBIT_AND_CREDIT_DATA }
}
