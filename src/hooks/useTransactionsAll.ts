import { transactionsService } from '@/service/transaction.service'
import { IUser } from '@/types/User.type'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export const useTransactionsAll = (
  user: IUser,
  page: number,
  filter: string
) => {
  const result: string[] = []
  user?.cards?.map((card) => result.push(card.number))

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['transactions', page, filter],
    queryFn: () => transactionsService.getAll(result, page, filter),
    enabled: result.length > 0,
  })
  return { data, isLoading, isSuccess }
}
