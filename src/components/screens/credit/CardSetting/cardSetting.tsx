import styles from '../CreditPage.module.scss'

import { CARD_SETTINGS_DATA } from './CreditPage.data'
import { NotEnougtData } from '@/components/UI/NotEnougtData/NotEnougtData'

export function CardSetting() {
  if (!CARD_SETTINGS_DATA) {
    return <NotEnougtData />
  }

  return (
    <>
      {CARD_SETTINGS_DATA.map((el) => (
        <div key={el.id} className={styles.settings_item}>
          <div className={styles.icon} style={{ background: `${el.color}3a` }}>
            {el.icon}
          </div>
          <div className={styles.info}>
            <h3>{el.title}</h3>
            <p>{el.text}</p>
          </div>
        </div>
      ))}
    </>
  )
}
