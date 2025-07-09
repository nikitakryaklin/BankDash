import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './WeeklyActivity.module.scss'
import { BarChart } from '../Chart/Bar/Bar-chart'
import { useWeeklyActivityCalculator } from './useWeeklyActivityCalculator'

export const WeeklyActivity = () => {
  const { WEEKLY_ACTIVITY_DATA, isLoading } = useWeeklyActivityCalculator()

  return (
    <div className={styles.wrapper}>
      <h2>Weekly Activity</h2>
      <CardWrapper className={styles.card}>
        <BarChart chartData={{ ...WEEKLY_ACTIVITY_DATA }} />
      </CardWrapper>
    </div>
  )
}
