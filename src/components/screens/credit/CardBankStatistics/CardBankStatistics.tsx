import { CircleChart } from '@/components/UI/Chart/Circle/Circle-chart'
import { ICard } from '@/types/User.type'
import { NotEnougtData } from '@/components/UI/NotEnougtData/NotEnougtData'
import { useBankСalculator } from './useBankСalculator'
import { useUser } from '@/hooks/useUser'

export const CardBankStatistics = () => {
  const user = useUser()

  const cards = user.data?.cards

  const { BANK_CARDS_STATISTICS_DATA } = useBankСalculator({ cards })

  if (!cards) {
    return <NotEnougtData />
  }
  return (
    <>
      <CircleChart chartData={BANK_CARDS_STATISTICS_DATA} />
    </>
  )
}
