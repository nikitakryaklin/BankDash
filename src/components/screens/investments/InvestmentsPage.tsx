'use client'

import styles from './InvestmentsPage.module.scss'
import { WidgetBlock } from './WidgetBlock'
import { ChartBlock } from './ChartBlock'
import { MyInvestment } from './MyInvestment'
import { TrendingStock } from './TrendingStock'

export const InvestmentsPage = () => {
  return (
    <div className={styles.page}>
      <WidgetBlock />

      <ChartBlock />

      <div className={styles.invest_wrapper}>
        <MyInvestment />

        <TrendingStock />
      </div>
    </div>
  )
}
