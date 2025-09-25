import PageLink from '@components/UI/PageLink/PageLink'
import styles from './InformationContainer.module.css'
import TextBlock from '@components/UI/TextBlock/TextBlock'
import { information } from '@/constants/text'

function InformationContainer() {
  return (
    <section className={'container pageContainer'}>
      <PageLink to={'/information'} text={'Правовая информация'} />
      <TextBlock>
        <h1 className={'pageTitle'}>Правовая информация - «Джонни Тунец»</h1>
      </TextBlock>
      <div className={styles.textBlock}>
        {information.map((text, index) => (
          <p key={index} className={styles.text}>
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}

export default InformationContainer
