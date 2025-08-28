import styles from "./AboutUsContainer.module.css"
import AboutCard from "@components/AboutUsContainer/parts/AboutCard/AboutCard";
import {foodCards, images, whyCards} from "@components/AboutUsContainer/AboutUsImages";
import {motion} from "framer-motion";

function AboutUsContainer() {
  const textVariants = {
    enter: {opacity: 0, x: -30},
    center: {opacity: 1, x: 0},
    view: {once: true, amount: 0.3}
  }

  return(
    <div className={`${styles.AboutUsInner} container`}>
      <motion.div
        className={styles.textCard}
        variants={textVariants}
        initial={"enter"}
        whileInView={"center"}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 1}}
      >
        <h1 className={styles.AboutTitle}>О нас — «Джонни Тунец»</h1>
        <p className={styles.AboutParagraph}>Добро пожаловать в «Джонни Тунец» — кафе, где встречаются вкус, уют и дружеская атмосфера.</p>
      </motion.div>
      <motion.div
        className={styles.textCard}
        variants={textVariants}
        initial={"enter"}
        whileInView={"center"}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 1, delay: 0.3}}
      >
        <p className={`${styles.AboutParagraph} ${styles.AboutParagraphBlack}`}>Мы верим, что еда должна приносить радость, поэтому собрали в одном меню любимые блюда для любого настроения:</p>
      </motion.div>
      <div className={styles.AboutGallery}>
        <ul className={styles.AboutGalleryCards}>
          {foodCards.map((card, _) => (
            <AboutCard
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
            <motion.div
              className={styles.galleryRow}
              key={indexRow}
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 1}}
              viewport={{once: true, amount: 0.3}}
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
      <motion.div
        className={styles.textCard}
        variants={textVariants}
        initial={"enter"}
        whileInView={"center"}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 1}}
      >
        <h2 className={styles.AboutSmallTitle}>Почему выбирают нас?</h2>
        <p className={styles.AboutParagraph}>Мы делаем всё, чтобы каждый гость чувствовал себя комфортно и наслаждался вкусом в каждой детали.</p>
      </motion.div>
      <ul className={styles.whyCards}>
        {whyCards.map((card, _) => (
          <AboutCard
            key={card.image}
            text={card.text}
            image={card.image}
          />
        ))}
      </ul>
    </div>
  )
}

export default AboutUsContainer