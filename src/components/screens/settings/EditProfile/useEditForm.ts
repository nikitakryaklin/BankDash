import { User } from '@/service/user.service'
import { getToasterPromisSuccess } from '@/utiles/getToasterPromisSuccess'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface IEditForm {
  fullname: string
  email: string
  dateOfBirth: string
  postalCode: string
  username: string
  city: string
  country: string
}

export const useEditForm = (formValues: IEditForm) => {
  const queryClient = useQueryClient()

  const createUserAboutMutation = useMutation({
    mutationFn: User.patchUserAbout,

    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: ['user'],
      })
    },
  })

  const isPending = createUserAboutMutation.isPending

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IEditForm>({
    defaultValues: {
      ...formValues,
    },
  })

  const onSubmit: SubmitHandler<IEditForm> = (data) => {
    toast.promise(createUserAboutMutation.mutateAsync({ ...data }), {
      ...getToasterPromisSuccess('Profile has been update'),
    })
    reset()
  }

  return {
    register,
    isPending,
    reset,
    errors,
    formSubmit: handleSubmit(onSubmit),
  }
}
