import styles from "./AboutCard.module.css"
import {motion} from "framer-motion";

function AboutCard({
  text,
  image
}) {
  return(
    <motion.li
      className={`${styles.card} gradientBorder`}
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 1}}
    >
      <p className={styles.cardText}>{text}</p>
      <img
        className={styles.cardImage}
        src={image}
        aria-hidden={true}
        alt={""}
      />
    </motion.li>
  )
}

export default AboutCard