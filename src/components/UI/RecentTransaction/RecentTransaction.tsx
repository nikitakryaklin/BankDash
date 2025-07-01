'use client'
import { useEffect, useState } from 'react'
import styles from './RecentTransaction.module.scss'
import TransactionItem from './TransactionItem/TransactionItem'
import { useTransactions } from '@/hooks/useTransactions'
import { useQueryClient } from '@tanstack/react-query'
import { IUser } from '@/types/User.type'
import { ITransaction } from '@/types/Transactions.type'
import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import { NotEnougtData } from '../NotEnougtData/NotEnougtData'
import clsx from 'clsx'
import { Loader } from '../Loader/loader'

const RecentTransaction = ({
  title = 'Recent Transaction',
  className,
  flug = false,
}: {
  title?: string
  className?: string
  flug?: boolean
}) => {
  const user = useQueryClient().getQueryData(['user']) as IUser
  const { data, isLoading } = useTransactions(user, 3)
  return (
    <div className={clsx(styles.wrapper, className)}>
      <h2>{title}</h2>
      <CardWrapper className={styles.card}>
        {!isLoading && data ? (
          <>
            {data.map((trans: ITransaction) => (
              <TransactionItem
                title={trans.title}
                date={trans.date.toString()}
                type={trans.type}
                category={trans.category}
                amount={trans.amount}
                key={trans.id}
                flug={flug}
              />
            ))}
          </>
        ) : (
          <NotEnougtData />
        )}
        {isLoading ?? <Loader color="var(--text-color)" />}
      </CardWrapper>
    </div>
  )
}

export default RecentTransaction
