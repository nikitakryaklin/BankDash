class AuthService {
  private URL = process.env.NEXT_PUBLIC_API

  public register = async (data: {
    username: string
    email: string
    password: string
  }) => {
    const response = await fetch(this.URL + '/auth/local/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
    const responseJSON = await response.json()

    if (response.ok) {
      return responseJSON
    } else {
      const errorMessage = responseJSON.error.message
      throw new Error(errorMessage)
    }
  }

  public login = async (data: { email: string; password: string }) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: String(data.email),
        password: String(data.password),
      }),
      credentials: 'include',
    })

    const responseJSON = await response.json()

    if (response.ok) {
      return responseJSON
    } else {
      const errorMessage = responseJSON.error
      throw new Error(errorMessage)
    }
  }
}

export const Auth = new AuthService()
