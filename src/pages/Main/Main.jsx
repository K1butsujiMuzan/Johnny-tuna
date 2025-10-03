import useHead from '@/hooks/useHead'
import styles from './Main.module.css'
import Slider from '@/pages/Main/Slider/Slider'
import Categories
  from '@/pages/Main/Categories/Categories'

function Main() {
  useHead({
    title: 'Джонни Тунец | Главная',
    description:
      '🍕 Пицца и 🍣 роллы с доставкой за 60 минут! Акции каждый день. Бесплатная доставка от 1500 руб.',
    keywords: 'пицца, роллы, доставка еды, кафе, еда на дом',
  })
  return (
    <div className={"pageContainer"}>
      <Slider />
      <div className={'container'}>
        <Categories/>
      </div>
    </div>
  )
}

export default Main
