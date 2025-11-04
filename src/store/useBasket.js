import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useBasketStore = create(
  persist(
    set => ({
      allBasketProducts: [],
      totalBasketProducts: 0,
      totalBasketPrice: 0,

      addBasketProduct: ({ id, price }) => {
        set(state => {
          const currentObjectIndex = state.allBasketProducts.findIndex(
            element => element.id === id,
          )

          let newBasketProduct

          if (currentObjectIndex !== -1) {
            newBasketProduct = state.allBasketProducts.map((product, index) =>
              index === currentObjectIndex
                ? { ...product, quantity: product.quantity + 1 }
                : product,
            )
          } else {
            newBasketProduct = [...state.allBasketProducts, { id, quantity: 1 }]
          }
          return {
            totalBasketProducts: state.totalBasketProducts + 1,
            allBasketProducts: newBasketProduct,
            totalBasketPrice: state.totalBasketPrice + price,
          }
        })
      },

      removeBasketProduct: ({ id, price }) => {
        set(state => {
          const currentObjectIndex = state.allBasketProducts.findIndex(
            element => element.id === id,
          )

          if (currentObjectIndex === -1) return state

          const basketProduct = state.allBasketProducts[currentObjectIndex]
          let currentBasketProduct

          if (basketProduct.quantity > 1) {
            currentBasketProduct = state.allBasketProducts.map(
              (product, index) =>
                index === currentObjectIndex
                  ? { ...product, quantity: product.quantity - 1 }
                  : product,
            )
          } else {
            currentBasketProduct = state.allBasketProducts.filter(
              (_, index) => index !== currentObjectIndex,
            )
          }

          return {
            totalBasketProducts: state.totalBasketProducts - 1,
            allBasketProducts: currentBasketProduct,
            totalBasketPrice: state.totalBasketPrice - price,
          }
        })
      },
    }),
    { name: 'basket' },
  ),
)

export const useTotalBasketProducts = () =>
  useBasketStore(state => state.totalBasketProducts)
export const useAllBasketProducts = () =>
  useBasketStore(state => state.allBasketProducts)
export const useTotalBasketPrice = () =>
  useBasketStore(state => state.totalBasketPrice)
export const addBasketProduct = product =>
  useBasketStore.getState().addBasketProduct(product)
export const removeBasketProduct = product =>
  useBasketStore.getState().removeBasketProduct(product)
export const useProductQuantity = id =>
  useBasketStore(state => {
    const product = state.allBasketProducts.find(item => item.id === id)
    return product ? product.quantity : 0
  })
