import { BarChart } from '../Chart/Bar/Bar-chart'
import { useDebitAndCreditCalculator } from './useDebitAndCreditCalculator'

export const DebitAndCreditChart = () => {
  const { DEBIT_AND_CREDIT_DATA } = useDebitAndCreditCalculator()

  return <BarChart chartData={DEBIT_AND_CREDIT_DATA} />
}
