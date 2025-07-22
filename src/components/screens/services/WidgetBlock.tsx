import styles from './ServicesPage.module.scss'

import { WidgetWrapper } from '@/components/loayout/widgetWrapper/widgetWrapper'
import { WIDGET_DATA } from './ServicesPage.data'
import { Widget } from '@/components/UI/Widget/Widget'

export const WidgetBlock = () => {
  return (
    <WidgetWrapper>
      {WIDGET_DATA.map((el) => (
        <Widget
          id=""
          key={el.id}
          title={el.text}
          text={el.title}
          color={el.color}
          className={styles.widget}
        >
          {el.icon}
        </Widget>
      ))}
    </WidgetWrapper>
  )
}
