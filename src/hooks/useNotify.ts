import { useNotifyStore } from '@/store/useNotifyStore'
import { useState } from 'react'
import toast from 'react-hot-toast'

export function useNotify() {
  const { isNotify, setIsNotify } = useNotifyStore()
  const [isPanding, setIsPending] = useState(false)

  const toggleNotify = () => {
    if (!isNotify) {
      setIsNotify()
      toast.success('Notifications are active')
    } else {
      setIsPending(true)
      toast.error('Notifications aren`t active', { duration: 500 })
      setTimeout(() => {
        setIsNotify()
        setIsPending(false)
      }, 1000)
    }
  }
  return { isPanding, toggleNotify, isNotify }
}
