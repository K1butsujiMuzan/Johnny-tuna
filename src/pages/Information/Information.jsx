import useHead from '@/hooks/useHead'
import styles from './Information.module.css'
import PageLink from '@components/ui/PageLink/PageLink'
import TextBlock from '@components/ui/TextBlock/TextBlock'
import {information} from '@/pages/Information/Information.data'
import { linkName, linkPath } from '@/constants/links.data'

function Information() {
  useHead({
    title: 'Джонни Тунец | Правовая информация',
    description: 'Информация о правах производителя и потребителя',
    keywords: 'права, информация, условия',
  })
  return (
    <section className={'container pageContainer'}>
      <PageLink to={linkPath.information} text={linkName.information} />
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

export default Information
