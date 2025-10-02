import useHead from '@/hooks/useHead'
import styles from './Contacts.module.css'
import TextBlock from '@components/ui/TextBlock/TextBlock'
import ContactsForm from '@/pages/Contacts/ContactsForm'
import PageLink from '@components/ui/PageLink/PageLink'
import {addressInformation} from '@/pages/Contacts/Contacts.data'
import { linkName, linkPath } from '@/constants/links.data'

function Contacts() {
  useHead({
    title: 'Джонни Тунец | Контакты',
    description: 'Контакты для поддержки и обратной связи',
    keywords: 'контакты, поддержка, обратная связь, частые вопросы',
  })

  return (
    <section className={'container pageContainer'}>
      <PageLink to={linkPath.contacts} text={linkName.contacts} />
      <TextBlock>
        <h1 className={'pageTitle'}>Контакты — «Джонни Тунец»</h1>
      </TextBlock>
      <div className={`${styles.contactsInformation} gradientBorder`}>
        <iframe
          aria-label={'Местоположение на карте'}
          className={styles.contactsMap}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a0613d31508c2c8b6c4df1c6c0df04d427cdb6932de28f3220b096edafac9ce&amp;source=constructor"
          width="740"
          height="428"
          frameBorder="0"
          title={'Местоположение на карте'}
        ></iframe>
        <ul className={styles.informationList}>
          {addressInformation.map((element, _) => (
            <li className={styles.informationItem} key={element.icon}>
              <img aria-hidden={true} src={element.icon} alt={''} />
              <p className={styles.informationText}>{element.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <ContactsForm />
    </section>
  )
}

export default Contacts
