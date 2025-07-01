import { ICard } from '@/types/User.type'
import { useUser } from './useUser'

export const useUserBalance = () => {
  const { data } = useUser()

  const cards: ICard[] = data.cards

  const balance = cards.reduce((sum, { balance }) => Number(balance) + sum, 0)

  return { balance }
}
