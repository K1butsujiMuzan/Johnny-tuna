import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCityStore = create(
  persist(
    set => ({
      cityValue: 'Калининград',
      setCity: newCity => {
        set({ cityValue: newCity })
      },
    }),
    { name: 'City' },
  ),
)

export const useCity = () => useCityStore(state => state.cityValue)
export const setCity = newCity => useCityStore.getState().setCity(newCity)
