import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { cardCervice } from '@/service/card.service'
import { createCardValues } from '@/utiles/createCardValues'
import toast from 'react-hot-toast'
import { getToasterPromisSuccess } from '@/utiles/getToasterPromisSuccess'

interface FormData {
  number: string
  bank: string
  period: string
  type: string
}

export const useCreateCard = () => {
  const queryClient = useQueryClient()

  const createCardMutation = useMutation({
    mutationFn: cardCervice.addCard,

    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: ['user'],
      })
    },
  })

  const isPending = createCardMutation.isPending

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    toast.promise(
      createCardMutation.mutateAsync({
        number: data.number,
        bank: data.bank,
        period: String(data.period),
        type: data.type,
        cvc: createCardValues.cvv(),
      }),
      { ...getToasterPromisSuccess('The bank card is created') }
    )

    reset()
  }

  const formSubmit = () => {
    return handleSubmit(onSubmit)
  }

  return { formSubmit, isPending, register, errors }
}
