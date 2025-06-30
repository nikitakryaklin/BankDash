import { create } from "zustand";

interface IBurger {
  isBurger: boolean;
  setIsBurger: () => void;
}

export const useBurgerStore = create<IBurger>()((set) => ({
  isBurger: false,
  setIsBurger: () =>
    set((state) => ({
      isBurger: !state.isBurger,
    })),
}));
