import styles from './fild.module.scss'
import { forwardRef, Ref } from 'react'
import { IFild } from './fild.interface'
import clsx from 'clsx'

const Fild = forwardRef(
  (
    { title, error, type = 'text', ...inputProps }: IFild,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={clsx(styles.wrapper, !!error && styles.error)}>
        {title && <legend className={styles.title}>{title}</legend>}
        <div className={styles.input}>
          <input type={type} ref={ref} {...inputProps} />
        </div>
      </div>
    )
  }
)

export default Fild
