import { Widget } from '@/components/UI/Widget/Widget'
import { WidgetWrapper } from '@/components/UI/widgetWrapper/widgetWrapper'
import { WIDGET_LOANS_DATA } from './LoansPage.data'
import styles from './LoansPage.module.scss'

export const WidgetBlock = () => {
  return (
    <>
      <WidgetWrapper>
        {WIDGET_LOANS_DATA.map((el) => (
          <Widget
            id={el.HTMLId}
            className={styles.widget}
            text={el.text}
            title={el.title}
            color={el.color}
            key={el.id}
          >
            {el.icon}
          </Widget>
        ))}
      </WidgetWrapper>
    </>
  )
}
