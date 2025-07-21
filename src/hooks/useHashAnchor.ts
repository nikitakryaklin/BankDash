'use client'

import { RefObject, useEffect, useState } from 'react'

export const useHashAnchor = (
  ref: RefObject<HTMLDivElement | null>,
  id: string | undefined
) => {
  const [isFind, setIsFind] = useState(false)

  let timeOut: NodeJS.Timeout

  useEffect(() => {
    if (window.location.hash === `#${id}`) {
      console.log('hash - ', window.location.hash, 'id - ', id)

      window.history.replaceState(null, '', window.location.pathname)
      setIsFind(true)

      setTimeout(() => {
        setIsFind(false)
      }, 2000)
    }
  }, [])
  return { isFind }
}
