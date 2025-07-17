'use client'

import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './MyExpense.module.scss'
import { BarChart } from '../Chart/Bar/Bar-chart'
import { useMyExpenseCalculator } from './useMyExpenseCalculator'
import { ElementWrapper } from '../ElementWrapper/ElementWrapper'

export const MyExpenseChart = () => {
  const { MY_EXPENSE_DATA } = useMyExpenseCalculator()

  if (!MY_EXPENSE_DATA.labels) {
    return <div>u lox</div>
  }

  return (
    <ElementWrapper className={styles.wrapper} id="my_expense">
      <h2>My Expense</h2>
      <CardWrapper>
        <BarChart chartData={MY_EXPENSE_DATA} />
      </CardWrapper>
    </ElementWrapper>
  )
}
