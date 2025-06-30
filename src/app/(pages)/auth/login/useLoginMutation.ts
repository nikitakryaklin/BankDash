import { useMutation } from '@tanstack/react-query'
import { Auth } from '@/service/auth.service'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/authContext/authContext'

export const useLoginMutation = () => {
  const router = useRouter()
  const { logIn } = useAuth()

  const createLoginMutation = useMutation({
    mutationFn: Auth.login,
    onSuccess: (data) => {
      logIn(data.data.jwt, data.data.user.id)
      router.replace('/')
    },
  })

  return { createLoginMutation }
}
