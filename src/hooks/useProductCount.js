import { useMemo } from 'react'

function useProductCount(allBasketProducts, id) {
  return useMemo(() => {
    const product = allBasketProducts.find(product => product.id === id)
    return product ? product.quantity : 0
  }, [allBasketProducts])
}

export default useProductCount
