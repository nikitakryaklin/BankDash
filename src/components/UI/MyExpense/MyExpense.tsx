'use client'

import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './MyExpense.module.scss'
import { NotEnougtData } from '../NotEnougtData/NotEnougtData'
import { BarChart } from '../Chart/Bar/Bar-chart'
import { useQueryClient } from '@tanstack/react-query'
import { IUser } from '@/types/User.type'
import { getDateByDays } from '@/utiles/getDateByDays'
import { useTransactionsByDate } from '@/hooks/useTransactionsByDate'
import { useMyExpenseCalculator } from './useMyExpenseCalculator'

const MyExpense = () => {
  const user = useQueryClient().getQueryData(['user']) as IUser
  const { data: transactions, isLoading } = useTransactionsByDate(
    user,
    getDateByDays(7)
  )

  if (!transactions && !isLoading) {
    return <NotEnougtData />
  }

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

export default MyExpense
