'use client'

import styles from './SettingsPage.module.scss'
import { useAuth } from '@/context/authContext'
import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import { useRef, useState } from 'react'
import clsx from 'clsx'
import { Preferences } from './Preferences/Preferences'
import { Security } from './Security/Security'
import { EditProfile } from './EditProfile/editProfile'
import { Button } from '@/components/UI/Button/Button'
import { ElementWrapper } from '@/components/loayout/ElementWrapper/ElementWrapper'
import { useSettingViewStore } from '@/store/useSettingViewStore'
import { Navigator } from './Navigator/Havigator'

export const SettingsPage = () => {
  const viewElement = useSettingViewStore((s) => s.viewElement)
  const { 0: isPanding, 1: setIsPanding } = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const { logOut } = useAuth()

  const renderBlock = () => {
    switch (viewElement) {
      case 'edit':
        return <EditProfile formRef={formRef} pending={setIsPanding} />
      case 'preferences':
        return <Preferences />
      case 'security':
        return <Security />
      default:
        null
    }
  }

  return (
    <ElementWrapper id="settings">
      <CardWrapper className={styles.settings_wrapper}>
        <Navigator />

        <div className={styles.main}>{renderBlock()}</div>

        <div className={styles.footer}>
          <Button
            text="Save"
            type="submit"
            onClick={() => formRef.current?.requestSubmit()}
            isPending={isPanding}
          />
          <Button
            text="Log out"
            type="button"
            onClick={logOut}
            className={styles.logOut}
            isPending={false}
          />
        </div>
      </CardWrapper>
    </ElementWrapper>
  )
}
