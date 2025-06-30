import { create } from "zustand";

interface IId {
  id: number;
  setId: (id: number) => void;
}

export const useIsActiveFilter = create<IId>()((set) => ({
  id: 1,
  type: "",
  setId: (id: number) =>
    set((state) => ({
      id: (state.id = id),
    })),
}));
