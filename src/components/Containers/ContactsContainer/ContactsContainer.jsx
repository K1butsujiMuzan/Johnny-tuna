import styles from './ContactsContainer.module.css'
import TextBlock from '@components/UI/TextBlock/TextBlock'
import ContactsForm from '@components/Containers/ContactsContainer/parts/ContactsForm/ContactsForm'
import PageLink from '@components/UI/PageLink/PageLink'
import { addressInformation } from '@/constants/images'

function ContactsContainer() {
  return (
    <section className={'container pageContainer'}>
      <PageLink to={'/contacts'} text={'Контакты'} />
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

export default ContactsContainer
