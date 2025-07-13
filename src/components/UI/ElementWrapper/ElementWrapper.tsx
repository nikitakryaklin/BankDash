'use client'

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type HTMLProps,
  type PropsWithChildren,
} from 'react'
import styles from './ElementWrapper.module.scss'
import clsx from 'clsx'
import { useHashAnchor } from '@/hooks/useHashAnchor'

export const ElementWrapper = ({
  children,
  className,
  id,
  ...props
}: PropsWithChildren<HTMLProps<HTMLDivElement>>) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { isFind } = useHashAnchor(ref, id)

  return (
    <div
      id={id}
      className={clsx(className, isFind && styles.isFind)}
      ref={ref}
      style={{ scrollMarginTop: '30px' }}
      {...props}
    >
      {children}
    </div>
  )
}
