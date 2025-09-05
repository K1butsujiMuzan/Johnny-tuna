import styles from "./AboutUsContainer.module.css"
import AboutCard from "@components/AboutUsContainer/parts/AboutCard/AboutCard";
import {foodCards, images, whyCards} from "@components/AboutUsContainer/AboutUsImages";
import {motion} from "framer-motion";
import {fromRight} from "@/constants/variantsAnimation";
import TextBlock from "@components/UI/TextBlock/TextBlock";
import PageLink from "@components/UI/PageLink/PageLink";

function AboutUsContainer() {
  return(
    <section className={"container pageContainer"}>
      <PageLink to={"/about"} text={"О нас"}/>
      <TextBlock>
        <h1 className={"pageTitle"}>О нас — «Джонни Тунец»</h1>
        <p className={styles.aboutParagraph}>Добро пожаловать в «Джонни Тунец» — кафе, где встречаются вкус, уют и дружеская атмосфера.</p>
      </TextBlock>
      <TextBlock>
        <p className={`${styles.aboutParagraph} ${styles.aboutParagraphBlack}`}>Мы верим, что еда должна приносить радость, поэтому собрали в одном меню любимые блюда для любого настроения:</p>
      </TextBlock>
      <div className={styles.aboutGallery}>
        <ul className={styles.aboutGalleryCards}>
          {foodCards.map((card, _) => (
            <AboutCard
              key={card.image}
              text={card.text}
              image={card.image}
            />
          ))}
        </ul>
        <div
          className={styles.aboutGalleryImages}
          aria-hidden={true}
        >
          {images.map((row, indexRow) => (
            <motion.div
              className={styles.galleryRow}
              key={indexRow}
              variants={fromRight}
              initial={"enter"}
              animate={"center"}
              transition={{duration: 1}}
            >
              {row.map((image, indexImage) => (
                <picture key={`${indexRow}-${indexImage}`}>
                  {image.sources.map((source, _) => (
                    <source
                      key={source.srcSet}
                      srcSet={source.srcSet}
                      type={source.type}
                    />
                  ))}
                  <img
                    src={image.png}
                    loading={"lazy"}
                    height={image.height}
                    width={image.width}
                    alt={""}
                  />
                </picture>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
      <TextBlock>
        <h2 className={"pageTitle"}>Почему выбирают нас?</h2>
        <p className={styles.aboutParagraph}>Мы делаем всё, чтобы каждый гость чувствовал себя комфортно и наслаждался вкусом в каждой детали.</p>
      </TextBlock>
      <ul className={styles.whyCards}>
        {whyCards.map((card, _) => (
          <AboutCard
            key={card.image}
            text={card.text}
            image={card.image}
          />
        ))}
      </ul>
    </section>
  )
}

export default AboutUsContainer