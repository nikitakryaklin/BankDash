import { User } from '@/service/user.service'
import { IUser, IUserData } from '@/types/User.type'
import { useQuery } from '@tanstack/react-query'

export const useUser = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['user'],
    queryFn: () => User.getUser(),
  })

  return { data, isLoading, isSuccess }
}
