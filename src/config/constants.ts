export const CONSTANTS = {
  API: process.env.NEXT_PUBLIC_API || 'http://localhost:1337/api',
  home: '/',
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

export const DAYS = ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

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

export const CATEGORY_COLORS: Record<string, string> = {
  Products: '#A8D86D',
  Transport: '#FC7900',
  Utilities: '#5A91C5',
  CommunicationsAndInternet: '#343C6A',
  Entertainment: '#00B894',
  Health: '#C56FC5',
  Education: '#FF6B6B',
  Shopping: '#00A8FF',
  Travel: '#8868FF',
  Subscriptions: '#FA00FF',
  Gifts: '#5B82E6',
  Income: '#FF7855',
  BonusesAndCashback: '#37B24D',
  Investments: '#4DA3D9',
  Other: '#FFBB38',
  Send: '#BDBDBD',
}
