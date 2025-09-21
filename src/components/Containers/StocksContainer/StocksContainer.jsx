import styles from './StocksContainer.module.css'
import PageLink from '@components/UI/PageLink/PageLink'
import { cards, textModal } from '@/constants/Data/stocks'
import TextBlock from '@components/UI/TextBlock/TextBlock'
import { useState } from 'react'
import ModalText from '@components/Modals/ModalText/ModalText'
import { AnimatePresence } from 'framer-motion'

function StocksContainer() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  let [textIndex, setTextIndex] = useState(0)
  return (
    <>
      <section className={'container pageContainer'}>
        <PageLink to={'/stocks'} text={'Акции'} />
        <TextBlock>
          <h1 className={'pageTitle'}>Акции — «Джонни Тунец»</h1>
        </TextBlock>
        <ul className={styles.cardsContainer}>
          {cards.map((card, index) => (
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
          <ModalText
            setIsOpenModal={setIsOpenModal}
            text={textModal[textIndex]}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default StocksContainer
