'use client'

import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './AllTransactions.module.scss'
import { NotEnougtData } from '../NotEnougtData/NotEnougtData'
import { TransactionsFilters } from './TransactionsFilters/TransactionsFilters'
import { TransactionsCard } from './TransactionsCard/TransactionsCard'
import { Pagination } from '../Pagination/Pagination'
import { useTransactionData } from './useTransactionData'
import { useTransactionState } from './useTransactionState'
import { Loader } from '../Loader/loader'

export const AllTransactions = ({ cardNumber }: { cardNumber?: string }) => {
  const { filfer, page, setFilter, setPage } = useTransactionState()
  const { isLoading, transList, pagination } = useTransactionData(
    page,
    filfer,
    cardNumber
  )

  return (
    <div className={styles.wrapper}>
      <h2>Recent Transactions</h2>

      <TransactionsFilters filter={setFilter} />

      <CardWrapper className={styles.card}>
        {transList?.length === 0 && !isLoading && <NotEnougtData />}

        <TransactionsCard isLoading={isLoading} data={transList} />
      </CardWrapper>

      {pagination && (
        <Pagination
          page={pagination.page}
          pageCount={pagination.pageCount}
          pageSize={pagination.pageSize}
          total={pagination.total}
          setPage={setPage}
        />
      )}
    </div>
  )
}
