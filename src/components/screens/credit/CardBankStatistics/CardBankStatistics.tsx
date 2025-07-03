import { CircleChart } from '@/components/UI/Chart/Circle/Circle-chart'
import { ICard } from '@/types/User.type'
import { NotEnougtData } from '@/components/UI/NotEnougtData/NotEnougtData'
import { useBankСalculator } from './useBankСalculator'

const CardBankStatistics = ({ cards }: { cards: ICard[] }) => {
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

export default CardBankStatistics
