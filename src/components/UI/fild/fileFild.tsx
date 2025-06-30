import styles from './fild.module.scss'
import { forwardRef, Ref, useState } from 'react'
import { IFild } from './fild.interface'
import clsx from 'clsx'

const FileFild = forwardRef(
  (
    { title, error, placeholder, ...inputProps }: IFild,
    ref: Ref<HTMLInputElement>
  ) => {
    const [FileName, setFileName] = useState("avatar is't selectes")

    return (
      <div className={clsx(styles.wrapper, !!error && styles.error)}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <div className={styles.input}>
          <label htmlFor="file" className={styles.avatar}>
            <p>{placeholder}</p>
            <input
              type="file"
              name="avatar"
              id="file"
              accept=".jpg, .jpeg, .png"
              ref={ref}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                // нету события ончанге
                setFileName(e.target.files![0].name)
              }}
              {...inputProps}
            />
            <p>{FileName}</p>
          </label>
        </div>
      </div>
    )
  }
)

export default FileFild
