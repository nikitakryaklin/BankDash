import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutationContact } from './useMutationContact'
import type { FormValue, IAddContact } from './addContact.interface'
import toast from 'react-hot-toast'
import { getToasterPromisSuccess } from '@/utiles/getToasterPromisSuccess'

export const useFormContact = ({ goBack }: IAddContact) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValue>()
  const { creacteContactMutation } = useMutationContact()

  const formSubmit: SubmitHandler<FormValue> = async (data) => {
    const formData = new FormData()
    formData.append('files', data.avatar[0])
    toast.promise(
      creacteContactMutation.mutateAsync({
        formData: formData,
        name: data.name,
        role: data.role,
      }),
      { ...getToasterPromisSuccess('Contact is added') }
    )
    goBack()
  }

  return { onSubmit: handleSubmit(formSubmit), register, errors }
}
