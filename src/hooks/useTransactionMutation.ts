import { transactionsService } from '@/service/transaction.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useTransactionMutation = () => {
  const queryClient = useQueryClient()

  const createTransactionMutation = useMutation({
    mutationKey: ['create_transaction'],
    mutationFn: transactionsService.post,
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['transactions'],
      })
    },
    onSuccess: () => {
      console.log('Транзакция успешно проведенна')
    },
    onError: () => {
      console.log('Ошибка в совершении транзакции')
    },
  })

  return { createTransactionMutation }
}
