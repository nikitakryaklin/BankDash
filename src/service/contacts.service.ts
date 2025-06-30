import { AvatarService } from './avatar.service'

class Contacts {
  private URL: string = process.env.NEXT_PUBLIC_API + `/contacts`

  public async get() {
    const id = localStorage.getItem('User_id')
    if (!id) return
    try {
      const response = await fetch(
        this.URL + `?filters[user][id][$eq]=${id}&populate=*`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )

      if (response.ok) {
        return await response.json()
      } else {
        const errorMessage = await response.text()
        throw new Error('ошибка запроса ' + errorMessage)
      }
    } catch (error) {
      throw Error
    }
  }

  public addContact = async (contact: {
    name: string
    role: string
    formData: FormData
  }) => {
    const avatarId = await AvatarService.post(contact.formData)

    const body = {
      data: {
        avatar: avatarId,
        name: contact.name,
        role: contact.role,
        user: localStorage.getItem('User_id'),
      },
    }

    try {
      const response = await fetch(this.URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        const errorMessage = await response.text()
        throw new Error('ошибка запроса ' + errorMessage)
      }
    } catch (error) {
      throw Error
    }
  }
}

export const contactService = new Contacts()
