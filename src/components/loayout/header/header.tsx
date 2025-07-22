'use client'
import styles from './header.module.scss'
import { usePathname } from 'next/navigation'
import { getTitle } from './header.data'
import { useBurgerStore } from '@/store/useBurgerStore'
import clsx from 'clsx'
import { CONSTANTS } from '@/config/constants'
import { Search } from './search/search'
import { Navigations } from './navigations'

const Header = () => {
  const pathname = usePathname() || ''
  const { isBurger, setIsBurger } = useBurgerStore()

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

        <Navigations />
      </div>

      <div className={styles.searchMobile}>
        <Search />
      </div>
    </header>
  )
}

export default Header
