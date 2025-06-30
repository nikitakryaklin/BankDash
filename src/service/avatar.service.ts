import { CONSTANTS } from '@/config/constants'

class Avatar {
  URL = CONSTANTS.API + `/`

  public post = async (FormData: FormData) => {
    try {
      const response = await fetch(this.URL + 'upload', {
        method: 'POST',
        body: FormData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })

      if (response.ok) {
        const responseJSON = await response.json()
        const avatarId = responseJSON[0].id
        return avatarId
      } else {
        const errorMessage = await response.text()
        throw new Error('ошибка запроса ' + errorMessage)
      }
    } catch (error) {
      throw Error
    }
  }
}

export const AvatarService = new Avatar()
