import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './DebitAndCredit.module.scss'
import { NotEnougtData } from '../NotEnougtData/NotEnougtData'
import { BarChart } from '../Chart/Bar/Bar-chart'
import { useDebitAndCreditCalculator } from './useDebitAndCreditCalculator'

const DebitAndCredit = () => {
  const { DEBIT_AND_CREDIT_DATA } = useDebitAndCreditCalculator()

  return (
    <div className={styles.wrapper}>
      <h2>Debit & Credit Overview</h2>
      <CardWrapper>
        <BarChart chartData={DEBIT_AND_CREDIT_DATA} />
        {/* <NotEnougtData /> */}
      </CardWrapper>
    </div>
  )
}

export default DebitAndCredit
