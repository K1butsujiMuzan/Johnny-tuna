import styles from  "./ContactsContainer.module.css"
import {addressInformation} from "@components/ContactsContainer/address";
import {motion} from "framer-motion";
import TextBlock from "@components/UI/TextBlock/TextBlock";
import ContactsForm from "@components/ContactsContainer/ContactsForm/ContactsForm";
import {fromRight} from "@/constants/variantsAnimation";

function ContactsContainer() {
  return(
    <section className={`${styles.contactsContainer} container`}>
      <TextBlock>
        <h1 className={"pageTitle"}>Контакты — «Джонни Тунец»</h1>
      </TextBlock>
      <motion.div
        className={`${styles.contactsInformation} gradientBorder`}
        variants={fromRight}
        initial={"enter"}
        animate={"center"}
        transition={{duration: 1}}
      >
        <iframe
          aria-label={"Местоположение на карте"}
          className={styles.contactsMap}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a0613d31508c2c8b6c4df1c6c0df04d427cdb6932de28f3220b096edafac9ce&amp;source=constructor"
          width="740"
          height="428"
          frameBorder="0"
        ></iframe>
        <ul className={styles.informationList}>
          {addressInformation.map((element, _) => (
            <li
              className={styles.informationItem}
              key={element.icon}
            >
              <img
                aria-hidden={true}
                src={element.icon}
                alt={""}
              />
              <p className={styles.informationText}>{element.text}</p>
            </li>
          ))}
        </ul>
      </motion.div>
      <ContactsForm/>
    </section>
  )
}

export default ContactsContainer