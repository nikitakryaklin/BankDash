import { useIsActiveFilter } from '@/store/useIsActiveFilter'
import { IProps } from './TransactionsFilters'

export const useTransactionsFilters = ({ filter }: IProps) => {
  const { id, setId } = useIsActiveFilter()

  function hendleClick(id: number, type: string) {
    setId(id)
    filter(type)
  }

  return { id, hendleClick }
}
