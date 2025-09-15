import {create} from "zustand";

export const useBurgerOpen = create((set) => ({
  isOpen: false,
  closeBurger: () => set({isOpen: false}),
  openBurger: () => set({isOpen: true}),
  toggleBurger: () => set((state) => ({isOpen: !state.isOpen}))
}))