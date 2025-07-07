'use client'
import styles from './AccountPage.module.scss'

import Widget from '@/components/UI/Widget/Widget'
// import { WIDGET_ACCOUNT_DATA } from './AccountPage.data'
import RecentTransaction from '@/components/UI/RecentTransaction/RecentTransaction'
import CardBlock from '@/components/UI/cardBlock/cardBlock'
import { Invoice } from '@/components/UI/Invoice/Invoice'
import { useUserBalance } from '@/hooks/useUserBalance'
import { getCardValues } from '@/utiles/getCardValues'
import { useTransactionsByDate } from '@/hooks/useTransactionsByDate'
import { useAccountPageCalculator } from './useAccountPageCalculator'
import dynamic from 'next/dynamic'
import { Loader } from 'lucide-react'

const DynamicDebitAndCredit = dynamic(
  () => import('@/components/UI/DebitAndCredit/DebitAndCredit'),
  {
    ssr: false,
    loading: () => <Loader />,
  }
)

const AccountPage = () => {
  const { balance } = useUserBalance()
  const { data: transactions } = useTransactionsByDate()
  const { WIDGET_ACCOUNT_DATA } = useAccountPageCalculator(
    balance,
    transactions
  )

  return (
    <div className={styles.page}>
      <div className={styles.widget_wrapper}>
        {WIDGET_ACCOUNT_DATA.map((el) => (
          <Widget key={el.id} title={el.title} text={el.text} color={el.color}>
            {el.icon}
          </Widget>
        ))}
      </div>
      <div className={styles.card_wrapper}>
        <RecentTransaction
          title="Last Transaction"
          className={styles.transBlock}
          flug={true}
        />
        <CardBlock buttomText="See All" flug={true} />
        <DynamicDebitAndCredit />
        <Invoice />
      </div>
    </div>
  )
}

export default AccountPage
