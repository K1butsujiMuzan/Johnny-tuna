import styles from './basket.module.css'
import ClearBasketButton from '@components/ui/ClearBasketButton/ClearBasketButton'
import Button from '@components/ui/Button/Button'
import React from 'react'
import useConvertPrice from '@/hooks/useConvertPrice'
import { useTotalBasketPrice, useTotalBasketProducts } from '@/store/useBasket'

function BasketBottom() {
  const totalBasketProducts = useTotalBasketProducts()
  const price = useTotalBasketPrice()
  const convertedPrice = useConvertPrice(price)

  return (
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
  )
}

export default BasketBottom
