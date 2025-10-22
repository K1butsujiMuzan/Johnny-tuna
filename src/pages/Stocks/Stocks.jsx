import useHead from '@/hooks/useHead'
import styles from '@/pages/Stocks/Stocks.module.css'
import { useState } from 'react'
import PageLink from '@components/ui/PageLink/PageLink'
import { linkName, linkPath } from '@/constants/links.data'
import TextBlock from '@components/ui/TextBlock/TextBlock'
import { AnimatePresence } from 'framer-motion'
import ModalText from '@components/ui/ModalText/ModalText'
import { stocks, stocksCards } from '@/pages/Stocks/Stocks.data'

function Stocks() {
  useHead({
    title: 'Джонни Тунец | Акции',
    description: 'Специальные акции и скидки на продукцию нашего заведения',
    keywords:
      'акции, промокоды, скидки, купоны, специальные предложения, роллы, пицца',
  })

  const [isOpenModal, setIsOpenModal] = useState(false)
  let [textIndex, setTextIndex] = useState(0)

  return (
    <>
      <section className={'container pageContainer'}>
        <PageLink to={linkPath.stocks} text={linkName.stocks} />
        <TextBlock>
          <h1 className={'pageTitle'}>Акции — «Джонни Тунец»</h1>
        </TextBlock>
        <ul className={styles.cardsContainer}>
          {stocksCards.map((card, index) => (
            <li key={index} className={styles.stockCard}>
              <div className={styles.stockCardUp}>
                <picture>
                  {card.source.map((source, _) => (
                    <source
                      key={source.srcSet}
                      srcSet={source.srcSet}
                      type={source.type}
                    />
                  ))}
                  <img
                    className={styles.cardImage}
                    src={card.png}
                    alt={card.alt}
                    width={303}
                    height={160}
                  />
                </picture>
                <h2 className={styles.cardText}>{card.text}</h2>
              </div>
              <button
                onClick={() => {
                  setTextIndex(index)
                  setIsOpenModal(true)
                }}
                className={styles.cardShow}
              >
                Подробнее
              </button>
            </li>
          ))}
        </ul>
      </section>
      <AnimatePresence>
        {isOpenModal && (
          <ModalText setIsOpenModal={setIsOpenModal} text={stocks[textIndex]} />
        )}
      </AnimatePresence>
    </>
  )
}

export default Stocks
