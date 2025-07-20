import { BALANCE_HISTORY_DATA } from './BalanceHistory.data'
import { LineChart } from '../Chart/Line/Line-chart'
import { useTransactionsByDate } from '@/hooks/useTransactionsByDate'
import { useBalanceHistoryCalculator } from './useBalanceHistoryCalculator'

export const BalanceHistoryChart = () => {
  const { data: transactions, isLoading } = useTransactionsByDate()

  const { labels, data } = useBalanceHistoryCalculator(transactions)

  return (
    <LineChart
      chartData={{
        ...BALANCE_HISTORY_DATA,
        labes: labels,
        data: data,
      }}
      isPlugin={true}
    />
  )
}
