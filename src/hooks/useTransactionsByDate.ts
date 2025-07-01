import { transactionsService } from '@/service/transaction.service'
import { IUser } from '@/types/User.type'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export const useTransactionsByDate = (user: IUser, date: string) => {
  const result: string[] = []
  user?.cards?.forEach((card) => result.push(card.number))

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['transactions', 'byDate'],
    queryFn: () => transactionsService.getByDate(result, date),
    select: (data) => data.data,
  })

  return { data, isLoading, isSuccess }
}
