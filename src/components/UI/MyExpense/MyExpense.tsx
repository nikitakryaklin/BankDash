'use client'

import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './MyExpense.module.scss'
import { NotEnougtData } from '../NotEnougtData/NotEnougtData'
import { BarChart } from '../Chart/Bar/Bar-chart'
import { MY_EXPENSE_DATA } from './MyExpense.data'

export const MyExpense = () => {
  return (
    <div className={styles.wrapper}>
      <h2>My Expense</h2>
      <CardWrapper>
        {/* <NotEnougtData /> */}
        <BarChart chartData={MY_EXPENSE_DATA} />
      </CardWrapper>
    </div>
  )
}
