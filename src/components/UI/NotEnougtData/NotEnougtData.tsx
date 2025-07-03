import styles from './NotEnougtData.module.scss'

export const NotEnougtData = ({
  text = 'Not enougt data to display statistics',
}: {
  text?: string
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>{text}</h2>
    </div>
  )
}
