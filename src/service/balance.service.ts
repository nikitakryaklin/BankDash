import { TRANSACTIONS } from '@/config/constants'

export const balance = async (balanceData: {
  type: string
  amount: number
  id: number
}) => {
  const URL = process.env.NEXT_PUBLIC_API

  if (balanceData.type !== TRANSACTIONS.type.cancelled) {
    try {
      const responce = await fetch(
        `${URL}/cards?filters[id][$eq]=${balanceData.id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )

      const responceJSON = await responce.json()
      console.log(responceJSON)
      const cardBalance = responceJSON.data[0].balance
      const cardDocumentId = responceJSON.data[0].documentId

      const newBalance =
        balanceData.type === TRANSACTIONS.type.incoming
          ? Number(cardBalance) + balanceData.amount
          : Number(cardBalance) - balanceData.amount

      fetch(`${URL}/cards/${cardDocumentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          data: {
            balance: newBalance,
          },
        }),
      })
      if (!responce.ok) {
        const errorMessage = responce.text()
        throw new Error('ошибка запроса ' + errorMessage)
      }
    } catch (error) {
      console.log(error, ' - ошибка обработки баланса')
      throw error
    }
  }
}
