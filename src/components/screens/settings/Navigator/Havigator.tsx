import styles from '../SettingsPage.module.scss'
import clsx from 'clsx'

import { CONTROLES } from './Navigator.data'
import { useSettingViewStore } from '@/store/useSettingViewStore'

export function Navigator() {
  const { viewElement, setViewElement } = useSettingViewStore()

  return (
    <div className={styles.header}>
      <ul>
        {CONTROLES.map((el) => (
          <li
            className={clsx(
              styles.header_item,
              el.id === viewElement && styles.isHeaderActive
            )}
            onClick={() => setViewElement(el.id)}
            key={el.id}
          >
            {el.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
