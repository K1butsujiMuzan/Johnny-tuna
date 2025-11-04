import styles from './Stocks.module.css'
import { memo, useCallback, useState } from 'react'
import { stocks } from '@/pages/Stocks/Stocks.data'
import ModalText from '@components/ui/ModalText/ModalText'
import { AnimatePresence } from 'framer-motion'

function StockCard({ card, index }) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = useCallback(() => {
    setIsOpenModal(true)
  }, [])

  return (
    <>
      <li className={styles.stockCard}>
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
        <button onClick={openModal} className={styles.cardShow}>
          Подробнее
        </button>
      </li>
      <AnimatePresence>
        {isOpenModal && (
          <ModalText setIsOpenModal={setIsOpenModal} text={stocks[index]} />
        )}
      </AnimatePresence>
    </>
  )
}

export default memo(StockCard)
