'use client'

import { ChevronRightIcon, Send } from 'lucide-react'
import ContactItem from './ContactItem/contactItem'
import styles from './Contacts.module.scss'
import { useContacts } from '@/hooks/useContacts'
import { IContact } from './Contacts.type'
import { useState } from 'react'
import AddContact from './addContact/addContact'
import { useFormSendContact } from './useFormSendContact'
import clsx from 'clsx'
import { Loader } from '../Loader/loader'
import { getValidateError } from '@/utiles/getValidateError'

const Contacts = () => {
  const [isAdd, setIsAdd] = useState(false)
  const [name, setName] = useState('')
  const [ActiveId, setActiveId] = useState(0)

  const { data, isLoading, isSuccess } = useContacts()
  const { onSubmit, register, isPanding, errors } = useFormSendContact({ name })

  const goBack = () => {
    setIsAdd(!isAdd)
  }

  const chooseContact = (name: string, id: number) => {
    setActiveId(id)
    setName(name)
  }

  return (
    <div className={styles.wrapper}>
      <h2>Quick Transfer</h2>
      <div className={styles.card}>
        {isAdd ? (
          <AddContact goBack={goBack} />
        ) : (
          <>
            <div className={styles.contacts}>
              <ContactItem
                name={'add'}
                role={'Contact'}
                isFirst={true}
                goBack={goBack}
                idContact={0}
                isImActive={false}
              />

              {isLoading && <>loading...</>}

              {isSuccess ? (
                data?.map((cont: IContact) => (
                  <ContactItem
                    avatar={cont.avatar !== null ? cont.avatar[0].url : ''}
                    name={cont.name}
                    role={cont.role}
                    isFirst={false}
                    choose={chooseContact}
                    isImActive={ActiveId === cont.id}
                    key={cont.id}
                    idContact={cont.id}
                  />
                ))
              ) : (
                <div> no result </div>
              )}
            </div>
            <div className={styles.input}>
              <p>Write Amount</p>
              <form onSubmit={onSubmit}>
                <input
                  type="number"
                  placeholder={errors.amound?.message || '525.25'}
                  className={clsx(!!errors.amound?.message && styles.isError)}
                  {...register('amound', {
                    ...getValidateError('Amount', true, 1, 9),
                  })}
                />
                <button
                  type="submit"
                  disabled={isPanding}
                  className={clsx(isPanding && styles.disabled)}
                >
                  {isPanding && <Loader color="#fff" />}
                  {!isPanding && (
                    <>
                      <p>Send</p>
                      <Send
                        style={{ color: 'var(--white)', fill: 'none' }}
                        size={15}
                      />
                    </>
                  )}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Contacts
