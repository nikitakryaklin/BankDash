import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './WeeklyActivity.module.scss'
import { BarChart } from '../Chart/Bar/Bar-chart'
import { useWeeklyActivityCalculator } from './useWeeklyActivityCalculator'
import { ElementWrapper } from '../ElementWrapper/ElementWrapper'

export const WeeklyActivityChart = () => {
  const { WEEKLY_ACTIVITY_DATA } = useWeeklyActivityCalculator()

  return (
    <ElementWrapper id="weekly_activity" className={styles.wrapper}>
      <h2>Weekly Activity</h2>
      <CardWrapper className={styles.card}>
        <BarChart chartData={{ ...WEEKLY_ACTIVITY_DATA }} />
      </CardWrapper>
    </ElementWrapper>
  )
}
