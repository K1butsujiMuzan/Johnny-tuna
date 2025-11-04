import useHead from '@/hooks/useHead'
import styles from '@/pages/Stocks/Stocks.module.css'
import PageLink from '@components/ui/PageLink/PageLink'
import { linkName, linkPath } from '@/constants/links.data'
import TextBlock from '@components/ui/TextBlock/TextBlock'
import { stocksCards } from '@/pages/Stocks/Stocks.data'
import StockCard from '@/pages/Stocks/StockCard'

function Stocks() {
  useHead({
    title: 'Джонни Тунец | Акции',
    description: 'Специальные акции и скидки на продукцию нашего заведения',
    keywords:
      'акции, промокоды, скидки, купоны, специальные предложения, роллы, пицца',
  })

  return (
    <>
      <section className={'container pageContainer'}>
        <PageLink to={linkPath.stocks} text={linkName.stocks} />
        <TextBlock>
          <h1 className={'pageTitle'}>Акции — «Джонни Тунец»</h1>
        </TextBlock>
        <ul className={styles.cardsContainer}>
          {stocksCards.map((card, index) => (
            <StockCard key={index} card={card} index={index} />
          ))}
        </ul>
      </section>
    </>
  )
}

export default Stocks
