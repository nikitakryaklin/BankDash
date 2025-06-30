'use client'

import CardBlock from '@/components/UI/cardBlock/cardBlock'
import styles from './CreditPage.module.scss'
import { NotEnougtData } from '@/components/UI/NotEnougtData/NotEnougtData'
import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import Fild from '@/components/UI/fild/fild'
import {
  BANK_CARDS_STATISTICS_DATA,
  CARD_SETTINGS_DATA,
} from './CreditPage.data'
import { useCreateCard } from './useCreateCard'
import clsx from 'clsx'
import { Loader } from '@/components/UI/Loader/loader'
import { useUser } from '@/hooks/useUser'
import { ListItem } from '@/components/UI/ListItem/ListItem'
import { ListItemElement } from '@/components/UI/ListItem/ListItem.element'
import { ICard } from '@/types/User.type'
import { getColorByIndex } from '@/utiles/getColorByIndex'
import { getCardValues } from '@/utiles/getCardValues'
import { RadioBlock } from '@/components/UI/RadioBlock/RadioBlock'
import { getValidateError } from '@/utiles/getValidateError'
import { CircleChart } from '@/components/UI/Chart/Circle/Circle-chart'

const CreditPage = () => {
  const user = useUser()

  const cards = user.data?.cards

  const { formSubmit, isPending, register, errors } = useCreateCard()

  return (
    <div>
      <div className={styles.statistic}>
        <div className={styles.expense}>
          <h2>Card Expense Statistics</h2>
          <CardWrapper>
            <CircleChart chartData={BANK_CARDS_STATISTICS_DATA} />
            {/* <NotEnougtData /> */}
          </CardWrapper>
        </div>
        <div className={styles.cardList}>
          <h2>Card List</h2>
          <CardWrapper>
            {cards !== undefined &&
              cards.map((el: ICard, index: number) => (
                <ListItem
                  className={styles.CardList_item}
                  key={el.id}
                  modal={<p>modal</p>}
                  icon={
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        style={{ fill: getColorByIndex(index), stroke: '' }}
                        d="M17.6621 3.51034V3.23675C17.6621 1.97905 16.6389 0.955811 15.3812 0.955811H2.28094C1.0232 0.95585 0 1.97905 0 3.23675V3.51034H17.6621Z"
                        fill="#396AFF"
                      />
                      <path
                        style={{ fill: getColorByIndex(index), stroke: '' }}
                        d="M10.4347 10.8476C10.4347 9.6644 10.8152 8.53983 11.5178 7.61304H0V10.7948C0 12.0525 1.0232 13.0757 2.28094 13.0757H10.9162C10.601 12.3852 10.4347 11.6292 10.4347 10.8476ZM8.83109 10.1562H6.8625V8.98437H8.83109V10.1562ZM2.62727 8.98437H5.69062V10.1562H2.62727V8.98437Z"
                        fill="#396AFF"
                      />
                      <path
                        style={{ fill: getColorByIndex(index), stroke: '' }}
                        d="M12.7344 6.441C13.6281 5.81572 14.6898 5.47885 15.8033 5.47885C16.4478 5.47885 17.0748 5.59201 17.6621 5.8083V4.68213H0V6.441H12.7344Z"
                        fill="#396AFF"
                      />
                      <path
                        style={{ fill: getColorByIndex(index), stroke: '' }}
                        d="M19.9999 10.8476C19.9999 8.52979 18.1209 6.65088 15.8032 6.65088C13.4854 6.65088 11.6064 8.52979 11.6064 10.8476C11.6064 13.1653 13.4854 15.0442 15.8032 15.0442C18.1209 15.0442 19.9999 13.1653 19.9999 10.8476ZM16.3689 13.0896V13.5665H15.7829V13.5665V13.5665H15.197V13.0931C14.8427 12.9731 14.5529 12.7621 14.2698 12.5551L14.9616 11.6092C15.3419 11.8873 15.5365 12.021 15.8032 12.021C15.9539 12.021 16.076 11.9492 16.1218 11.8337C16.1772 11.6938 16.0989 11.565 15.9123 11.489C15.9123 11.489 15.0747 11.2097 14.6875 10.8149C14.3626 10.4837 14.2593 10.0169 14.3627 9.57291C14.4668 9.12584 14.7687 8.77627 15.197 8.6017V8.12857H16.3689V8.58209C16.6665 8.66475 16.9184 8.7869 17.0632 8.86553L16.5041 9.89541C16.1334 9.6942 15.7924 9.63381 15.6597 9.6792C15.5309 9.72318 15.5113 9.80717 15.5039 9.83881C15.4935 9.88361 15.4879 9.95236 15.5596 10.0322C15.6285 10.109 16.3541 10.4037 16.3541 10.4037C17.137 10.7224 17.5054 11.5228 17.2112 12.2654C17.0584 12.6513 16.7507 12.9437 16.3689 13.0896Z"
                        fill="#396AFF"
                      />
                    </svg>
                  }
                  color={getColorByIndex(index)}
                >
                  <ListItemElement title={'Type'} text={el.type + ''} />
                  <ListItemElement
                    title={'Number'}
                    text={getCardValues.number(el.number).slice(9, 20)}
                  />
                  <ListItemElement title={'Holder'} text={'Nikita'} />
                  <ListItemElement title={'Bank'} text={el.bank + ' Bank'} />
                </ListItem>
              ))}
            {cards === undefined && <NotEnougtData />}
          </CardWrapper>
        </div>
      </div>
      <div className={styles.addCard_wrapper}>
        <div className={styles.addCard}>
          <h2>Add New Card</h2>
          <CardWrapper className={styles.form}>
            <p>
              Credit Card generally means a plastic card issued by Scheduled
              Commercial Banks assigned to a Cardholder, with a credit limit,
              that can be used to purchase goods and services on credit or
              obtain cash advances.
            </p>
            <form onSubmit={formSubmit()} className={styles.form1}>
              <div>
                <div>
                  <RadioBlock
                    title={errors.type?.message || 'Card Type'}
                    className={styles.radioBlock}
                    error={errors.type?.message}
                    values={[
                      { id: 'Credit', text: 'Credit' },
                      { id: 'Debit', text: 'Debit' },
                    ]}
                    name={'type'}
                    register={register}
                  />
                  <Fild
                    type="number"
                    placeholder="**** **** **** ****"
                    title={errors.number?.message || 'Card Number'}
                    error={errors.number?.message}
                    maxLength={18}
                    {...register('number', {
                      ...getValidateError('Card number', true, 16, 18),
                    })}
                  />
                </div>
                <div>
                  <Fild
                    title={errors.bank?.message || 'Bank'}
                    placeholder="My Bank"
                    error={errors.bank?.message}
                    {...register('bank', {
                      ...getValidateError('Bank', true),
                    })}
                  />
                  <Fild
                    type="date"
                    title={errors.period?.message || 'Expiration Date'}
                    placeholder="25 January 2025"
                    error={errors.period?.message}
                    {...register('period', {
                      ...getValidateError('Period'),
                    })}
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isPending}
                className={clsx(isPending && styles.disabled)}
              >
                {isPending === false && 'Add Card'}
                {isPending && <Loader color="#fff" />}
              </button>
            </form>
          </CardWrapper>
        </div>
        <div className={styles.settings}>
          <h2>Card Setting</h2>
          <CardWrapper>
            {CARD_SETTINGS_DATA.map((el) => (
              <div key={el.id} className={styles.settings_item}>
                <div
                  className={styles.icon}
                  style={{ background: `${el.color}3a` }}
                >
                  {el.icon}
                </div>
                <div className={styles.info}>
                  <h3>{el.title}</h3>
                  <p>{el.text}</p>
                </div>
              </div>
            ))}
            {/* <NotEnougtData /> */}
          </CardWrapper>
        </div>
      </div>
    </div>
  )
}

export default CreditPage
