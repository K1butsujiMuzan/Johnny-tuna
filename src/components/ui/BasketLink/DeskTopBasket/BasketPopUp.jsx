import styles from './BasketLink.module.css'
import { useAllBasketProducts, useTotalBasketProducts } from '@/store/useBasket'
import React, { Suspense } from 'react'
import BasketPopUpLink from '@components/ui/BasketLink/DeskTopBasket/BasketPopUpLink'
import LoadingCircle from '@components/ui/LoadingCircle/LoadingCircle'

const LazyProduct = React.lazy(() => import('./BasketProduct'))

function BasketPopUp({ memoPrice }) {
  const products = useAllBasketProducts()
  const totalBasketProducts = useTotalBasketProducts()

  return (
    <div className={styles.basketPopUp}>
      <ul className={styles.basketPopUpList}>
        <Suspense fallback={<LoadingCircle width={'15rem'} />}>
          {products.map(product => {
            return [...Array(product.quantity)].map((_, index) => (
              <LazyProduct key={`${product.id}-${index}`} id={product.id} />
            ))
          })}
        </Suspense>
      </ul>
      <span className={styles.basketPopUpBorder}></span>
      <div className={styles.basketPopUpInformation}>
        <span>Позиций: {totalBasketProducts}</span>
        <div className={styles.basketPopUpInformationRight}>
          <span>{memoPrice} ₽</span>
          <BasketPopUpLink />
        </div>
      </div>
    </div>
  )
}

export default BasketPopUp
