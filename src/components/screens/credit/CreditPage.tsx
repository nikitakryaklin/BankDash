'use client'

import styles from './CreditPage.module.scss'
import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import { Loader } from '@/components/UI/Loader/loader'
import dynamic from 'next/dynamic'
import { ElementWrapper } from '@/components/loayout/ElementWrapper/ElementWrapper'
import { CardList } from './CardLits/CardList'
import { CardSetting } from './CardSetting/cardSetting'

const DynamicCardBankStatistics = dynamic(
  () =>
    import('./CardBankStatistics/CardBankStatistics').then(
      (D) => D.CardBankStatistics
    ),
  { ssr: false, loading: () => <Loader /> }
)
const DynamicCreditPageForm = dynamic(
  () => import('./CreditPageForm').then((D) => D.CreditPageForm),
  {
    ssr: false,
    loading: () => <Loader />,
  }
)

export const CreditPage = () => {
  return (
    <div>
      <div className={styles.statistic}>
        <ElementWrapper id="bank_statistics" className={styles.expense}>
          <h2>Bank Statistics</h2>
          <CardWrapper>
            <DynamicCardBankStatistics />
          </CardWrapper>
        </ElementWrapper>

        <CardList />
      </div>

      <div className={styles.addCard_wrapper}>
        <ElementWrapper id="add_new_card" className={styles.addCard}>
          <h2>Add New Card</h2>
          <CardWrapper className={styles.form}>
            <DynamicCreditPageForm />
          </CardWrapper>
        </ElementWrapper>

        <ElementWrapper id="card_setting" className={styles.settings}>
          <h2>Card Setting</h2>
          <CardWrapper>
            <CardSetting />
          </CardWrapper>
        </ElementWrapper>
      </div>
    </div>
  )
}
