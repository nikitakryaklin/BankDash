import { SubmitHandler, useForm } from 'react-hook-form'
import { useTransactionMutation } from '@/hooks/useTransactionMutation'
import { useBalanceMutation } from '@/hooks/useBalanceMutation'
import { IManagementTransForm } from './TransactionsManagement.interface'
import toast from 'react-hot-toast'
import { getToasterPromisSuccess } from '@/utiles/getToasterPromisSuccess'

export const useManagementForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IManagementTransForm>()

  const { createTransactionMutation } = useTransactionMutation()
  const { createBalanceMutation } = useBalanceMutation()

  const submitForm: SubmitHandler<IManagementTransForm> = (data) => {
    console.log(data)
    createBalanceMutation.mutate({
      type: data.type,
      amount: Number(data.amount),
      id: Number(data.card),
    })
    toast.promise(
      createTransactionMutation.mutateAsync({
        title: data.title,
        date: new Date(),
        type: data.type as any,
        category: data.category,
        amount: Number(data.amount),
        id: Number(data.card),
      }),
      {
        ...getToasterPromisSuccess(
          `The ${data.category} tratnsaction is created`
        ),
      }
    )
    reset()
  }

  return {
    register,
    onSubmit: handleSubmit(submitForm),
    errors,
    isPanding: createTransactionMutation.isPending,
  }
}
