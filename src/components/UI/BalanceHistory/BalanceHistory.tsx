import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './BalanceHistory.module.scss'
import { ElementWrapper } from '../../loayout/ElementWrapper/ElementWrapper'
import dynamic from 'next/dynamic'
import { Loader } from '../Loader/loader'

const DynamicBalanceHistory = dynamic(
  () => import('./BalanceHistoryChart').then((D) => D.BalanceHistoryChart),
  { ssr: false, loading: () => <Loader /> }
)
export const BalanceHistory = () => {
  return (
    <ElementWrapper id="balance_history" className={styles.wrapper}>
      <h2>Balance History</h2>
      <CardWrapper className={styles.card}>
        <DynamicBalanceHistory />
      </CardWrapper>
    </ElementWrapper>
  )
}
