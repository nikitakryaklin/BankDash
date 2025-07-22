import styles from './header.module.scss'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import { useNotify } from '@/hooks/useNotify'
import { UserAvatar } from '@/components/UI/userAvatar/UserAvatar'

import { Search } from './search/search'

export const Navigations = () => {
  const { toggleNotify, isActive, isNotify } = useNotify()

  return (
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
  )
}
