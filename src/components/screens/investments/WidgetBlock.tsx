import styles from './InvestmentsPage.module.scss'

import { Widget } from '@/components/UI/Widget/Widget'
import { WIDGET_INVEST_DATA } from './InvestmentsPage.data'

export function WidgetBlock() {
  return (
    <div className={styles.widget_wrapper}>
      {WIDGET_INVEST_DATA.map((el) => (
        <Widget
          key={el.id}
          id={el.HTMLId}
          title={el.title}
          text={el.text}
          color={el.color}
        >
          {el.icon}
        </Widget>
      ))}
    </div>
  )
}
