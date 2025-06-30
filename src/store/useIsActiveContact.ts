import { create } from "zustand";

interface IId {
  id: number;
  setId: (id: number) => void;
}

export const useIsActiveContact = create<IId>()((set) => ({
  id: 0,
  setId: (id: number) =>
    set((state) => ({
      id: (state.id = id),
    })),
}));
