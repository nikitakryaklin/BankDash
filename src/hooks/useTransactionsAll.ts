import { transactionsService } from '@/service/transaction.service'
import { IUser } from '@/types/User.type'
import { useQuery } from '@tanstack/react-query'

export const useTransactionsAll = (
  user: IUser | undefined,
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

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['transactions', page, filter, !!cardNumber],

    queryFn: () => transactionsService.getAll(result, page, filter),

    enabled: result.length > 0,
  })
  return { data, isLoading: isLoading, isSuccess }
}
