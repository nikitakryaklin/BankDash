'use client'

import styles from './ServicesPage.module.scss'

import { ListItem } from '@/components/UI/ListItem/ListItem'
import { SERVICES_LIST } from './ServicesPage.data'
import { NotEnougtData } from '@/components/UI/NotEnougtData/NotEnougtData'

export const ServiceList = () => {
  if (!SERVICES_LIST) {
    return <NotEnougtData />
  }

  return (
    <>
      {SERVICES_LIST.map((el) => (
        <ListItem
          icon={el.icon}
          color={el.color}
          isButton={true}
          key={el.id}
          className={styles.listElement}
        >
          <ListItem.Element title={el.title} text={el.text} />
          <ListItem.Element
            title={el.description_title}
            text={el.discription_text}
          />
          <ListItem.Element
            title={el.description_title}
            text={el.discription_text}
          />
          <ListItem.Element
            title={el.description_title}
            text={el.discription_text}
          />
        </ListItem>
      ))}
    </>
  )
}
