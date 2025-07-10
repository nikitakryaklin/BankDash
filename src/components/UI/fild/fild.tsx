import styles from './fild.module.scss'
import { forwardRef, Ref } from 'react'
import { IFild } from './fild.interface'
import clsx from 'clsx'

export const Fild = forwardRef(
  (
    { title, error, className, type = 'text', ...inputProps }: IFild,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={clsx(styles.wrapper, !!error && styles.error)}>
        {title && <legend className={styles.title}>{title}</legend>}
        <div className={clsx(styles.input, className)}>
          <input type={type} ref={ref} {...inputProps} />
        </div>
      </div>
    )
  }
)
