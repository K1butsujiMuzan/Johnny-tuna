import styles from './ProductToggleControls.module.css'
import { addBasketProduct, removeBasketProduct } from '@/store/useBasket'
import { memo } from 'react'
import ToggleControl from '@components/ui/ProductToggleControls/ToggleControl'

function ProductToggleControls({ productCount, product }) {
  return (
    <div className={styles.controlsContainer}>
      <ToggleControl
        ariaLabel={'убрать 1'}
        onClick={event => {
          event.stopPropagation()
          removeBasketProduct(product)
        }}
      >
        -
      </ToggleControl>
      <span className={styles.productCount} aria-label={'количество продуктов'}>
        {productCount}
      </span>
      <ToggleControl
        ariaLabel={'добавить 1'}
        onClick={event => {
          event.stopPropagation()
          addBasketProduct(product)
        }}
      >
        +
      </ToggleControl>
    </div>
  )
}

export default memo(ProductToggleControls)
