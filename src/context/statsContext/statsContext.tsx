import { useTransactionsByDate } from '@/hooks/useTransactionsByDate'
import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from 'react'
import {
  IDebitAndCredit,
  IExpenseStatistics,
  IExpenseStatisticsData,
  IMyExpense,
  IWeeklyActivity,
} from './statsContext.interface'
import { CATEGORY_COLORS, TRANSACTIONS } from '@/config/constants'
import { ITransaction } from '@/types/Transactions.type'
import { useDateTranscript } from '@/hooks/useDateTranscript'

interface IStatisctics {
  expenseStatistics: IExpenseStatistics
  weeklyActivity: IWeeklyActivity
  myExpense: IMyExpense
  debitAndCredit: IDebitAndCredit
}

const StatsContext = createContext<IStatisctics | null>(null)

export default function StatsProvider({
  children,
}: PropsWithChildren<unknown>) {
  const { data: transactions } = useTransactionsByDate()

  const staticticsData = useMemo(() => {
    // bar
    const weeklyActivity = new Map()
    const debitAndCredit = new Map()

    // circle
    const expenseStatistics: Record<string, IExpenseStatisticsData> = {}

    transactions?.forEach((el: ITransaction) => {
      const { day, isoDate: date } = useDateTranscript(el.date)

      if (!weeklyActivity.has(date)) {
        if (el.type === TRANSACTIONS.type.outgoing) {
          weeklyActivity.set(date, {
            day,
            data: { expenses: el.amount, replenishment: 0 },
          })
        }

        if (el.type === TRANSACTIONS.type.incoming) {
          weeklyActivity.set(date, {
            day,
            data: { expenses: 0, replenishment: el.amount },
          })
        }
        if (el.card.type === 'Debit') {
          debitAndCredit.set(date, {
            day,
            data: { debit: el.amount, credit: 0 },
          })
        }

        if (el.card.type === 'Credit') {
          debitAndCredit.set(date, {
            day,
            data: { debit: 0, credit: el.amount },
          })
        }
      } else {
        if (el.type === TRANSACTIONS.type.outgoing) {
          weeklyActivity.get(date).data.expenses += el.amount
        }

        if (el.type === TRANSACTIONS.type.incoming) {
          weeklyActivity.get(date).data.replenishment += el.amount
        }
        if (el.card.type === 'Debit') {
          debitAndCredit.get(date).data.debit += el.amount
        }

        if (el.card.type === 'Credit') {
          debitAndCredit.get(date).data.credit += el.amount
        }
      }

      // expense statistics
      if (el.type === TRANSACTIONS.type.outgoing) {
        if (!expenseStatistics[el.category]) {
          expenseStatistics[el.category] = {
            dataset: el.amount,
            color: CATEGORY_COLORS[el.category],
          }
        } else {
          expenseStatistics[el.category].dataset += el.amount
        }
      }
    })

    const weeklyActivitySorted = [...weeklyActivity.entries()].sort(
      ([a], [b]) => a.localeCompare(b)
    )

    const labelDays = weeklyActivitySorted.map(([, el]) => el.day.slice(0, 3))
    const expenses = weeklyActivitySorted.map(([, el]) => el.data.expenses)

    const debitAndCreditSorted = [...debitAndCredit.entries()].sort(
      ([a], [b]) => a.localeCompare(b)
    )

    const debit = debitAndCreditSorted.map(([, el]) => el.data.debit)
    const credit = debitAndCreditSorted.map(([, el]) => el.data.credit)

    return {
      expenseStatistics: {
        labels: Object.keys(expenseStatistics),
        datasets: Object.values(expenseStatistics).map((el) => el.dataset),
        colors: Object.values(expenseStatistics).map((el) => el.color),
      },

      weeklyActivity: {
        labels: labelDays,
        expenses: expenses,
        replenishment: weeklyActivitySorted.map(
          ([, el]) => el.data.replenishment
        ),
      },

      myExpense: {
        labels: labelDays,
        expenses: expenses,
      },

      debitAndCredit: {
        labels: labelDays,
        debit: debit,
        credit: credit,
      },
    }
  }, [transactions])

  return (
    <StatsContext.Provider value={staticticsData}>
      {children}
    </StatsContext.Provider>
  )
}

export const useStatistics = () => {
  const context = useContext(StatsContext)
  if (!context) {
    throw new Error('useStatistics must be used within an StatsProvider')
  }
  return context
}
