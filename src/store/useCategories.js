import { create } from 'zustand'
import { getCategoryData } from '@/services/categoryData'
import { getApi } from '@/services/api'

const useCategoriesStore = create(set => ({
  categories: [],
  allCategories: [],
  getCategories: async () => {
    const data = await getCategoryData(getApi.getCategories)
    set({
      categories: data,
      allCategories: [{ id: 0, name: 'Все' }, ...data],
    })
  },
}))

export const useCategories = () => useCategoriesStore(state => state.categories)
export const useAllCategories = () =>
  useCategoriesStore(state => state.allCategories)
export const getCategories = () => useCategoriesStore.getState().getCategories()
