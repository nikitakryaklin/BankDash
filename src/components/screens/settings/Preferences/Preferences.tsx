'use client'

import { Switcher } from '@/components/UI/Switcher/Switcher'
import styles from './Preferences.module.scss'
import { useState } from 'react'

import Fild from '@/components/UI/fild/fild'

export const Preferences = () => {
  const { 0: a, 1: setA } = useState<boolean>(false)

  const toggle = () => {
    setA(!a)
  }

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
        <Switcher arg={a} toggle={toggle} />
        <p>I send or receive digita currency</p>
      </div>
      <div>
        <Switcher arg={a} toggle={toggle} />
        <p>I receive merchant order</p>
      </div>
      <div>
        <Switcher arg={a} toggle={toggle} />
        <p>There are recommendation for my account</p>
      </div>
    </div>
  )
}
