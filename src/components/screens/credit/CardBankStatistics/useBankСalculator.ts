import { ICard } from '@/types/User.type'
import { useMemo } from 'react'

interface IData {
  bank: string
  value: number
}

export function useBankСalculator({ cards }: { cards: ICard[] }) {
  const BANK_CARDS_STATISTICS_DATA = useMemo(() => {
    let data: IData[] = []
    console.log('hey')
    cards.forEach((el) => {
      const bank = el.bank + ' Bank'
      const dataElement = data.find((label) => label.bank === bank)
      if (!dataElement) {
        data.push({
          bank: bank,
          value: 1,
        })
      } else {
        dataElement.value++
      }
    })

    const labels: string[] = []
    const datasets: number[] = []

    data.forEach((el) => {
      labels.push(el.bank)
      datasets.push(el.value)
    })

    const colors = ['#16DBCC', '#FF82AC', '#FFBB38', '#4C78FF']

    return {
      labels: labels,
      datasets: datasets,
      backgroundColor: labels.map((_, i) => colors[i % labels.length]),
      border: 0,
      cutout: '50',
      label: 'value ',
      padding: 15,
    }
  }, [cards])
  return { BANK_CARDS_STATISTICS_DATA }
}
