'use client'

import {
  useEffect,
  useRef,
  useState,
  type HTMLProps,
  type PropsWithChildren,
} from 'react'
import styles from './ElementWrapper.module.scss'
import clsx from 'clsx'

export const ElementWrapper = ({
  children,
  className,
  id,
  ...props
}: PropsWithChildren<HTMLProps<HTMLDivElement>>) => {
  const [isFind, setIsFind] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  let timeOut: NodeJS.Timeout

  useEffect(() => {
    if (ref.current && window.location.hash === `#${id}`) {
      window.history.replaceState(null, '', window.location.pathname)
      setIsFind(true)

      timeOut = setTimeout(() => {
        setIsFind(false)
      }, 2000)
    }
  }, [])

  return (
    <div
      id={id}
      className={clsx(className, isFind && styles.isFind)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
