'use client'
import { CardBlock } from '@/components/UI/cardBlock/cardBlock'
import styles from './HomePage.module.scss'
import { RecentTransaction } from '@/components/UI/RecentTransaction/RecentTransaction'
import { Contacts } from '@/components/UI/Contacts/Contacts'
import { WeeklyActivity } from '@/components/UI/WeeklyActivity/WeeklyActivity'
import { ExpenseStatistics } from '@/components/UI/ExpenseStatistics/ExpenseStatistics'
import { BalanceHistory } from '@/components/UI/BalanceHistory/BalanceHistory'

export const HomePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.cardBlok_recentTransactions}>
          <CardBlock buttomText="See All" />
          <RecentTransaction />
          <WeeklyActivity />
          <ExpenseStatistics />
        </div>
        <div className={styles.contacts_balanceHistiry}>
          <Contacts />
          <BalanceHistory />
        </div>
      </div>
    </>
  )
}
