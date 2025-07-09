'use client'

import { getAvaterUrl } from '@/utiles/getAvatar'
import Image from 'next/image'
import { useUser } from '@/hooks/useUser'

export const UserAvatar = ({
  width,
  height,
}: {
  width: number
  height: number
}) => {
  const { data } = useUser()
  const avatar = data?.avatar?.url

  return (
    <>
      <Image
        src={avatar ? getAvaterUrl(avatar) : '/noAvatar.svg'}
        width={width}
        height={height}
        alt="avatar"
        priority={true}
        draggable={false}
      />
    </>
  )
}
