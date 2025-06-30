import { HTMLProps } from 'react'

interface Input extends HTMLProps<HTMLInputElement> {}

interface InputProps {
  error?: string | undefined
  title?: string
  id?: string
}

export type IFild = InputProps & Input
