import { create } from 'zustand'
import { products } from '@/services/products'

const useProductsStore = create(set => ({
  products: [],
  getProducts: async () => {
    const data = await products()
    set({ products: data })
  },
}))

export const useProduct = () => useProductsStore(state => state.products)
export const getProducts = () => useProductsStore.getState().getProducts()
