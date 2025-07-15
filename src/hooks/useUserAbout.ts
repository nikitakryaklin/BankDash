import { User } from '@/service/user.service'
import { useQuery } from '@tanstack/react-query'

export const useUserAbout = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['about'],
    queryFn: () => User.getUserAbout(),
  })

  return { data, isLoading, isSuccess }
}
