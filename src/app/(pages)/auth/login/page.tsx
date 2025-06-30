'use client'
import Fild from '@/components/UI/fild/fild'
import styles from './login.module.scss'
import Button from '@/components/UI/Button/Button'
import { useAuthLocal } from './useAuthLocal'
import { getValidateError } from '@/utiles/getValidateError'

const Page = () => {
  const {
    onSubmit,
    isError,
    isLogin,
    setIsError,
    setIsLogin,
    register,
    errors,
  } = useAuthLocal()

  return (
    <div className={styles.page}>
      <form
        onSubmit={(e) => onSubmit(e)}
        className={styles.form}
        onFocus={() => setIsError(false)}
      >
        <h2>{isLogin ? 'register' : 'login'}</h2>
        {isLogin && (
          <Fild
            title="User name"
            placeholder="inter your user name"
            type="text"
            error={errors.username?.message}
            {...register('username', {
              ...getValidateError('User name'),
              minLength: 6,
            })}
          />
        )}
        <Fild
          title="Email"
          placeholder="email@gmail.com"
          type="email"
          error={errors.email?.message}
          {...register('email', { ...getValidateError('Email') })}
        />
        <Fild
          title="Password"
          placeholder="*****"
          type="password"
          error={errors.password?.message}
          {...register('password', {
            ...getValidateError('Password'),
            minLength: 8,
          })}
        />
        {isError && (
          <p style={{ color: '#FE5C73', margin: 0 }}>
            email or password is not correct
          </p>
        )}
        <Button text={!isLogin ? 'sing in' : 'register'} type="submit" />
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'has account' : 'no account'}
        </p>
      </form>
    </div>
  )
}

export default Page
