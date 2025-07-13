import { create } from 'zustand'

interface ISearchStore {
  searchValue: string
  setSearchValue: (searchValue: string) => void
}

export const useSearchStore = create<ISearchStore>()((set) => ({
  searchValue: '',
  setSearchValue: (searchValue: string) =>
    set((state) => ({
      searchValue: (state.searchValue = searchValue),
    })),
}))
