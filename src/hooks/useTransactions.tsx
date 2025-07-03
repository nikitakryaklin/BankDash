import { transactionsService } from '@/service/transaction.service'
import { IUser } from '@/types/User.type'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export const useTransactions = (user: IUser, limit: number) => {
  const result: string[] = []
  user?.cards?.map((card) => result.push(card.number))
  console.log(!!user && result.length > 0, 'useTrans')
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['transactions', limit],
    queryFn: () => transactionsService.get(result, limit),
    enabled: result.length > 0,
    select: (data) => data.data,
  })

  return { data, isLoading, isSuccess }
}
