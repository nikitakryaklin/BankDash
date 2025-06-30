'use client'
import CardBlock from '@/components/UI/cardBlock/cardBlock'
import styles from './HomePage.module.scss'
import { useUser } from '@/hooks/useUser'
import { useAuth } from '@/authContext/authContext'
import RecentTransaction from '@/components/UI/RecentTransaction/RecentTransaction'
import WeeklyActivity from '@/components/UI/WeeklyActivity/WeeklyActivity'
import ExpenseStatistics from '@/components/UI/ExpenseStatistics/ExpenseStatistics'
import Contacts from '@/components/UI/Contacts/Contacts'
import BalanceHistory from '@/components/UI/BalanceHistory/BalanceHistory'

const HomePage = () => {
  const { isLogin } = useAuth()
  const { isLoading } = useUser()

  return (
    <>
      {!isLoading ? (
        <>
          <div className={styles.wrapper}>
            <CardBlock buttomText="See All" />
            <RecentTransaction />
            <WeeklyActivity />
            <ExpenseStatistics />
            <Contacts />
            <BalanceHistory />
          </div>
        </>
      ) : (
        <>Loading....</>
      )}
    </>
  )
}

export default HomePage
