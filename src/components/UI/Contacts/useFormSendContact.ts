import { TRANSACTIONS } from '@/config/constants'
import { useBalanceMutation } from '@/hooks/useBalanceMutation'
import { useTransactionMutation } from '@/hooks/useTransactionMutation'
import { getToasterPromisSuccess } from '@/utiles/getToasterPromisSuccess'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface IAmound {
  amound: number
}

export const useFormSendContact = ({ name }: { name: string }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAmound>()
  const { createBalanceMutation } = useBalanceMutation()
  const { createTransactionMutation } = useTransactionMutation()

  const onFormSubmit: SubmitHandler<IAmound> = (data) => {
    if (!name) {
      return
    }
    createBalanceMutation.mutate({
      type: TRANSACTIONS.type.outgoing,
      amount: data.amound,
      id: 1,
    })

    toast.promise(
      createTransactionMutation.mutateAsync({
        title: name,
        date: new Date(),
        type: 'outgoing',
        category: 'Send',
        amount: Number(data.amound),
        id: 1,
      }),
      { ...getToasterPromisSuccess('Transalation delivered') }
    )
    reset()
  }
  return {
    register,
    errors,
    onSubmit: handleSubmit(onFormSubmit),
    isPanding: createTransactionMutation.isPending,
  }
}
