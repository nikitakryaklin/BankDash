import { TRANSACTIONS } from '@/config/constants'
import { ITransaction } from '@/types/Transactions.type'
import { useMemo } from 'react'
import {
  BanknoteArrowDownIcon,
  BanknoteArrowUp,
  LucideReceipt,
  PiggyBankIcon,
} from 'lucide-react'
import { getCardValues } from '@/utiles/getCardValues'

export const useAccountPageCalculator = (
  balance: number,
  transactions: ITransaction[]
) => {
  const WIDGET_ACCOUNT_DATA = useMemo(() => {
    let expense = 0
    let income = 0

    transactions?.forEach((el) => {
      if (el.type === TRANSACTIONS.type.incoming) {
        income += Number(el.amount)
      }
      if (el.type === TRANSACTIONS.type.outgoing) {
        expense += Number(el.amount)
      }
    })

    return [
      {
        id: 1,
        title: 'My Balance',
        text: '$' + getCardValues.balance(String(balance)),
        color: '#FFBB38',
        icon: <LucideReceipt style={{ fill: 'none', stroke: '#FFBB38' }} />,
      },
      {
        id: 2,
        title: 'Income',
        color: '#396AFF',
        text: '$' + getCardValues.balance(String(income)),
        icon: <BanknoteArrowUp style={{ fill: 'none', stroke: '#396AFF' }} />,
      },
      {
        id: 3,
        title: 'Expense',
        color: '#FF82AC',
        text: '$' + getCardValues.balance(String(expense)),

        icon: (
          <BanknoteArrowDownIcon style={{ fill: 'none', stroke: '#FF82AC' }} />
        ),
      },
      {
        id: 4,
        title: 'Total Saving',
        color: '#16DBCC',
        text: '$' + getCardValues.balance(String(income - expense)),
        icon: <PiggyBankIcon style={{ fill: 'none', stroke: '#16DBCC' }} />,
      },
    ]
  }, [transactions, balance])
  return { WIDGET_ACCOUNT_DATA }
}
