import { useTransactionsAll } from '@/hooks/useTransactionsAll'
import { IPagination } from '@/types/Pagination.type'
// import { ITransaction } from '@/types/Transactions.type'
import { IUser } from '@/types/User.type'
import { useQueryClient } from '@tanstack/react-query'
import { ITransaction } from './AllTransactions.interface'
import { useUser } from '@/hooks/useUser'

export const useTransactionData = (page: number, filfer: string) => {
  const { data: user } = useUser()
  const { data, isLoading } = useTransactionsAll(user, page, filfer)

  const transList = data?.data as ITransaction[]
  const pagination = data?.meta.pagination as IPagination

  return { isLoading, transList, pagination }
}
