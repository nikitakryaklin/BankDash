import { useAuth } from '@/authContext/authContext'
import { Auth } from '@/service/auth.service'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useRegisterMutation = () => {
  const router = useRouter()
  const { logIn } = useAuth()

  const createRegisterMutation = useMutation({
    mutationFn: Auth.register,
    onSuccess: (data) => {
      logIn(data.jwt, data.user.id)
      router.replace('/')
    },
  })
  return { createRegisterMutation }
}
