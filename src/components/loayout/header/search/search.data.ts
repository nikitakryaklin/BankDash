import { CONSTANTS } from '@/config/constants'
import { nanoid } from 'nanoid'
import { useMemo } from 'react'

export const SEARCH_DATA = useMemo(() => {
  return [
    {
      id: nanoid(),
      title: 'my cards',
      htmlID: 'my_cards',
      link: CONSTANTS.home,
    },
    {
      id: nanoid(),
      title: 'recent transactions',
      htmlID: 'recent_transactions',
      link: CONSTANTS.home,
    },
    {
      id: nanoid(),
      title: 'weekly activity',
      htmlID: 'weekly_activity',
      link: CONSTANTS.home,
    },
    {
      id: nanoid(),
      title: 'expense statistics',
      htmlID: 'expense_statistics',
      link: CONSTANTS.home,
    },
    {
      id: nanoid(),
      title: 'quick transfer',
      htmlID: 'quick_transfer',
      link: CONSTANTS.home,
    },
    {
      id: nanoid(),
      title: 'add to friends',
      htmlID: 'quick_transfer',
      link: CONSTANTS.home,
    },
    {
      id: nanoid(),
      title: 'balance history',
      htmlID: 'balance_history',
      link: CONSTANTS.home,
    },
    {
      id: nanoid(),
      title: 'my cards',
      htmlID: 'my_cards',
      link: CONSTANTS.transactions,
    },
    {
      id: nanoid(),
      title: 'my expense',
      htmlID: 'my_expense',
      link: CONSTANTS.transactions,
    },
    {
      id: nanoid(),
      title: 'recent ransactions',
      htmlID: 'recent_transactions',
      link: CONSTANTS.transactions,
    },
    {
      id: nanoid(),
      title: 'my balance',
      htmlID: 'my_balance',
      link: CONSTANTS.accounts,
    },
    {
      id: nanoid(),
      title: 'income',
      htmlID: 'income',
      link: CONSTANTS.accounts,
    },
    {
      id: nanoid(),
      title: 'expense',
      htmlID: 'expanse',
      link: CONSTANTS.accounts,
    },
    {
      id: nanoid(),
      title: 'total saving',
      htmlID: 'total saving',
      link: CONSTANTS.accounts,
    },
    {
      id: nanoid(),
      title: 'last transactions',
      htmlID: 'recent_transactions',
      link: CONSTANTS.accounts,
    },
    {
      id: nanoid(),
      title: 'my_cards',
      htmlID: 'my_cards',
      link: CONSTANTS.accounts,
    },
    {
      id: nanoid(),
      title: 'debit & credit overview',
      htmlID: 'debit_&_credit_overview',
      link: CONSTANTS.accounts,
    },
    {
      id: nanoid(),
      title: 'invoices sent',
      htmlID: 'invoices_Sent',
      link: CONSTANTS.accounts,
    },
    {
      id: nanoid(),
      title: 'total invested amount',
      htmlID: 'total_invested_amount',
      link: CONSTANTS.investments,
    },
    {
      id: nanoid(),
      title: 'number of investments',
      htmlID: 'number_of_investments',
      link: CONSTANTS.investments,
    },
    {
      id: nanoid(),
      title: 'rate of return',
      htmlID: 'rate_of_return',
      link: CONSTANTS.investments,
    },
    {
      id: nanoid(),
      title: 'yearly total investment',
      htmlID: 'yearly_total_investment',
      link: CONSTANTS.investments,
    },
    {
      id: nanoid(),
      title: 'monthly revenue',
      htmlID: 'monthly_revenue',
      link: CONSTANTS.investments,
    },
    {
      id: nanoid(),
      title: 'my investment',
      htmlID: 'my_investment',
      link: CONSTANTS.investments,
    },
    {
      id: nanoid(),
      title: 'trending stock',
      htmlID: 'trending_stock',
      link: CONSTANTS.investments,
    },
    {
      id: nanoid(),
      title: 'bank statistics',
      htmlID: 'bank_statistics',
      link: CONSTANTS.credit,
    },
    {
      id: nanoid(),
      title: 'card list',
      htmlID: 'card_list',
      link: CONSTANTS.credit,
    },
    {
      id: nanoid(),
      title: 'add new card',
      htmlID: 'add_new_card',
      link: CONSTANTS.credit,
    },
    {
      id: nanoid(),
      title: 'card setting',
      htmlID: 'card_setting',
      link: CONSTANTS.credit,
    },
    {
      id: nanoid(),
      title: 'personal loans',
      htmlID: 'personal_loans',
      link: CONSTANTS.loans,
    },
    {
      id: nanoid(),
      title: 'corporate loans',
      htmlID: 'corporate_loans',
      link: CONSTANTS.loans,
    },
    {
      id: nanoid(),
      title: 'business loans',
      htmlID: 'business_loans',
      link: CONSTANTS.loans,
    },
    {
      id: nanoid(),
      title: 'custom loans',
      htmlID: 'custom_loans',
      link: CONSTANTS.loans,
    },
    {
      id: nanoid(),
      title: 'active loans overview',
      htmlID: 'active_loans_overview',
      link: CONSTANTS.loans,
    },
    {
      id: nanoid(),
      title: 'bank services list',
      htmlID: 'bank_services_list',
      link: CONSTANTS.services,
    },
    {
      id: nanoid(),
      title: 'settings',
      htmlID: 'settings',
      link: CONSTANTS.services,
    },
  ]
}, [])
