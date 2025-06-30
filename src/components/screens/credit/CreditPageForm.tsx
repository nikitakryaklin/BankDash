import { RadioBlock } from '@/components/UI/RadioBlock/RadioBlock'
import { useCreateCard } from './useCreateCard'
import Fild from '@/components/UI/fild/fild'
import { getValidateError } from '@/utiles/getValidateError'
import clsx from 'clsx'
import { Loader } from '@/components/UI/Loader/loader'
import styles from './CreditPage.module.scss'

const CreditPageForm = () => {
  const { formSubmit, isPending, register, errors } = useCreateCard()

  return (
    <>
      <p>
        Credit Card generally means a plastic card issued by Scheduled
        Commercial Banks assigned to a Cardholder, with a credit limit, that can
        be used to purchase goods and services on credit or obtain cash
        advances.
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
    </>
  )
}

export default CreditPageForm
