import styles from './InvestmentsPage.module.scss'

import { ElementWrapper } from '@/components/loayout/ElementWrapper/ElementWrapper'
import { ListItem } from '@/components/UI/ListItem/ListItem'
import { INVEST_DATA } from './InvestmentsPage.data'

export const MyInvestment = () => {
  return (
    <ElementWrapper id="my_investment">
      <h2>My Investment</h2>
      <div className={styles.invest_wrapper_list}>
        {INVEST_DATA.map((el) => (
          <ListItem
            icon={el.icon}
            color={el.color}
            key={el.id}
            isButton={false}
            className={styles.listElement}
          >
            {el.info.map((info) => (
              <ListItem.Element
                title={info.title}
                text={info.text}
                color={info?.color || 'var(--black)'}
                key={info.id}
              />
            ))}
          </ListItem>
        ))}
      </div>
    </ElementWrapper>
  )
}
