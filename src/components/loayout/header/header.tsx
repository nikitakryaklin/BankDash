'use client'
import styles from './header.module.scss'
import { useAuth } from '@/authContext/authContext'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { getTitle } from './header.data'
import Link from 'next/link'
import { useBurgerStore } from '@/store/useBurgerStore'
import clsx from 'clsx'
import { useQueryClient } from '@tanstack/react-query'
import { IUser } from '@/types/User.type'
import { getAvaterUrl } from '@/utiles/getAvatar'
import { CONSTANTS } from '@/config/constants'
import { UserAvatar } from '@/components/UI/userAvatar/UserAvatar'
import toast from 'react-hot-toast'
import { useState } from 'react'

const Header = () => {
  const { isLogin } = useAuth()
  const pathname = usePathname() || ''
  const { isBurger, setIsBurger } = useBurgerStore()
  const [isNotify, setIsNotify] = useState(true)
  if (pathname === CONSTANTS.login) return null

  const henderClick = () => {
    setIsBurger()
  }

  const notify = () => {
    if (isNotify) {
      toast.success('Notifications are active')
    } else {
      toast.error('Notifications aren`t active')
    }
    setIsNotify(!isNotify)
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <button
          className={clsx(styles.burger, isBurger && styles.isActive)}
          onClick={henderClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h2>{getTitle(pathname)}</h2>
        <div className={styles.controles}>
          <div className={styles.text}>
            <div className={styles.search}>
              <Image
                src={'/header/search.svg'}
                alt="searchIcon"
                width={15}
                height={15}
              />
              <input type="text" placeholder="Search for something" />
            </div>
            <Link href={'/settings'} className={styles.item}>
              <Image
                src={'/header/setting.svg'}
                alt="searchIcon"
                width={15}
                height={15}
              />
            </Link>
            <button onClick={notify} className={styles.item}>
              <Image
                src={'/header/bell.svg'}
                alt="searchIcon"
                width={15}
                height={15}
              />
            </button>
          </div>
          <Link href={'/accounts'} className={styles.avatar}>
            <UserAvatar width={60} height={60} />
          </Link>
        </div>
      </div>
      <div className={styles.searchWrapper}>
        <div className={styles.search}>
          <Image
            src={'/header/search.svg'}
            alt="searchIcon"
            width={15}
            height={15}
          />
          <input type="text" placeholder="Search for something" />
        </div>
      </div>
    </header>
  )
}

export default Header
