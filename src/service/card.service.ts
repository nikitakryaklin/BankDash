class Card {
  private URL: string = process.env.NEXT_PUBLIC_API + `/`

  public async addCard(cardData: {
    number: string
    cvc: string
    period: string
    bank: string
    type: string
  }) {
    const body = {
      data: {
        number: cardData.number,
        period: cardData.period,
        cvc: cardData.cvc,
        bank: cardData.bank,
        type: cardData.type,
        host: localStorage.getItem('User_id'),
      },
    }

    try {
      const response = await fetch('http://localhost:1337/api/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(body),
      }).catch((error) => {
        throw new Error(error)
      })

      // if (response.ok) {
      //     return await response.json()

      // } else {
      //     const errorMessage = await response.text()
      //     throw new Error('ошибка запроса ' + errorMessage)
      // }
    } catch (error) {
      throw Error
    }
  }
}

export const cardCervice = new Card()
