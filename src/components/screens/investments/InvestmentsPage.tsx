'use client'
import { Widget } from '@/components/UI/Widget/Widget'
import {
  INVEST_BODY_TABLE_DATA,
  INVEST_DATA,
  INVEST_HEADER_TABLE_DATA,
  MONTHLY_REVENUE_DATA,
  WIDGET_INVEST_DATA,
  YEARLY_TOTAL_INVESTMENTS_DATA,
} from './InvestmentsPage.data'
import styles from './InvestmentsPage.module.scss'
import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import { ListItem } from '@/components/UI/ListItem/ListItem'
import { ListItemElement } from '@/components/UI/ListItem/ListItem.element'
import { TableBlock } from '@/components/UI/TableBlock/TableBlock'

import { LineChart } from '@/components/UI/Chart/Line/Line-chart'
import { ElementWrapper } from '@/components/UI/ElementWrapper/ElementWrapper'

export const InvestmentsPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.widget_wrapper}>
        {WIDGET_INVEST_DATA.map((el) => (
          <Widget
            key={el.id}
            id={el.HTMLId}
            title={el.title}
            text={el.text}
            color={el.color}
          >
            {el.icon}
          </Widget>
        ))}
      </div>

      <div className={styles.graf_wrapper}>
        <ElementWrapper id="yearly_total_investment">
          <h2>Yearly Total Investment</h2>
          <CardWrapper>
            <LineChart chartData={YEARLY_TOTAL_INVESTMENTS_DATA} />
          </CardWrapper>
        </ElementWrapper>

        <ElementWrapper id="monthly_revenue">
          <h2>Monthly Revenue</h2>
          <CardWrapper>
            <LineChart chartData={MONTHLY_REVENUE_DATA} />
          </CardWrapper>
        </ElementWrapper>
      </div>

      <div className={styles.invest_wrapper}>
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
                  <ListItemElement
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

        <ElementWrapper id="trending_stock" className={styles.trending_wrapper}>
          <h2>Trending Stock</h2>
          <TableBlock header={INVEST_HEADER_TABLE_DATA}>
            <TableBlock.body className={styles.tbody}>
              {INVEST_BODY_TABLE_DATA.map((el) => (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td style={{ color: el.color }}>{el.ruturn}</td>
                </tr>
              ))}
            </TableBlock.body>
          </TableBlock>
        </ElementWrapper>
      </div>
    </div>
  )
}
