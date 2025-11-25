import styles from './basket.module.css'
import React, { Suspense } from 'react'
import LoadingCircle from '@components/ui/LoadingCircle/LoadingCircle'
import emptyBasket from '@assets/images/Basket/emptyCart.svg'

const LazyProduct = React.lazy(
  () => import('../../components/ui/BasketLink/DeskTopBasket/BasketProduct'),
)

function BasketList({ products }) {
  return (
    <ul className={styles.basketList}>
      <Suspense fallback={<LoadingCircle width={'15rem'} />}>
        {products.length === 0 && (
          <li className={styles.basketEmpty}>
            <img
              aria-hidden={true}
              src={emptyBasket}
              alt=""
              width="200"
              height="200"
              loading="lazy"
            />
            <span>Корзина пуста...</span>
          </li>
        )}
        {products.map(product => {
          return [...Array(product.quantity)].map((_, index) => (
            <LazyProduct key={`${product.id}-${index}`} id={product.id} />
          ))
        })}
      </Suspense>
    </ul>
  )
}

export default BasketList
