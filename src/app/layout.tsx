import type { Metadata } from 'next'
import './globals.scss'
import MainProvider from './_mainProvider'
// export const metadata: Metadata = {
//   title: "BankDash",
//   description: "best bank ever",
//   icons: '/logoIcon.svg'
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>BankDash</title>
        <link rel="shortcut icon" href="/logoIcon.svg" type="image/x-icon" />
      </head>
      <body>
        <MainProvider>{children}</MainProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  )
}
