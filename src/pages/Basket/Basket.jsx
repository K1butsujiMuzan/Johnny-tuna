import useHead from '@/hooks/useHead'
import PageLink from '@components/ui/PageLink/PageLink'
import { linkName, linkPath } from '@/config/links.data'
import styles from './basket.module.css'
import React, { Suspense, useEffect } from 'react'
import {
  useAllBasketProducts,
  useTotalBasketPrice,
  useTotalBasketProducts,
} from '@/store/useBasket'
import LoadingCircle from '@components/ui/LoadingCircle/LoadingCircle'
import emptyBasket from '@assets/images/Basket/emptyCart.svg'
import Button from '@components/ui/Button/Button'
import useConvertPrice from '@/hooks/useConvertPrice'
import { scrollTop } from '@/utils/toTop'
import ClearBasketButton from '@components/ui/ClearBasketButton/ClearBasketButton'

const LazyProduct = React.lazy(
  () => import('../../components/ui/BasketLink/DeskTopBasket/BasketProduct'),
)

function Basket() {
  useHead({
    title: 'Джонни Тунец | Корзина',
    description: 'Корзина с выбранными товарами',
    keywords: 'корзина, заказ, выбранные товары',
  })

  useEffect(() => {
    scrollTop()
  }, [])

  const products = useAllBasketProducts()
  const totalBasketProducts = useTotalBasketProducts()
  const price = useTotalBasketPrice()
  const convertedPrice = useConvertPrice(price)

  return (
    <section className={'container pageContainer'}>
      <PageLink to={linkPath.basket} text={linkName.basket} />
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
      {products.length !== 0 && (
        <div className={styles.basketBottom}>
          <div className={styles.basketBottomContainer}>
            <div className={styles.basketInformation}>
              <span>Сумма заказа: {convertedPrice}</span>
              <span>Количество товаров: {totalBasketProducts}</span>
            </div>
            <ClearBasketButton />
          </div>
          <Button>Оформить заказ</Button>
        </div>
      )}
    </section>
  )
}

export default Basket
