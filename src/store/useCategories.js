import { create } from 'zustand'
import { categories } from '@/services/categories'

const useCategoriesStore = create(set => ({
  categories: [],
  getCategories: async () => {
    const data = await categories()
    set({ categories: data })
  },
}))

export const useCategories = () => useCategoriesStore(state => state.categories)
export const getCategories = () => useCategoriesStore.getState().getCategories()
