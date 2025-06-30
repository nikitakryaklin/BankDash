import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import { NotEnougtData } from '../NotEnougtData/NotEnougtData'
import styles from './WeeklyActivity.module.scss'
import { BarChart } from '../Chart/Bar/Bar-chart'
import { WEEKLY_ACTIVITY_DATA } from './WeeklyActivity.data'
// import { BarChart } from 'lucide-react'

const WeeklyActivity = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Weekly Activity</h2>
      <CardWrapper className={styles.card}>
        {/* <NotEnougtData /> */}
        <BarChart chartData={{ ...WEEKLY_ACTIVITY_DATA }} />
      </CardWrapper>
    </div>
  )
}

export default WeeklyActivity
