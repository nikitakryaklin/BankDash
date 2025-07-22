'use client'

import { Switcher } from '@/components/UI/Switcher/Switcher'
import styles from './Preferences.module.scss'
import { useState } from 'react'

import { Fild } from '@/components/UI/fild/fild'
import { useNotifyStore } from '@/store/useNotifyStore'

export const Preferences = () => {
  const { setIsNotify, isNotify } = useNotifyStore()

  return (
    <div className={styles.wrapper}>
      <form action="">
        <Fild title="Currency" placeholder="USD" type="text" />
        <Fild
          title="Time Zone"
          placeholder="(GMT-12:00) International Date Line West"
          type="text"
        />
      </form>

      <h3>Notification</h3>

      <div>
        <Switcher arg={isNotify} toggle={setIsNotify} />
        <p>I receive notifications</p>
      </div>
    </div>
  )
}
