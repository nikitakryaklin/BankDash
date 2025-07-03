'use client'
import CardBlock from '@/components/UI/cardBlock/cardBlock'
import styles from './HomePage.module.scss'
import { useUser } from '@/hooks/useUser'
import { useAuth } from '@/authContext/authContext'
import RecentTransaction from '@/components/UI/RecentTransaction/RecentTransaction'
import ExpenseStatistics from '@/components/UI/ExpenseStatistics/ExpenseStatistics'
import Contacts from '@/components/UI/Contacts/Contacts'
import dynamic from 'next/dynamic'
import { Loader } from '@/components/UI/Loader/loader'

const DynamicBalanceHistory = dynamic(
  () => import('@/components/UI/BalanceHistory/BalanceHistory'),
  { ssr: false, loading: () => <Loader /> }
)
const DynamicWeeklyActivity = dynamic(
  () => import('@/components/UI/WeeklyActivity/WeeklyActivity'),
  { ssr: false, loading: () => <Loader /> }
)

const DynamicExpenseStatistics = dynamic(
  () => import('@/components/UI/ExpenseStatistics/ExpenseStatistics'),
  { ssr: false, loading: () => <Loader /> }
)

const HomePage = () => {
  const { isLogin } = useAuth()
  const { isLoading } = useUser()

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <div className={styles.wrapper}>
        <CardBlock buttomText="See All" />
        <RecentTransaction />
        <DynamicWeeklyActivity />
        <DynamicExpenseStatistics />
        <Contacts />
        <DynamicBalanceHistory />
      </div>
    </>
  )
}

export default HomePage
