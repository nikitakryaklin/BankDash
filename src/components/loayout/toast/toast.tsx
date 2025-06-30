import type { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

export default function ToasterProvider({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <>
      <Toaster
        containerStyle={{
          top: 70,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          style: {
            border: '1px solid var(--text-color)',
            padding: '7px',
            borderRadius: '12px',
            color: 'var(--text-color)',
          },
        }}
      />
      {children}
    </>
  )
}
