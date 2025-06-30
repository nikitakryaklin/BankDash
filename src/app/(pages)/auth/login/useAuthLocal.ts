import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRegisterMutation } from './useRegisterMutation'
import { useLoginMutation } from './useLoginMutation'
import toast from 'react-hot-toast'
import { getToasterPromisSuccess } from '@/utiles/getToasterPromisSuccess'

interface ILogin {
  username?: string
  email: string
  password: string
}

export const useAuthLocal = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [isError, setIsError] = useState(false)
  const { createLoginMutation } = useLoginMutation()
  const { createRegisterMutation } = useRegisterMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILogin>()

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    if (!isLogin) {
      toast.promise(
        createLoginMutation.mutateAsync({
          email: data.email,
          password: data.password,
        }),
        { ...getToasterPromisSuccess('The user is authorized') }
      )
    } else {
      if (!data.username) {
        return null
      }
      try {
        await toast.promise(
          createRegisterMutation.mutateAsync({
            username: data.username,
            email: data.email,
            password: data.password,
          }),
          { ...getToasterPromisSuccess('The user is register') }
        )
        reset()
        return setIsLogin(false)
      } catch (error) {
        return
      }
    }
    reset()
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    isError,
    isLogin,
    setIsError,
    setIsLogin,
    register,
    errors,
  }
}
