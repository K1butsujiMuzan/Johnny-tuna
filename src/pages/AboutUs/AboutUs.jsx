import useHead from '@/hooks/useHead'
import styles from './AboutUs.module.css'
import AboutUsCard from '@/pages/AboutUs/AboutUsCard'
import {
  aboutFoodCards,
  aboutGallery,
  aboutWhyCards,
} from '@/pages/AboutUs/AboutUs.data'
import TextBlock from '@components/ui/TextBlock/TextBlock'
import PageLink from '@components/ui/PageLink/PageLink'
import { linkName, linkPath } from '@/config/links.data'

function AboutUs() {
  useHead({
    title: 'Джонни Тунец | О нас',
    description:
      'Информация о нашем заведении, условиях оформления заказов и времени времени работы',
    keywords:
      'информация, время работы, условия, история, информация о заказах',
  })

  return (
    <section className={'container pageContainer'}>
      <PageLink to={linkPath.about} text={linkName.about} />
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
            <AboutUsCard key={card.image} text={card.text} image={card.image} />
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
          <AboutUsCard key={card.image} text={card.text} image={card.image} />
        ))}
      </ul>
    </section>
  )
}

export default AboutUs
