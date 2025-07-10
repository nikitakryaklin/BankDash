import React, { HTMLProps } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'
import { Loader } from '../Loader/loader'

interface IButton extends HTMLProps<HTMLButtonElement> {
  text: string
  isPending: boolean
  color?: string
}

export const Button = ({
  text,
  className,
  isPending,
  type,
  color = '#fff',
  ...res
}: IButton) => {
  return (
    <button
      className={clsx(styles.button, className, isPending && styles.disabled)}
      disabled={isPending}
      {...res}
    >
      {!isPending && text}
      {isPending && <Loader color={color} />}
    </button>
  )
}
