'use client'

import Aside from '@/components/loayout/aside/aside'
import Header from '@/components/loayout/header/header'
import { PropsWithChildren, useEffect } from 'react'
import styles from './(pages)/page.module.scss'
import AuthProvider from '@/context/authContext'
import nProgress from 'nprogress'
import { usePathname } from 'next/navigation'
import ToasterProvider from '@/components/loayout/toast/toast'
import { QueryClientCastomProvider } from '@/context/queryClient'

const MainProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname()

  useEffect(() => {
    nProgress.start()
    const timer = setTimeout(() => {
      nProgress.done()
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <QueryClientCastomProvider>
      <AuthProvider>
        <ToasterProvider>
          <Aside />
          <main className="main">
            <Header />
            <section className={styles.page}>{children}</section>
          </main>
        </ToasterProvider>
      </AuthProvider>
    </QueryClientCastomProvider>
  )
}

export default MainProvider
