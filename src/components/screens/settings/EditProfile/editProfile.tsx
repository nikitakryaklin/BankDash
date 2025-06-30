import Fild from '@/components/UI/fild/fild'
import styles from './EditProfile.module.scss'
import { UserAvatar } from '@/components/UI/userAvatar/UserAvatar'
import { PencilIcon } from 'lucide-react'
import { useUser } from '@/hooks/useUser'
import { Controller, get } from 'react-hook-form'
import { useEditForm } from './useEditForm'
import { useEffect, type RefObject } from 'react'
import { register } from 'module'
import { getValidateError } from '@/utiles/getValidateError'

interface IForm {
  formRef: RefObject<HTMLFormElement | null>
  pending: (isPanding: boolean) => void
}

export const EditProfile = ({ formRef, pending }: IForm) => {
  const { data } = useUser()

  const { register, isPending, reset, formSubmit, errors } = useEditForm({
    fullname: data?.about?.fullname,
    email: data?.about?.email,
    dateOfBirth: data?.about?.dateOfBirth,
    postalCode: data?.about?.poastalCode,
    username: data?.about?.username,
    city: data?.about?.city,
    country: data?.about?.country,
  })

  useEffect(() => {
    pending(isPending)
  }, [isPending])

  useEffect(() => {
    reset({
      fullname: data?.about?.fullname || 'Name',
      email: data?.about?.email || 'Email',
      dateOfBirth: data?.about?.dateOfBirth || '00.00.0000',
      postalCode: data?.about?.postalCode || '*****',
      username: data?.about?.username || 'User Name',
      city: data?.about?.city || 'City',
      country: data?.about?.country || 'Country',
    })
  }, [isPending, data])

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <UserAvatar width={110} height={110} />
        <button>
          <PencilIcon style={{ fill: 'none', stroke: 'white' }} />
        </button>
      </div>
      <form ref={formRef} onSubmit={formSubmit}>
        <div>
          <Fild
            title={errors.fullname?.message || 'Your Name'}
            placeholder={data?.about?.fullname || 'Name'}
            error={errors.fullname?.message}
            {...register('fullname', { ...getValidateError('Name') })}
          />
          <Fild
            title={errors.email?.message || 'Email'}
            placeholder={data?.about?.email || 'your-email@mail.com'}
            error={errors.email?.message}
            {...register('email', { ...getValidateError('Email') })}
          />

          {!data?.about?.dateOfBirth ? (
            <Fild
              title={errors.dateOfBirth?.message || 'Date of Birth'}
              type="date"
              placeholder={data?.about?.dataOfBirth || '25 January 1990'}
              {...register('dateOfBirth', {
                ...getValidateError('Date Of Birdth'),
              })}
            />
          ) : (
            <Fild
              title="Date of Birth"
              disabled={true}
              placeholder={String(data?.about?.dateOfBirth)}
            />
          )}

          <Fild
            title={errors.postalCode?.message || 'Postal Code'}
            type="number"
            placeholder={data?.about?.postalCode || '******'}
            {...register('postalCode', { ...getValidateError('Postal Code') })}
          />
        </div>
        <div>
          <Fild
            title="User Name"
            placeholder={data?.about?.username || 'User Name'}
            {...register('username', { ...getValidateError('User name') })}
          />
          <Fild
            title="Present Address"
            disabled={true}
            placeholder={
              data?.about?.city && data?.about?.country
                ? data?.about.city + ', ' + data?.about.country
                : 'City, Country'
            }
          />
          <Fild
            title={errors.city?.message || 'City'}
            placeholder={data?.about?.city || 'San Jose'}
            {...register('city', { ...getValidateError('City') })}
          />
          <Fild
            title={errors.country?.message || 'Country'}
            placeholder={data?.about?.country || 'USA'}
            {...register('country', { ...getValidateError('Country') })}
          />
        </div>
        <button type="submit" hidden></button>
      </form>
    </div>
  )
}
