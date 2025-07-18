import type { Metadata } from 'next'
import './globals.scss'
import MainProvider from './_mainProvider'
import localFont from 'next/font/local'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: {
    default: 'BankDash',
    template: 'BankDash | %s ',
  },
  description: 'best bank ever',
  icons: '/logoIcon.svg',
}

export const localInter = localFont({
  src: [
    {
      path: './fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
})

export const localLato = localFont({
  src: [
    {
      path: './fonts/Lato-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Lato-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-lato',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx(localInter.variable, localLato.variable)}>
        <MainProvider>{children}</MainProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  )
}
