import useHead from '@/hooks/useHead'
import PageLink from '@components/ui/PageLink/PageLink'
import { linkName, linkPath } from '@/config/links.data'
import React, { useEffect } from 'react'
import { scrollTop } from '@/utils/toTop'
import BasketBottom from '@/pages/Basket/BasketBottom'
import BasketList from '@/pages/Basket/BasketList'
import { useAllBasketProducts } from '@/store/useBasket'

function Basket() {
  const products = useAllBasketProducts()

  useHead({
    title: 'Джонни Тунец | Корзина',
    description: 'Корзина с выбранными товарами',
    keywords: 'корзина, заказ, выбранные товары',
  })

  useEffect(() => {
    scrollTop()
  }, [])

  return (
    <section className={'container pageContainer'}>
      <PageLink to={linkPath.basket} text={linkName.basket} />
      <BasketList products={products} />
      {products.length !== 0 && <BasketBottom />}
    </section>
  )
}

export default Basket
