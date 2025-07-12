import Image from 'next/image'
import styles from '../header.module.scss'
import { ChangeEvent, useDeferredValue, useState } from 'react'
import { ISearch, useSearchData } from './useSearchData'
import clsx from 'clsx'
import { SeachItem } from './searchItem/seachItem'

export const Search = () => {
  const [searchData, setSearchData] = useState<ISearch[]>()

  const { SEARCH_DATA } = useSearchData()

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    const result = SEARCH_DATA.filter((el) => el.title.includes(value))
    setSearchData(result)
    if (value.length === 0) {
      setSearchData([])
    }
  }

  const deferredSearchData = useDeferredValue(searchData)

  return (
    <div className={styles.searchWrapper}>
      <div
        className={clsx(
          styles.search,
          deferredSearchData?.length && styles.search_isActive
        )}
      >
        <div className={styles.searchFild}>
          <Image
            src={'/header/search.svg'}
            alt="searchIcon"
            width={15}
            height={15}
          />
          <input
            onChange={(e) => onSearch(e)}
            type="search"
            placeholder="Search for something"
          />
        </div>
        {searchData && searchData?.length > 0 && (
          <div className={styles.searchResult}>
            <ul className={styles.scroll} onClick={() => setSearchData([])}>
              {deferredSearchData &&
                deferredSearchData?.length > 0 &&
                deferredSearchData?.map((el) => (
                  <SeachItem searchElement={el} key={el.id} />
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
