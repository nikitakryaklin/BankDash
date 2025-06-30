export type ITitle =
  | 'Overview'
  | 'Transactions'
  | 'Accounts'
  | 'Investments'
  | 'Credit Cards'
  | 'Loans'
  | 'Services'
  | 'My Privileges'
  | 'Setting'
  | 'Management'

export const titles: ITitle[] = [
  'Overview',
  'Transactions',
  'Accounts',
  'Investments',
  'Credit Cards',
  'Loans',
  'Services',
  'My Privileges',
  'Setting',
  'Management',
]

export const getTitle = (url: string) => {
  if (url === '/') return titles[0]
  if (url === '/credit') return titles[4]
  if (url === '/privileges') return titles[7]
  return [...titles.filter((title) => url.includes(title.toLowerCase()))]
}
