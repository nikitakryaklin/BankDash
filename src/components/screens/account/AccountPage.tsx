'use client'
import styles from './AccountPage.module.scss'

import { RecentTransaction } from '@/components/UI/RecentTransaction/RecentTransaction'
import { CardBlock } from '@/components/UI/cardBlock/cardBlock'
import { Invoice } from '@/components/UI/Invoice/Invoice'
import { DebitAndCredit } from '@/components/UI/DebitAndCredit/DebitAndCredit'
import { AccountWiggetBlock } from './AccountWiggetBlock'

export const AccountPage = () => {
  return (
    <div className={styles.page}>
      <AccountWiggetBlock />

      <div className={styles.card_wrapper}>
        <RecentTransaction
          title="Last Transaction"
          className={styles.transBlock}
          flug={true}
        />
        <CardBlock buttomText="See All" flug={true} />
        <DebitAndCredit />
        <Invoice />
      </div>
    </div>
  )
}
