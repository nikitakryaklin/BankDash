'use client'

import clsx from 'clsx'
import styles from './Modal.module.scss'

import type { PropsWithChildren, SyntheticEvent } from 'react'
import { createPortal } from 'react-dom'

interface IModal {
  isOpen: boolean
  onClose: () => void
  className?: string
}

export const Modal = ({
  children,
  isOpen,
  className,
  onClose,
}: PropsWithChildren<IModal>) => {
  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) {
    return null
  }
  if (!isOpen) {
    return null
  }

  const handleClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLDivElement
    if (!target.dataset.type) {
      return null
    }
    onClose()
  }

  return createPortal(
    <div className={styles.wrapper} onClick={handleClick} data-type="modal">
      <div className={clsx(styles.modal, !!className && className)}>
        <button onClick={onClose}>
          <span></span>
          <span></span>
        </button>
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    modalRoot
  )
}
