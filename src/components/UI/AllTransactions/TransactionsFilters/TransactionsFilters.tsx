'use client'

import clsx from 'clsx'
import { TRANSACTIONS_DATA } from './TransactionsFilters.data'
import styles from './TransactionsFilters.module.scss'
import { useTransactionsFilters } from './useTransactionsFilters'

export interface IProps {
  filter: (type: string) => void
}

export const TransactionsFilters = ({ filter }: IProps) => {
  const { id, hendleClick } = useTransactionsFilters({ filter })

  return (
    <div className={styles.wrapper}>
      {TRANSACTIONS_DATA.map((tran) => (
        <button
          className={clsx(styles.button, tran.id === id && styles.isActive)}
          key={tran.id}
          onClick={() => {
            hendleClick(tran.id, tran.type)
          }}
        >
          {tran.title}
        </button>
      ))}
    </div>
  )
}
