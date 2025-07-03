'use client'
import { useQueryClient } from '@tanstack/react-query'
import Card from '../card/card'
import styles from './cardBlock.module.scss'
import { ICard, IUser } from '@/types/User.type'
import Link from 'next/link'
import { CONSTANTS } from '@/config/constants'
import { useEffect } from 'react'
import { useUser } from '@/hooks/useUser'
import { NotEnougtData } from '../NotEnougtData/NotEnougtData'

interface ICardBlock {
  buttomText: string
  flug?: boolean
}

const CardBlock = ({ buttomText, flug = false }: ICardBlock) => {
  const { data } = useUser()
  const cards = data?.cards as ICard[]
  const fullName = data?.about?.fullname || ''

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>My Cards</h2>
        <Link href={CONSTANTS.credit}>{buttomText}</Link>
      </div>
      <div className={styles.cards}>
        {cards?.length === 0 && (
          <div className={styles.noCard}>
            <NotEnougtData text="You do not have any card" />
          </div>
        )}
        {!flug &&
          cards?.length > 1 &&
          cards.map((card, index) => (
            <Card
              balance={card.balance}
              holder={fullName}
              cvc={card.cvc}
              period={card.period}
              number={card.number}
              primery={index === 0}
              key={card.id}
            />
          ))}
        {!flug && cards?.length === 1 && (
          <>
            <Card
              balance={cards[0].balance}
              holder={fullName}
              period={cards[0].period}
              cvc={cards[0].cvc}
              number={cards[0].number}
              primery={true}
            />
            <div className={styles.oneCard}>
              <NotEnougtData text="Create one more card" />
            </div>
          </>
        )}
        {cards.length > 0 && flug && (
          <Card
            balance={cards?.[0]?.balance || ''}
            holder={fullName}
            period={cards?.[0]?.period || ''}
            cvc={cards?.[0]?.cvc}
            number={cards?.[0]?.number || ''}
            primery={true}
          />
        )}
      </div>
    </div>
  )
}

export default CardBlock
