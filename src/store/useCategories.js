import { create } from 'zustand'
import { getCategories } from '@/services/getCategories'

const useCategoriesStore = create((set) => ({
  categories: [],
  fetchCategories: async () => {
    const data = await getCategories()
    if(data) {
      set({categories: data})
    }
  }
}))

export const useCategories = () => useCategoriesStore(state => state.categories)
export const fetchCategories = () => useCategoriesStore.getState().fetchCategories()