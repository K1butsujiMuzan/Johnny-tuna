import { create } from 'zustand'
import { getCategoryData } from '@/services/categoryData'
import { getApi } from '@/services/api'
import { errorTypes } from '@/constants/errorTypes.data'

const useProductsStore = create(set => ({
  products: [],
  getProducts: async () => {
    try {
      const data = await getCategoryData(getApi.getProducts)
      set({ products: data })
    } catch (error) {
      console.error(errorTypes.serverError)
    }
  },
}))

export const useProduct = () => useProductsStore(state => state.products)
export const getProduct = id => {
  return useProductsStore(state => state.products.find(item => item.id === id))
}
export const getProducts = () => useProductsStore.getState().getProducts()
