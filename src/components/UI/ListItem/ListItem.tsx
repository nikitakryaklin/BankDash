'use client'
import clsx from 'clsx'
import styles from './ListItem.module.scss'

import { useState, type PropsWithChildren, type ReactNode } from 'react'
import toast from 'react-hot-toast'
import { Modal } from '../Modal/Modal'

interface IProps {
  icon: ReactNode
  color: string
  isButton?: boolean
  className?: string
  modal?: ReactNode
}

export const ListItem = ({
  children,
  icon,
  color,
  isButton = true,
  className,
  modal,
}: PropsWithChildren<IProps>) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onClose = () => {
    setIsModalOpen(false)
  }

  const handleClick = () => {
    toast('View Details')
    setIsModalOpen(true)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon} style={{ background: `${color}3a` }}>
        {icon}
      </div>
      <div className={clsx(styles.info, className)}>{children}</div>
      {modal && (
        <Modal isOpen={isModalOpen} onClose={onClose}>
          {modal}
        </Modal>
      )}
      {isButton && <button onClick={handleClick}>View Details</button>}
    </div>
  )
}
