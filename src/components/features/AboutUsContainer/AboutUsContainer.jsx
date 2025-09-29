import styles from './AboutUsContainer.module.css'
import AboutCard from '@components/features/AboutUsContainer/parts/AboutCard/AboutCard'
import { aboutGallery, aboutWhyCards, aboutFoodCards } from '@/constants/images'
import TextBlock from '@components/ui/TextBlock/TextBlock'
import PageLink from '@components/ui/PageLink/PageLink'
import { linkPath } from '@/constants/linkPath'

function AboutUsContainer() {
  return (
    <section className={'container pageContainer'}>
      <PageLink to={linkPath.about} text={'О нас'} />
      <TextBlock>
        <h1 className={'pageTitle'}>О нас — «Джонни Тунец»</h1>
        <p className={styles.aboutParagraph}>
          Добро пожаловать в «Джонни Тунец» — кафе, где встречаются вкус, уют и
          дружеская атмосфера.
        </p>
      </TextBlock>
      <TextBlock>
        <p className={`${styles.aboutParagraph} ${styles.aboutParagraphBlack}`}>
          Мы верим, что еда должна приносить радость, поэтому собрали в одном
          меню любимые блюда для любого настроения:
        </p>
      </TextBlock>
      <div className={styles.aboutGallery}>
        <ul className={styles.aboutGalleryCards}>
          {aboutFoodCards.map((card, _) => (
            <AboutCard key={card.image} text={card.text} image={card.image} />
          ))}
        </ul>
        <div className={styles.aboutGalleryImages} aria-hidden={true}>
          {aboutGallery.map((row, indexRow) => (
            <div className={styles.galleryRow} key={indexRow}>
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
                    loading={'lazy'}
                    height={image.height}
                    width={image.width}
                    alt={''}
                  />
                </picture>
              ))}
            </div>
          ))}
        </div>
      </div>
      <TextBlock>
        <h2 className={'pageTitle'}>Почему выбирают нас?</h2>
        <p className={styles.aboutParagraph}>
          Мы делаем всё, чтобы каждый гость чувствовал себя комфортно и
          наслаждался вкусом в каждой детали.
        </p>
      </TextBlock>
      <ul className={styles.whyCards}>
        {aboutWhyCards.map((card, _) => (
          <AboutCard key={card.image} text={card.text} image={card.image} />
        ))}
      </ul>
    </section>
  )
}

export default AboutUsContainer
