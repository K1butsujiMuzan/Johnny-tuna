import styles from './DeliveryContainer.module.css'
import PageLink from '@components/UI/PageLink/PageLink'
import TextBlock from '@components/UI/TextBlock/TextBlock'
import { motion } from 'framer-motion'
import { delivery } from '@/constants/text'
import { deliveryCards, deliveryInformation } from '@/constants/images'

function DeliveryContainer() {
  return (
    <section className={'container pageContainer'}>
      <PageLink to={'/delivery'} text={'Доставка'} />
      <TextBlock>
        <h1 className={'pageTitle'}>Доставка — «Джонни Тунец»</h1>
      </TextBlock>
      <ul className={`${styles.deliveryValueList} ${styles.deliveryList}`}>
        {delivery.map((container, index) => (
          <motion.li
            key={index}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className={`${styles.deliveryValueItem} ${styles.deliveryItem}`}
          >
            <p className={styles.deliveryValueParagraph}>
              {container.paragraph}
            </p>
            <h2 className={styles.deliveryValueTitle}>{container.title}</h2>
          </motion.li>
        ))}
      </ul>
      <ul className={`${styles.advantagesCardsList} ${styles.deliveryList}`}>
        {deliveryCards.map((card, _) => (
          <li key={card.icon} className={styles.deliveryItem}>
            <img
              height={40}
              width={40}
              src={card.icon}
              alt=""
              aria-hidden={true}
            />
            <h3 className={styles.cardsTitle}>{card.title}</h3>
            <p className={styles.cardsParagraph}>{card.paragraph}</p>
          </li>
        ))}
      </ul>
      <div className={styles.deliveryInformation}>
        <ul className={styles.deliveryInformationList}>
          {deliveryInformation.map((card, _) => (
            <li className={styles.deliveryInformationItem} key={card.icon}>
              <img
                height={40}
                width={40}
                src={card.icon}
                alt=""
                aria-hidden={true}
              />
              <div
                className={`${styles.deliveryInformationText} ${styles.deliveryItem}`}
              >
                <h3 className={styles.cardsTitle}>{card.title}</h3>
                <p className={styles.cardsParagraph}>{card.paragraph}</p>
              </div>
            </li>
          ))}
        </ul>
        <iframe
          aria-label={'Зона доставки'}
          title={'Зона доставки'}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A8a49835c9272cc62f3b6da0dc5732cead9228bcb56b4b489d759a97c07980212&amp;source=constructor"
          width="852"
          height="600"
          className={styles.deliveryMap}
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  )
}

export default DeliveryContainer
