import { ServerCrashIcon } from 'lucide-react'
import { AccountIcon } from './AcideIcons/AccountIcon'
import { CredinIcon } from './AcideIcons/CreditIcon'
import { HomeIcon } from './AcideIcons/Home'
import { InvestmentsIcon } from './AcideIcons/investmentsIcon'
import { LoansIcon } from './AcideIcons/loansIcon'
import { PrivilegesIcon } from './AcideIcons/privilegesIcon'
import { ServisecIcon } from './AcideIcons/ServicesIcon'
import { SettingIcon } from './AcideIcons/SettingIcon'
import { TransactionsIcon } from './AcideIcons/TransactionsIcon'

export const AsideConfig = [
  {
    url: '/',
    text: 'Dashboard',
    icon: <HomeIcon />,
  },
  {
    url: '/transactions',
    text: 'Transactions',
    icon: <TransactionsIcon />,
  },
  {
    url: '/accounts',
    text: 'Accounts',
    icon: <AccountIcon />,
  },
  {
    url: '/investments',
    text: 'Investments',
    icon: <InvestmentsIcon />,
  },
  {
    url: '/credit',
    text: 'Credit Cards',
    icon: <CredinIcon />,
  },
  {
    url: '/loans',
    text: 'Loans',
    icon: <LoansIcon />,
  },
  {
    url: '/services',
    text: 'Services',
    icon: <ServisecIcon />,
  },
  {
    url: '/settings',
    text: 'Setting',
    icon: <SettingIcon />,
  },
  {
    url: '/management',
    text: 'Management',
    icon: <ServerCrashIcon style={{ fill: 'none' }} />,
  },
]
