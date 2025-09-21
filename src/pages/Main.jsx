import useHead from '@/hooks/useHead'
import MainContainer from '@components/Containers/MainContainer/MainContainer'

function Main() {
  useHead({
    title: 'Джонни Тунец | Главная',
    description:
      '🍕 Пицца и 🍣 роллы с доставкой за 60 минут! Акции каждый день. Бесплатная доставка от 1500 руб.',
    keywords: 'пицца, роллы, доставка еды, кафе, еда на дом',
  })
  return <MainContainer />
}

export default Main
