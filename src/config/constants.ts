export const CONSTANTS = {
  API: process.env.NEXT_PUBLIC_API || 'http://localhost:1337/api',
  accounts: '/accounts',
  credit: '/credit',
  investments: '/investments',
  loans: '/loans',
  login: '/auth/login',
  privileges: '/privileges',
  services: '/services',
  settings: '/settings',
  transactions: '/transactions',
}

export const TRANSACTIONS = {
  type: {
    incoming: 'incoming',
    outgoing: 'outgoing',
    cancelled: 'cancelled',
  },
  category: {
    Products: 'Products',
    Transport: 'Transport',
    Utilities: 'Utilities',
    CommunicationsAndInternet: 'CommunicationsAndInternet',
    Entertainment: 'Entertainment',
    Health: 'Health',
    Education: 'Education',
    Shopping: 'Shopping',
    Travel: 'Travel',
    Subscriptions: 'Subscriptions',
    Gifts: 'Gifts',
    Income: 'Income',
    BonusesAndCashback: 'BonusesAndCashback',
    Investments: 'Investments',
    Other: 'Other',
    Send: 'Send',
  },
}
