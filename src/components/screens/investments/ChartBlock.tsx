import styles from './InvestmentsPage.module.scss'

import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import { ElementWrapper } from '@/components/loayout/ElementWrapper/ElementWrapper'
import {
  YEARLY_TOTAL_INVESTMENTS_DATA,
  MONTHLY_REVENUE_DATA,
} from './InvestmentsPage.data'
import { LineChart } from '@/components/UI/Chart/Line/Line-chart'

export const ChartBlock = () => {
  return (
    <div className={styles.graf_wrapper}>
      <ElementWrapper id="yearly_total_investment">
        <h2>Yearly Total Investment</h2>
        <CardWrapper>
          <LineChart chartData={YEARLY_TOTAL_INVESTMENTS_DATA} />
        </CardWrapper>
      </ElementWrapper>

      <ElementWrapper id="monthly_revenue">
        <h2>Monthly Revenue</h2>
        <CardWrapper>
          <LineChart chartData={MONTHLY_REVENUE_DATA} />
        </CardWrapper>
      </ElementWrapper>
    </div>
  )
}
