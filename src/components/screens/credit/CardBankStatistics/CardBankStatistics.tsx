import { CircleChart } from '@/components/UI/Chart/Circle/Circle-chart'
import { ICard } from '@/types/User.type'
import { NotEnougtData } from '@/components/UI/NotEnougtData/NotEnougtData'
import { useBankСalculator } from './useBankСalculator'

export const CardBankStatistics = ({ cards }: { cards: ICard[] }) => {
  if (!cards) {
    return <NotEnougtData />
  }
  const { BANK_CARDS_STATISTICS_DATA } = useBankСalculator({ cards })

  return (
    <>
      <CircleChart chartData={BANK_CARDS_STATISTICS_DATA} />
    </>
  )
}
