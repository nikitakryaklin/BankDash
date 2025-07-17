import StatsProvider from '@/context/statsContext/statsContext'
import { DebitAndCreditChart } from './DebitAndCreditChart'

export const DebitAndCredit = () => {
  return (
    <StatsProvider>
      <DebitAndCreditChart />
    </StatsProvider>
  )
}
