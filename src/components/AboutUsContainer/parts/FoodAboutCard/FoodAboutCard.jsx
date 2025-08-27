import styles from "./FoodAboutCard.module.css"

function FoodAboutCard({
  text,
  image
}) {
  return(
    <li
      className={styles.card}
    >
      <p className={styles.cardText}>{text}</p>
      <img
        className={styles.cardImage}
        src={image}
        aria-hidden={true}
      />
    </li>
  )
}

export default FoodAboutCard