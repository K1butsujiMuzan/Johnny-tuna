import useHead from '@/hooks/useHead'

function Basket() {
  useHead({
    title: 'Джонни Тунец | Корзина',
    description: 'Корзина с выбранными товарами',
    keywords: 'корзина, заказ, выбранные товары',
  })
  return (
    <>
      <h1>Корзина</h1>
    </>
  )
}

export default Basket
