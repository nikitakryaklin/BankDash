import {
  Car,
  Home,
  Gamepad,
  Wifi,
  ShoppingBasket,
  Gift,
  TrendingUp,
  BadgeDollarSign,
  LineChart,
  MoreHorizontal,
  Repeat,
  Plane,
  CreditCard,
  Book,
  HeartPulse,
  BadgeDollarSignIcon,
} from 'lucide-react'
import { ICategory, ITypeColor } from './TransactionItem.type'

export const TransantionCategory: Record<string, ICategory> = {
  Products: {
    color: '#E7FFD9',
    iconColor: '#A8D86D',
    icon: <ShoppingBasket style={{ stroke: '#A8D86D', fill: 'none' }} />,
  },
  Transport: {
    color: '#D9E6F2',
    iconColor: '#5A91C5',
    icon: <Car style={{ stroke: '#5A91C5', fill: 'none' }} />,
  },
  Utilities: {
    // комуналка
    color: '#FFF9D9',
    iconColor: '#FFBB38',
    icon: <Home style={{ stroke: '#FFBB38', fill: 'none' }} />,
  },
  CommunicationsAndInternet: {
    color: '#D9F2E6',
    iconColor: '#00B894',
    icon: <Wifi style={{ stroke: '#00B894', fill: 'none' }} />,
  },
  Entertainment: {
    // развлечения
    color: '#F2D9F2',
    iconColor: '#C56FC5',
    icon: <Gamepad style={{ stroke: '#C56FC5', fill: 'none' }} />,
  },
  Health: {
    color: '#FFE1E1',
    iconColor: '#FF6B6B',
    icon: <HeartPulse style={{ stroke: '#FF6B6B', fill: 'none' }} />,
  },
  Education: {
    color: '#D9F0FF',
    iconColor: '#00A8FF',
    icon: <Book style={{ stroke: '#00A8FF', fill: 'none' }} />,
  },
  Shopping: {
    color: '#E7E1FF',
    iconColor: '#8868FF',
    icon: <CreditCard style={{ stroke: '#8868FF', fill: 'none' }} />,
  },
  Travel: {
    color: '#F4EAD9',
    iconColor: '#D1A26D',
    icon: <Plane style={{ stroke: '#D1A26D', fill: 'none' }} />,
  },
  Subscriptions: {
    color: '#E0E9FF',
    iconColor: '#5B82E6',
    icon: <Repeat style={{ stroke: '#5B82E6', fill: 'none' }} />,
  },
  Gifts: {
    color: '#FFD9C7',
    iconColor: '#FF7855',
    icon: <Gift style={{ stroke: '#FF7855', fill: 'none' }} />,
  },
  Income: {
    color: '#D9FFD9',
    iconColor: '#37B24D',
    icon: <TrendingUp style={{ stroke: '#37B24D', fill: 'none' }} />,
  },
  BonusesAndCashback: {
    color: '#D9F2FF',
    iconColor: '#4DA3D9',
    icon: <BadgeDollarSign style={{ stroke: '#4DA3D9', fill: 'none' }} />,
  },
  Investments: {
    color: '#FFF5D9',
    iconColor: '#FFBB38',
    icon: <LineChart style={{ stroke: '#FFBB38', fill: 'none' }} />,
  },
  Other: {
    color: '#F0F0F0',
    iconColor: '#BDBDBD',
    icon: (
      <MoreHorizontal
        style={{ stroke: '#BDBDBD', fill: 'none', margin: '0 auto' }}
      />
    ),
  },
  Send: {
    color: '#F8D3E0',
    iconColor: '#D48EB4',
    icon: (
      <BadgeDollarSignIcon
        style={{ stroke: '#D48EB4', fill: 'none', margin: '0 auto' }}
      />
    ),
  },
}
