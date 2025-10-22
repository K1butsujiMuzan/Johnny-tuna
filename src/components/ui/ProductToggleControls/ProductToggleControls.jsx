import styles from './ProductToggleControls.module.css'
import { addBasketProduct, removeBasketProduct } from '@/store/useBasket'

function ProductToggleControls({ productCount, product }) {
  return (
    <div className={styles.controlsContainer}>
      <button
        className={styles.controlButton}
        type="button"
        aria-label={'убрать 1'}
        onClick={() => removeBasketProduct(product)}
      >
        -
      </button>
      <span className={styles.productCount} aria-label={'количество продуктов'}>
        {productCount}
      </span>
      <button
        className={styles.controlButton}
        type="button"
        aria-label={'добавить 1'}
        onClick={() => addBasketProduct(product)}
      >
        +
      </button>
    </div>
  )
}

export default ProductToggleControls
