import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type viewElement = 'edit' | 'preferences' | 'security'

interface ISettingViewStore {
  viewElement: viewElement
  setViewElement: (viewElement: viewElement) => void
}

export const useSettingViewStore = create<ISettingViewStore>()(
  persist(
    (set) => ({
      viewElement: 'edit',
      setViewElement: (viewElement: viewElement) =>
        set(() => ({
          viewElement: viewElement,
        })),
    }),
    { name: 'SettingViewElement' }
  )
)
