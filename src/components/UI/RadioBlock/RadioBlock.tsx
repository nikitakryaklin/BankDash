import styles from './RadioBlock.module.scss'
import clsx from 'clsx'
import { FildCheckBox } from '../fild/fildCheckBox'
import { IRadioElement } from '@/types/FormTypes'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { getValidateError } from '@/utiles/getValidateError'

interface IRadioBlok<T extends FieldValues> {
  title: string
  values: IRadioElement[]
  className?: string
  name: Path<T>
  error?: string
  register: UseFormRegister<T>
}

export const RadioBlock = <T extends FieldValues>({
  title,
  values,
  className,
  name,
  error,
  register,
}: IRadioBlok<T>) => {
  return (
    <fieldset className={clsx(styles.wrapper, className)}>
      <legend className={clsx(styles.title, !!error && styles.isError)}>
        {error || title}
      </legend>
      {values.map((el) => (
        <FildCheckBox
          error={error}
          key={el.id}
          id={el.id}
          title={el.text}
          {...register(name, { ...getValidateError(name, false) })}
        />
      ))}
    </fieldset>
  )
}
