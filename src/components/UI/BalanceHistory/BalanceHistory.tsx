import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import { NotEnougtData } from '../NotEnougtData/NotEnougtData'
import styles from './BalanceHistory.module.scss'
import { BALANCE_HISTORY_DATA } from './BalanceHistory.data'
import { LineChart } from '../Chart/Line/Line-chart'

const BalanceHistory = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Balance History</h2>
      <CardWrapper className={styles.card}>
        <LineChart chartData={BALANCE_HISTORY_DATA} isPlugin={true} />
        {/* <NotEnougtData /> */}
      </CardWrapper>
    </div>
  )
}

export default BalanceHistory
