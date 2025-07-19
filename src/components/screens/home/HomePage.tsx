'use client'
import { CardBlock } from '@/components/UI/cardBlock/cardBlock'
import styles from './HomePage.module.scss'
import { RecentTransaction } from '@/components/UI/RecentTransaction/RecentTransaction'
import { Contacts } from '@/components/UI/Contacts/Contacts'
import dynamic from 'next/dynamic'
import { Loader } from '@/components/UI/Loader/loader'

const DynamicBalanceHistory = dynamic(
  () =>
    import('@/components/UI/BalanceHistory/BalanceHistory').then(
      (D) => D.BalanceHistory
    ),
  { ssr: false, loading: () => <Loader /> }
)
const DynamicWeeklyActivity = dynamic(
  () =>
    import('@/components/UI/WeeklyActivity/WeeklyActivity').then(
      (D) => D.WeeklyActivity
    ),
  { ssr: false, loading: () => <Loader /> }
)

const DynamicExpenseStatistics = dynamic(
  () =>
    import('@/components/UI/ExpenseStatistics/ExpenseStatistics').then(
      (D) => D.ExpenseStatistics
    ),
  { ssr: false, loading: () => <Loader /> }
)

export const HomePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.cardBlok_recentTransactions}>
          <CardBlock buttomText="See All" />
          <RecentTransaction />
          <DynamicWeeklyActivity />
          <DynamicExpenseStatistics />
        </div>
        <div className={styles.contacts_balanceHistiry}>
          <Contacts />
          <DynamicBalanceHistory />
        </div>
      </div>
    </>
  )
}
