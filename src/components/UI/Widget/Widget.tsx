'use client'

import clsx from 'clsx'
import styles from './Widget.module.scss'

import { useEffect, useRef, useState, type PropsWithChildren } from 'react'
import { useHashAnchor } from '@/hooks/useHashAnchor'

interface IProp {
  title: string
  text: string
  color: string
  className?: string
  id: string
}

export const Widget = ({
  children,
  title,
  text,
  color,
  className,
  id,
}: PropsWithChildren<IProp>) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const { isFind } = useHashAnchor(ref, id)

  return (
    <div
      className={clsx(styles.wrapper, className, isFind && styles.isFind)}
      id={id}
      ref={ref}
      style={{ scrollMarginTop: '30px' }}
    >
      <div className={styles.content}>
        <div className={styles.icon} style={{ background: `${color}3a` }}>
          {children}
        </div>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
