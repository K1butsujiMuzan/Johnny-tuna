import styles from "./AboutCard.module.css"

function AboutCard({
  text,
  image
}) {
  return(
    <li
      className={`${styles.card} gradientBorder`}
    >
      <p className={styles.cardText}>{text}</p>
      <img
        className={styles.cardImage}
        src={image}
        aria-hidden={true}
        alt={""}
      />
    </li>
  )
}

export default AboutCard