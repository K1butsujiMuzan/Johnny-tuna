import styles from './ProductToggleControls.module.css'
import { addBasketProduct, removeBasketProduct } from '@/store/useBasket'
import { memo, useCallback } from 'react'
import ToggleControl from '@components/ui/ProductToggleControls/ToggleControl'

function ProductToggleControls({ productCount, product }) {
  const removeProduct = useCallback(event => {
    event.stopPropagation()
    removeBasketProduct(product)
  }, [])

  const addProduct = useCallback(event => {
    event.stopPropagation()
    addBasketProduct(product)
  }, [])

  return (
    <div className={styles.controlsContainer}>
      <ToggleControl ariaLabel={'убрать 1'} onClick={removeProduct}>
        -
      </ToggleControl>
      <span className={styles.productCount} aria-label={'количество продуктов'}>
        {productCount}
      </span>
      <ToggleControl ariaLabel={'добавить 1'} onClick={addProduct}>
        +
      </ToggleControl>
    </div>
  )
}

export default memo(ProductToggleControls)
