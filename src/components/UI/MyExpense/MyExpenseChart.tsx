'use client'

import { BarChart } from '../Chart/Bar/Bar-chart'
import { useMyExpenseCalculator } from './useMyExpenseCalculator'

export const MyExpenseChart = () => {
  const { MY_EXPENSE_DATA } = useMyExpenseCalculator()

  return <BarChart chartData={MY_EXPENSE_DATA} />
}
