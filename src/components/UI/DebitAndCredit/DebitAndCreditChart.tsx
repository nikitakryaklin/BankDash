import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './DebitAndCredit.module.scss'
import { BarChart } from '../Chart/Bar/Bar-chart'
import { useDebitAndCreditCalculator } from './useDebitAndCreditCalculator'
import { ElementWrapper } from '../ElementWrapper/ElementWrapper'

export const DebitAndCreditChart = () => {
  const { DEBIT_AND_CREDIT_DATA } = useDebitAndCreditCalculator()

  return (
    <ElementWrapper id="debit_&_credit_overview" className={styles.wrapper}>
      <h2>Debit & Credit Overview</h2>
      <CardWrapper>
        <BarChart chartData={DEBIT_AND_CREDIT_DATA} />
      </CardWrapper>
    </ElementWrapper>
  )
}
