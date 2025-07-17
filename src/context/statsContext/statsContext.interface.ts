export interface IExpenseStatisticsData {
  dataset: number
  color: string
}

export interface IExpenseStatistics {
  labels: string[]
  datasets: number[]
  colors: string[]
}

export interface IWeeklyActivity {
  labels: string[]
  expenses: number[]
  replenishment: number[]
}

export interface IMyExpense {
  labels: string[]
  expenses: number[]
}

export interface IDebitAndCredit {
  labels: string[]
  debit: number[]
  credit: number[]
}
