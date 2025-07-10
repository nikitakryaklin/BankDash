import { forwardRef, Ref } from 'react'
import styles from './fild.module.scss'
import { IFild } from './fild.interface'
import clsx from 'clsx'

export const FildCheckBox = forwardRef(
  (
    { id, title, error, className, ...inputProps }: IFild & { error?: string },
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <label
        htmlFor={id}
        className={clsx(styles.selector, className, !!error && styles.isError)}
      >
        <span>{title}</span>
        <input
          type="radio"
          id={id}
          value={id}
          ref={ref}
          {...inputProps}
          hidden
        />
      </label>
    )
  }
)
