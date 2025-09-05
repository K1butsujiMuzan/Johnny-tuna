import styles from "./StocksContainer.module.css"
import PageLink from "@components/UI/PageLink/PageLink";
import {cards} from "@components/StocksContainer/stocks";
import TextBlock from "@components/UI/TextBlock/TextBlock";

function StocksContainer() {
  return(
    <section className={"container pageContainer"}>
      <PageLink to={"/stocks"} text={"Акции"}/>
      <TextBlock>
        <h1 className={"pageTitle"}>Акции — «Джонни Тунец»</h1>
      </TextBlock>
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles.stockCard}
          >
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
            <span className={styles.cardShow}>Подробнее</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StocksContainer