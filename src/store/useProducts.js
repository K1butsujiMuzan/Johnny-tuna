import { create } from 'zustand'
import { getCategoryData} from '@/services/categoryData'
import { getApi } from '@/services/api'

const useProductsStore = create(set => ({
  products: [],
  getProducts: async () => {
    const data = await getCategoryData(getApi.getProducts)
    set({ products: data })
  },
}))

export const useProduct = () => useProductsStore(state => state.products)
export const getProducts = () => useProductsStore.getState().getProducts()
