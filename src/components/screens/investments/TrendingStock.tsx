import { ElementWrapper } from '@/components/loayout/ElementWrapper/ElementWrapper'
import { TableBlock } from '@/components/UI/TableBlock/TableBlock'
import {
  INVEST_HEADER_TABLE_DATA,
  INVEST_BODY_TABLE_DATA,
} from './InvestmentsPage.data'
import styles from './InvestmentsPage.module.scss'

export const TrendingStock = () => {
  return (
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
  )
}
