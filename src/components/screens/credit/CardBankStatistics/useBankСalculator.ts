import { ICard } from '@/types/User.type'
import { useMemo } from 'react'

export function useBankСalculator({ cards }: { cards: ICard[] }) {
  const BANK_CARDS_STATISTICS_DATA = useMemo(() => {
    let data: Record<string, number> = {}
    cards.forEach((el) => {
      const bank = el.bank + ' Bank'
      if (!data[bank]) {
        data[bank] = 1
      } else {
        data[bank]++
      }
    })

    const labels: string[] = Object.keys(data)
    const datasets: number[] = Object.values(data)

    const colors = ['#16DBCC', '#FF82AC', '#FFBB38', '#4C78FF']

    return {
      labels: labels,
      datasets: datasets,
      backgroundColor: labels.map((_, i) => colors[i % colors.length]),
      border: 0,
      cutout: '50',
      label: 'value ',
      padding: 15,
    }
  }, [cards])
  return { BANK_CARDS_STATISTICS_DATA }
}
