import { balance } from '@/service/balance.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useBalanceMutation = () => {
  const queryClient = useQueryClient()

  const createBalanceMutation = useMutation({
    mutationKey: ['balance'],
    mutationFn: balance,
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['user'],
      })
    },
  })
  return { createBalanceMutation }
}
