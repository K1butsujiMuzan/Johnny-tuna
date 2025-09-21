import useHead from '@/hooks/useHead'
import AboutUsContainer from '@components/Containers/AboutUsContainer/AboutUsContainer'

function AboutUs() {
  useHead({
    title: 'Джонни Тунец | О нас',
    description:
      'Информация о нашем заведении, условиях оформления заказов и времени времени работы',
    keywords:
      'информация, время работы, условия, история, информация о заказах',
  })
  return <AboutUsContainer />
}

export default AboutUs
