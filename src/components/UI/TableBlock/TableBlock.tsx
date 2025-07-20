import CardWrapper from '@/components/loayout/CardWrapper/CardWrapper'
import styles from './TableBlock.module.scss'
import type { PropsWithChildren, ReactNode } from 'react'
import { getCardValues } from '@/utiles/getCardValues'
import clsx from 'clsx'

interface IProps {
  header: Array<{ text: string }>
  className?: string
}

export const TableBlock = ({
  children,
  header,
  className,
}: PropsWithChildren<IProps>) => {
  return (
    <CardWrapper>
      <table className={styles.table}>
        <thead className={className}>
          <tr>
            {header.map((el, indx) => (
              <td key={indx}>{el.text}</td>
            ))}
          </tr>
        </thead>
        {children}
      </table>
    </CardWrapper>
  )
}

TableBlock.body = function TableBlockBody({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <tbody className={clsx(styles.tbody, className)}>{children}</tbody>
}

TableBlock.foot = function TableBlockFoot({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) {
  return <tfoot className={className}>{children}</tfoot>
}
