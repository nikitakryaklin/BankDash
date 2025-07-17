'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  isLogin: boolean
  logIn: (token: string, id: number) => void
  logOut: () => void
}
const AuthContext = createContext<AuthContextType | null>(null)
const queryClient = new QueryClient()

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setAuthenticated] = useState(false)
  const router = useRouter()

  const logIn = (token: string, id: number) => {
    localStorage.setItem('token', token)
    localStorage.setItem('User_id', `${id}`)
    setAuthenticated(true)
  }

  const logOut = async () => {
    await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include',
    })
    localStorage.removeItem('token')
    localStorage.removeItem('User_id')
    await queryClient.clear()
    setAuthenticated(false)
    router.replace('/auth/login')
  }

  return (
    <AuthContext.Provider value={{ isLogin, logIn, logOut }}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
