import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface INotify {
  isNotify: boolean
  setIsNotify: () => void
}

export const useNotifyStore = create<INotify>()(
  persist(
    (set) => ({
      isNotify: true,
      setIsNotify: () => set((state) => ({ isNotify: !state.isNotify })),
    }),
    { name: 'dsa' }
  )
)
