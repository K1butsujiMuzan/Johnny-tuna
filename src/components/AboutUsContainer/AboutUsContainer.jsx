import styles from "./AboutUsContainer.module.css"
import FoodAboutCard from "@components/AboutUsContainer/parts/FoodAboutCard/FoodAboutCard";
import {cards, images} from "@components/AboutUsContainer/AboutUsImagex";

function AboutUsContainer() {
  return(
    <div className={`${styles.AboutUsInner} container`}>
      <div className={styles.textCard}>
        <h1 className={styles.AboutTitle}>О нас — «Джонни Тунец»</h1>
        <p className={styles.AboutParagraph}>Добро пожаловать в «Джонни Тунец» — кафе, где встречаются вкус, уют и дружеская атмосфера.</p>
      </div>
      <div className={styles.textCard}>
        <p className={`${styles.AboutParagraph} ${styles.AboutParagraphBlack}`}>Мы верим, что еда должна приносить радость, поэтому собрали в одном меню любимые блюда для любого настроения:</p>
      </div>
      <div className={styles.AboutGallery}>
        <ul className={styles.AboutGalleryCards}>
          {cards.map((card, index) => (
            <FoodAboutCard
              key={card.image}
              text={card.text}
              image={card.image}
            />
          ))}
        </ul>
        <div
          className={styles.AboutGalleryImages}
          aria-hidden={true}
        >
          {images.map((row, indexRow) => (
            <div
              className={styles.galleryRow}
              key={indexRow}
            >
              {row.map((image, indexImage) => (
                <picture key={indexImage}>
                  {image.sources.map((source, indexSource) => (
                    <source
                      key={source.srcSet}
                      srcSet={source.srcSet}
                      type={source.type}
                    />
                  ))}
                  <img
                    src={image.png}
                    key={image.png}
                    loading={"lazy"}
                  />
                </picture>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUsContainer