import { ICard } from '@/types/User.type'
import styles from './CardDetails.module.scss'
import { Card } from '@/components/UI/card/card'
import { useTransactionsAll } from '@/hooks/useTransactionsAll'
import { useUser } from '@/hooks/useUser'
import { AllTransactions } from '@/components/UI/AllTransactions/AllTransactions'

export const CardDetails = ({ card }: { card: ICard }) => {
  const { data } = useUser()

  const fullName = data?.about?.fullname

  return (
    <div className={styles.wrapper}>
      <Card
        balance={card.balance}
        holder={fullName || ''}
        period={card.period}
        number={card.number}
        primery={true}
      />
      <AllTransactions cardNumber={card.number} />
    </div>
  )
}
