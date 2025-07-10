import { useNotifyStore } from '@/store/useNotifyStore'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'

type Status = 'on' | 'off' | 'isPending'

export function useNotify() {
  const { isNotify, setIsNotify } = useNotifyStore()
  const [status, setStatus] = useState<Status>('on')
  const [isActive, setIsActive] = useState(isNotify)

  const timeOut = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timeOut.current) clearTimeout(timeOut.current)
    }
  }, [])

  const toggleNotify = () => {
    if (status === 'on') {
      setIsActive(false)
      setStatus('isPending')

      toast.error('Notifications aren`t active')

      timeOut.current = setTimeout(() => {
        toast.dismiss()

        setStatus('off')
        setIsActive(false)
        setIsNotify()

        timeOut.current = null
      }, 5000)
    }

    if (status === 'isPending') {
      clearTimeout(timeOut.current!)
      timeOut.current = null

      setStatus('on')
      setIsActive(true)

      toast.success('Notifications are active')
      return
    }

    if (status === 'off') {
      setIsNotify()

      setIsActive(true)
      setStatus('on')

      toast.success('Notifications are active')
    }
  }
  return { isActive, toggleNotify }
}
