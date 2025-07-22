import styles from './ServicesPage.module.scss'
import { ElementWrapper } from '@/components/loayout/ElementWrapper/ElementWrapper'
import { ServiceList } from './serviceList'
import { WidgetBlock } from './WidgetBlock'

export const ServicesPage = () => {
  return (
    <div className={styles.wrapper}>
      <WidgetBlock />

      <ElementWrapper id="bank_services_list">
        <h2>Bank Services List</h2>
        <div className={styles.listWrapper}>
          <ServiceList />
        </div>
      </ElementWrapper>
    </div>
  )
}
