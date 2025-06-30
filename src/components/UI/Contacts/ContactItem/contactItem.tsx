import Image from 'next/image'
import styles from './contactItem.module.scss'
import clsx from 'clsx'
import { getAvaterUrl } from '@/utiles/getAvatar'
import { useEffect, useState } from 'react'
import { useIsActiveContact } from '@/store/useIsActiveContact'

interface IContact {
  avatar?: string
  idContact: number
  name: string
  role: string
  isFirst: boolean
  isImActive: boolean
  choose?: (name: string, id: number) => void
  goBack?: () => void
}

const ContactItem = ({
  avatar,
  name,
  role,
  isFirst,
  goBack,
  choose,
  idContact,
  isImActive,
}: IContact) => {
  const { id, setId } = useIsActiveContact()
  const [isActive, setIsActive] = useState(isImActive)

  useEffect(() => {
    setIsActive(idContact === id)
  }, [id])

  const hendelClick = (name?: string, idContact?: number) => {
    setIsActive(!isActive)
    idContact && setId(idContact)
    goBack && goBack()
    choose && name && idContact !== undefined && choose(name, idContact)
  }

  return (
    <div
      onClick={() => hendelClick(name, idContact)}
      className={clsx(
        styles.wrapper,
        isFirst && [styles.isFirst],
        isActive && [styles.isActive]
      )}
    >
      <Image
        src={avatar ? getAvaterUrl(avatar) : '/noAvatar.svg'}
        width={70}
        height={70}
        alt="avatar"
        priority={true}
        draggable={false}
      />

      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  )
}

export default ContactItem
