'use client'

import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import { RadioBlock } from '../../../UI/RadioBlock/RadioBlock'
import Fild from '@/components/UI/fild/fild'
import styles from './TransactionsManagement.module.scss'
import clsx from 'clsx'
import { useManagementForm } from './useManagementTrans.Form'
import { Loader } from '@/components/UI/Loader/loader'
import { useManagementTransData } from './useManagementTrans.data'
import { IManagementTransForm } from './TransactionsManagement.interface'
import { getValidateError } from '@/utiles/getValidateError'

export const TransactionsManagement = () => {
  const { cards_numbers, type, category } = useManagementTransData()

  const { register, onSubmit, errors, isPanding } = useManagementForm()

  return (
    <div>
      <h2>Trancactions Management</h2>
      <CardWrapper className="dsa">
        <form onSubmit={onSubmit} className={styles.form}>
          <RadioBlock<IManagementTransForm>
            title="Cards"
            values={cards_numbers}
            name="card"
            error={errors.card?.message}
            register={register}
          />
          <RadioBlock<IManagementTransForm>
            title={'Type'}
            values={type}
            name="type"
            error={errors.type?.message}
            register={register}
          />
          <RadioBlock<IManagementTransForm>
            title="Category"
            values={category}
            name="category"
            error={errors.category?.message}
            register={register}
          />
          <legend
            className={clsx(
              styles.title,
              !!errors.title?.message && styles.isError
            )}
          >
            {errors.title?.message || 'Title'}
          </legend>

          <Fild
            placeholder="name of your transaction"
            type="text"
            error={errors.title?.message}
            {...register('title', {
              ...getValidateError('Name of your transaction'),
            })}
          />
          <legend
            className={clsx(
              styles.title,
              styles.title_last,
              !!errors.amount?.message && styles.isError
            )}
          >
            {errors.amount?.message || 'Amount'}
          </legend>

          <Fild
            placeholder="00.00"
            type="number"
            error={errors.amount?.message}
            {...register('amount', {
              ...getValidateError('Anount', true, 1, 9),
            })}
          />
          <button
            className={clsx(styles.button, isPanding && styles.isPanding)}
            disabled={isPanding}
          >
            {!isPanding && 'Create transaction'}
            {isPanding && <Loader color="var(--white)" />}
          </button>
        </form>
      </CardWrapper>
    </div>
  )
}
