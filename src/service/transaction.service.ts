import { ITransaction } from '@/types/Transactions.type'
import { checkResponse } from '@/utiles/checkResponse'
import { getArray } from '@/utiles/getArray'

class Transactions {
  private URL: string = 'http://localhost:1337/api/transactions'

  async get(numbers: string[], limit: number) {
    const filter = getArray('card', 'number', numbers)
    try {
      const result = await fetch(
        this.URL + `?${filter}&pagination[limit]=${limit}&sort=createdAt:desc`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      if (result.ok) {
        return result.json()
      } else {
        const errorMessage = result.text()
        throw new Error('ошибка запроса ' + errorMessage)
      }
    } catch (error) {
      console.log(error, ' - ошибка запроса транзакции')
      throw error
    }
  }
  async getByDate(numbers: string[], date: string) {
    const filter = getArray('card', 'number', numbers)
    try {
      const result = await fetch(
        this.URL +
          `?${filter}&filters[createdAt][$gte]=${date}&pagination[limit]=1000`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      if (result.ok) {
        return result.json()
      } else {
        const errorMessage = result.text()
        throw new Error('ошибка запроса ' + errorMessage)
      }
    } catch (error) {
      console.log(error, ' - ошибка запроса транзакции')
      throw error
    }
  }

  async getAll(numbers: string[], page: number, filter?: string) {
    const help = 'createdAt:desc'
    const filterString = filter !== '' ? `&filters[type]=${filter}` : ''
    const cards = getArray('card', 'number', numbers)

    try {
      const result = await fetch(
        this.URL +
          `?populate=*&${cards}${filterString}&pagination[page]=${page}&pagination[pageSize]=5&sort=${help}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      // checkResponse(result)
      if (result.ok) {
        return result.json()
      } else {
        const errorMessage = result.text()
        throw new Error('ошибка запроса ' + errorMessage)
      }
    } catch (error) {
      console.log(error, ' - ошибка запроса транзакции')
      throw error
    }
  }

  public post = async (formData: ITransaction) => {
    const data = {
      title: formData.title,
      date: formData.date,
      type: formData.type,
      category: formData.category,
      amount: formData.amount,
      card: formData.id,
    }

    try {
      const result = await fetch(this.URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ data: data }),
      })
      if (result.ok) {
        return result.json()
      } else {
        const errorMessage = result.text()
        throw new Error('ошибка запроса ' + errorMessage)
      }
    } catch (error) {
      console.log(error, ' - ошибка запроса транзакции')
      throw error
    }
  }
}

export const transactionsService = new Transactions()
