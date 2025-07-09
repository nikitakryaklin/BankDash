'use client'

import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './MyExpense.module.scss'
import { BarChart } from '../Chart/Bar/Bar-chart'
import { useTransactionsByDate } from '@/hooks/useTransactionsByDate'
import { useMyExpenseCalculator } from './useMyExpenseCalculator'

export const MyExpense = () => {
  const { data: transactions, isLoading } = useTransactionsByDate()

  const { MY_EXPENSE_DATA } = useMyExpenseCalculator(transactions)
  return (
    <div className={styles.wrapper}>
      <h2>My Expense</h2>
      <CardWrapper>
        <BarChart chartData={MY_EXPENSE_DATA} />
      </CardWrapper>
    </div>
  )
}
