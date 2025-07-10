import { transactionsService } from '@/service/transaction.service'
import { IUser } from '@/types/User.type'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export const useTransactionsAll = (
  user: IUser,
  page: number,
  filter: string,
  cardNumber?: string
) => {
  const result: string[] = []

  if (!cardNumber) {
    user?.cards?.map((card) => result.push(card.number))
  } else {
    result.push(cardNumber)
  }

  const { data, isPending, isSuccess } = useQuery({
    queryKey: ['transactions', page, filter, !!cardNumber],
    queryFn: () => transactionsService.getAll(result, page, filter),
    enabled: result.length > 0,
  })
  return { data, isLoading: isPending, isSuccess }
}
