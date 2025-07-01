'use client'

import CardBlock from '@/components/UI/cardBlock/cardBlock'
import styles from './transactionsPage.module.scss'
// import { MyExpense } from '@/components/UI/MyExpense/MyExpense'
import { AllTransactions } from '@/components/UI/AllTransactions/AllTransactions'
import dynamic from 'next/dynamic'
import { Loader } from '@/components/UI/Loader/loader'

const DynamicMyExpense = dynamic(
  () => import('@/components/UI/MyExpense/MyExpense'),
  {
    ssr: false,
    loading: () => <Loader />,
  }
)
const TransactionsPage = () => {
  return (
    <div className={styles.wrapper}>
      <CardBlock buttomText="+ Add Card" />
      <DynamicMyExpense />
      <AllTransactions />
    </div>
  )
}

export default TransactionsPage
