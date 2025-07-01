import { LucideLoaderCircle } from 'lucide-react'
import styles from './Loader.module.scss'

export const Loader = ({ color = '#718ebf' }: { color?: string }) => {
  return (
    <div className={styles.loader}>
      <LucideLoaderCircle style={{ fill: 'none', stroke: `${color}` }} />
    </div>
  )
}
