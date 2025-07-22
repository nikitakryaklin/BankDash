import dynamic from 'next/dynamic'
import { Loader } from '../Loader/loader'
import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './DebitAndCredit.module.scss'
import { ElementWrapper } from '../../loayout/ElementWrapper/ElementWrapper'

const DynamicStatsProvider = dynamic(
  () => import('@/context/statsContext/statsContext').then((D) => D.default),
  { ssr: false, loading: () => <Loader /> }
)
const DynamicDebitAndCreditChart = dynamic(
  () => import('./DebitAndCreditChart').then((D) => D.DebitAndCreditChart),
  { ssr: false, loading: () => <Loader /> }
)

export const DebitAndCredit = () => {
  return (
    <ElementWrapper id="debit_&_credit_overview" className={styles.wrapper}>
      <h2>Debit & Credit Overview</h2>
      <CardWrapper>
        <DynamicStatsProvider>
          <DynamicDebitAndCreditChart />
        </DynamicStatsProvider>
      </CardWrapper>
    </ElementWrapper>
  )
}
