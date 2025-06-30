import { ITransaction } from '../AllTransactions.interface'
import { HEADER_ELEMENTS } from './TransactionsCard.data'
import styles from './TransactionsCard.module.scss'
import { TransactionsElement } from './transactionsElement'

interface IProps {
  isLoading: boolean
  data: ITransaction[]
}

export const TransactionsCard = ({ isLoading, data }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {HEADER_ELEMENTS.map((el) => (
          <p key={el.title}>{el.title}</p>
        ))}
      </div>
      {!isLoading ? (
        data.map((data) => (
          <TransactionsElement
            title={data.title}
            key={data.id}
            id={data.id}
            category={data.category}
            cardNumber={data.card.number}
            date={data.date}
            amount={data.amount}
            type={data.type}
          />
        ))
      ) : (
        <div>загрузка...</div>
      )}
    </div>
  )
}
