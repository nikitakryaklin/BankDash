'use client'

import Link from 'next/link'
import { ISearch } from '../useSearchData'
import styles from './seachItem.module.scss'

export const SeachItem = ({ searchElement }: { searchElement: ISearch }) => {
  const page = searchElement.link.slice(1, -1)

  return (
    <li className={styles.wrapper}>
      <Link href={searchElement.link + '#' + searchElement.htmlID}>
        <h3 className={styles.title}>{searchElement.title}</h3>
        <p>{page.length > 0 ? page : 'home'}</p>
      </Link>
    </li>
  )
}
