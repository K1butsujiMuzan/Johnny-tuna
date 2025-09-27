import useHead from '@/hooks/useHead'
import StocksContainer from '@components/features/StocksContainer/StocksContainer'

function Stocks() {
  useHead({
    title: 'Джонни Тунец | Акции',
    description: 'Специальные акции и скидки на продукцию нашего заведения',
    keywords:
      'акции, промокоды, скидки, купоны, специальные предложения, роллы, пицца',
  })
  return <StocksContainer />
}

export default Stocks
