import { useUser } from '@/hooks/useUser'
import { IRadioElement } from '@/types/FormTypes'
import { ICard } from '@/types/User.type'
import { TRANSACTIONS_DATA } from './TransactionsManagement.data'

export function useManagementTransData() {
  const { data } = useUser()
  const cards = data?.cards as ICard[]
  const cards_numbers: IRadioElement[] = []

  cards?.forEach((element) => {
    cards_numbers.push({
      id: String(element.id),
      text: element.number,
    })
  })

  const convertor = (arr: string[]) => {
    const result: IRadioElement[] = []

    arr.forEach((element) => {
      result.push({
        id: element,
        text: element,
      })
    })
    return result
  }

  const type = convertor(TRANSACTIONS_DATA.type)
  const category = convertor(TRANSACTIONS_DATA.category)

  return {
    cards_numbers,
    type,
    category,
  }
}
