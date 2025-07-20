import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './WeeklyActivity.module.scss'
import { ElementWrapper } from '../ElementWrapper/ElementWrapper'
import dynamic from 'next/dynamic'
import { Loader } from '../Loader/loader'

const DynamicStatsProvider = dynamic(
  () => import('@/context/statsContext/statsContext').then((D) => D.default),
  { ssr: false, loading: () => <Loader /> }
)
const DynamicWeeklyActivityChart = dynamic(
  () => import('./WeeklyActivityChart').then((D) => D.WeeklyActivityChart),
  { ssr: false, loading: () => <Loader /> }
)

export const WeeklyActivity = () => {
  return (
    <ElementWrapper id="weekly_activity" className={styles.wrapper}>
      <h2>Weekly Activity</h2>
      <CardWrapper className={styles.card}>
        <DynamicStatsProvider>
          <DynamicWeeklyActivityChart />
        </DynamicStatsProvider>
      </CardWrapper>
    </ElementWrapper>
  )
}
