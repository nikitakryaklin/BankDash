import { transactionsService } from '@/service/transaction.service'
import { IUser } from '@/types/User.type'
import { getDateByDays } from '@/utiles/getDateByDays'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export const useTransactionsByDate = (day = 6) => {
  const user = useQueryClient().getQueryData(['user']) as IUser

  const result: string[] = []
  user?.cards?.forEach((card) => result.push(card.number))

  const date = getDateByDays(day)

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['transactions', 'byDate'],
    queryFn: () => transactionsService.getByDate(result, date),
    select: (data) => data.data,
  })

  return { data, isLoading, isSuccess }
}
