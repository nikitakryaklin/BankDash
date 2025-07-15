'use client'

import { getAvaterUrl } from '@/utiles/getAvatar'
import Image from 'next/image'
import { useUserAbout } from '@/hooks/useUserAbout'
import { Loader } from '../Loader/loader'

export const UserAvatar = ({
  width,
  height,
}: {
  width: number
  height: number
}) => {
  const { data, isLoading } = useUserAbout()
  const avatar = data?.data[0].avatar?.url

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <Image
          src={avatar ? getAvaterUrl(avatar) : '/noAvatar.svg'}
          width={width}
          height={height}
          alt="avatar"
          priority={true}
          draggable={false}
        />
      )}
    </>
  )
}
