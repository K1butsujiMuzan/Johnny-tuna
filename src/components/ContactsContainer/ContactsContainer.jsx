import styles from  "./ContactsContainer.module.css"
import {motion} from "framer-motion";
import {addressInformation} from "@components/ContactsContainer/address";

function ContactsContainer() {
  const textVariants = {
    enter: {opacity: 0, x: -30},
    center: {opacity: 1, x: 0},
    view: {once: true, amount: 0.3}
  }

  return(
    <div className={`${styles.contactsContainer} container`}>
      <motion.div
        className={"textCard"}
        variants={textVariants}
        initial={"enter"}
        whileInView={"center"}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 1}}
      >
        <h1 className={"pageTitle"}>Контакты — «Джонни Тунец»</h1>
      </motion.div>
      <div className={`${styles.contactsInformation} gradientBorder`}>
        <iframe
          className={styles.contactsMap}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a0613d31508c2c8b6c4df1c6c0df04d427cdb6932de28f3220b096edafac9ce&amp;source=constructor"
          width="740"
          height="428"
          frameBorder="0"
        ></iframe>
        <ul className={styles.informationList}>
          {addressInformation.map((element, index) => (
            <li
              className={styles.informationItem}
              key={element.icon}
            >
              <img src={element.icon}/>
              <p className={styles.informationText}>{element.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ContactsContainer