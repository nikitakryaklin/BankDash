'use client'
import styles from './AccountPage.module.scss'

import Widget from '@/components/UI/Widget/Widget'
import { WIDGET_ACCOUNT_DATA } from './AccountPage.data'
import RecentTransaction from '@/components/UI/RecentTransaction/RecentTransaction'
import CardBlock from '@/components/UI/cardBlock/cardBlock'
import { DebitAndCredit } from '@/components/UI/DebitAndCredit/DebitAndCredit'
import { Invoice } from '@/components/UI/Invoice/Invoice'

const AccountPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.widget_wrapper}>
        {WIDGET_ACCOUNT_DATA.map((el) => (
          <Widget key={el.id} title={el.title} text="$10,000" color={el.color}>
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
        <DebitAndCredit />
        <Invoice />
      </div>
    </div>
  )
}

export default AccountPage
