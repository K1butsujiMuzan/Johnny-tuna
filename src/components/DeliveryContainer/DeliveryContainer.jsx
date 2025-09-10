import styles from "./DeliveryContainer.module.css"
import PageLink from "@components/UI/PageLink/PageLink";
import TextBlock from "@components/UI/TextBlock/TextBlock";
import {
  advantages,
  advantagesCards, informationCards
} from "@components/DeliveryContainer/delivery";

function DeliveryContainer() {


  return(
    <section className={"container pageContainer"}>
      <PageLink to={"/delivery"} text={"Доставка"}/>
      <TextBlock>
        <h1 className={"pageTitle"}>Доставка — «Джонни Тунец»</h1>
      </TextBlock>
      <ul className={styles.deliveryList}>
        {advantages.map((container, index) => (
          <li key={index} className={styles.deliveryItem}>
            <p className={styles.deliveryItemParagraph}>{container.paragraph}</p>
            <h2 className={styles.deliveryItemTitle}>{container.title}</h2>
          </li>
        ))}
      </ul>
      <ul className={styles.advantagesCardsList}>
        {advantagesCards.map((card, _) => (
          <li key={card.icon} className={styles.advantagesCardsItem}>
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
          {informationCards.map((card, _) => (
            <li className={styles.deliveryInformationItem} key={card.icon}>
              <img
                height={40}
                width={40}
                src={card.icon}
                alt=""
                aria-hidden={true}
              />
              <div className={styles.deliveryInformationText}>
                <h3 className={styles.cardsTitle}>{card.title}</h3>
                <p className={styles.cardsParagraph}>{card.paragraph}</p>
              </div>
            </li>
          ))}
        </ul>
        <iframe
          aria-label={"Зона доставки"}
          title={"Зона доставки"}
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