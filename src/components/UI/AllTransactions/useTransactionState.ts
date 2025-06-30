import { useEffect, useState } from 'react'

export const useTransactionState = () => {
  const { 0: filfer, 1: setFilter } = useState('')
  const { 0: page, 1: setPage } = useState(1)
  useEffect(() => {
    setPage(1)
  }, [filfer])

  return { filfer, page, setFilter, setPage }
}
