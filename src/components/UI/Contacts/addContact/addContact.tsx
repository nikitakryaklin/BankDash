'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import Fild from '../../fild/fild'
import styles from './addContact.module.scss'
import FileFild from '../../fild/fileFild'
import { useFormContact } from './useFormContact'
import type { IAddContact } from './addContact.interface'
import { getValidateError } from '@/utiles/getValidateError'

const AddContact = ({ goBack }: IAddContact) => {
  const { onSubmit, register, errors } = useFormContact({ goBack })

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <button onClick={goBack}>go back</button>
        <h3>add contact</h3>
      </div>
      <form onSubmit={onSubmit} className={styles.form}>
        <Fild
          placeholder={errors.name?.message || 'name'}
          error={errors.name?.message}
          {...register('name', { ...getValidateError('Name') })}
        />
        <Fild
          placeholder={errors.role?.message || 'role'}
          error={errors.role?.message}
          {...register('role', { ...getValidateError('Role') })}
        />
        <FileFild
          error={errors.avatar?.message}
          placeholder={errors.avatar?.message || 'choose an avatar'}
          {...register('avatar', { ...getValidateError('Avatar', false) })}
        />
        <button type="submit">add contact</button>
      </form>
    </div>
  )
}

export default AddContact
