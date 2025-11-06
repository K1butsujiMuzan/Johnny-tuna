import styles from './BasketLink.module.css'
import { useAllBasketProducts, useTotalBasketProducts } from '@/store/useBasket'
import React, { Suspense } from 'react'
import BasketPopUpLink from '@components/ui/BasketLink/DeskTopBasket/BasketPopUpLink'
import LoadingCircle from '@components/ui/LoadingCircle/LoadingCircle'
import emptyBasket from '@assets/images/Basket/emptyCart.svg'
import ClearBasketButton from '@components/ui/ClearBasketButton/ClearBasketButton'

const LazyProduct = React.lazy(() => import('./BasketProduct'))

function BasketPopUp({ memoPrice }) {
  const products = useAllBasketProducts()
  const totalBasketProducts = useTotalBasketProducts()

  return (
    <div className={styles.basketPopUp}>
      <ul className={styles.basketPopUpList}>
        <Suspense fallback={<LoadingCircle width={'15rem'} />}>
          {products.length === 0 && (
            <li className={styles.basketPopUpEmpty}>
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
      <span className={styles.basketPopUpBorder}></span>
      <div className={styles.basketPopUpInformation}>
        <div className={styles.basketPopUpInformationBlock}>
          <span>Позиций: {totalBasketProducts}</span>
          <ClearBasketButton />
        </div>
        <div className={styles.basketPopUpInformationBlock}>
          <span>{memoPrice} ₽</span>
          <BasketPopUpLink />
        </div>
      </div>
    </div>
  )
}

export default BasketPopUp
