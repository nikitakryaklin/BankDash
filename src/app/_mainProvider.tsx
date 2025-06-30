'use client'

import Aside from '@/components/loayout/aside/aside'
import Header from '@/components/loayout/header/header'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import styles from './page.module.scss'
import AuthProvider, { useAuth } from '@/authContext/authContext'
import nProgress from 'nprogress'
import { usePathname } from 'next/navigation'
import ToasterProvider from '@/components/loayout/toast/toast'

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
    <AuthProvider>
      <ToasterProvider>
        <Aside />
        <main className="main">
          <Header />
          <section className={styles.page}>{children}</section>
        </main>
      </ToasterProvider>
    </AuthProvider>
  )
}

export default MainProvider
