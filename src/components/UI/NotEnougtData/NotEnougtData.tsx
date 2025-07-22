import { ReactNode } from 'react'
import styles from './NotEnougtData.module.scss'

export const NotEnougtData = ({
  text = 'Not enougt data to display statistics',
  link,
}: {
  text?: string
  link?: ReactNode
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>{text}</h2>
      {link}
    </div>
  )
}
