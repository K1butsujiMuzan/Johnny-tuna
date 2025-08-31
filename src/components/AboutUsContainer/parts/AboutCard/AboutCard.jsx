import styles from "./AboutCard.module.css"
import {motion} from "framer-motion";
import {cardsFormBottom} from "@/constants/variantsAnimation";

function AboutCard({
  text,
  image
}) {
  return(
    <motion.li
      className={`${styles.card} gradientBorder`}
      variants={cardsFormBottom}
      initial={"enter"}
      animate={"center"}
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