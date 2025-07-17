'use client'
import styles from './header.module.scss'
import { useAuth } from '@/context/authContext'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { getTitle } from './header.data'
import Link from 'next/link'
import { useBurgerStore } from '@/store/useBurgerStore'
import clsx from 'clsx'
import { CONSTANTS } from '@/config/constants'
import { UserAvatar } from '@/components/UI/userAvatar/UserAvatar'
import { useNotify } from '@/hooks/useNotify'
import { Search } from './search/search'

const Header = () => {
  const { isLogin } = useAuth()
  const pathname = usePathname() || ''
  const { isBurger, setIsBurger } = useBurgerStore()

  const { toggleNotify, isActive, isNotify } = useNotify()
  const henderClick = () => {
    setIsBurger()
  }

  if (pathname === CONSTANTS.login) return null

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
            <Search />
            <Link href={'/settings'} className={styles.item}>
              <Image
                src={'/header/setting.svg'}
                alt="searchIcon"
                width={15}
                height={15}
              />
            </Link>
            <button
              onClick={toggleNotify}
              className={clsx(
                styles.item,
                (!isActive || !isNotify) && styles.isNotify
              )}
            >
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
      <div className={styles.searchMobile}>
        <Search />
      </div>
    </header>
  )
}

export default Header
