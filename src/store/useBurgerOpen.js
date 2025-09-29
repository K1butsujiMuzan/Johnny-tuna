import { create } from 'zustand'

const useBurgerStore = create(set => ({
  isBurgerOpen: false,
  closeBurger: () => set({ isBurgerOpen: false }),
  toggleBurger: () => set(state => ({ isBurgerOpen: !state.isBurgerOpen })),
}))

export const useIsBurgerOpen = () => useBurgerStore(state => state.isBurgerOpen)
export const closeBurger = () => useBurgerStore.getState().closeBurger()
export const toggleBurger = () => useBurgerStore.getState().toggleBurger()
