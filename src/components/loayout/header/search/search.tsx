import Image from 'next/image'
import styles from '../header.module.scss'
import { ChangeEvent, useDeferredValue, useEffect, useState } from 'react'
import { ISearch, useSearchData } from './useSearchData'
import clsx from 'clsx'
import { SeachItem } from './searchItem/seachItem'
import useDebounce from '@/hooks/useDebounce'
import { useSearchStore } from '@/store/useSearchStore'

export const Search = () => {
  const [searchData, setSearchData] = useState<ISearch[]>()
  const { searchValue, setSearchValue } = useSearchStore()
  const value = useDebounce(searchValue, 500)

  const { SEARCH_DATA } = useSearchData()

  useEffect(() => {
    const result = SEARCH_DATA.filter((el) => el.title.includes(value))
    setSearchData(result)
    if (value.length === 0) {
      setSearchData([])
    }
  }, [value])

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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchValue(e.target.value)
            }
            type="search"
            placeholder="Search for something"
            value={searchValue}
          />
        </div>

        {searchData && searchData?.length > 0 && (
          <div className={styles.searchResult}>
            <ul
              className={styles.scroll}
              onClick={() => {
                setSearchData([])
                setSearchValue('')
              }}
            >
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
