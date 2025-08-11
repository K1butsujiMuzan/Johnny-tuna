import styles from "./Phone.module.css"

function Phone() {
  return(
    <div className={styles.phoneContainer}>
      <a
        href={"tel:89990009999"}
        className={styles.phoneContainerLink}
      >
        8 (999) 000-99-99
      </a>
      <p className={styles.phoneContainerText}>Прием заказов с 9:00 до 23:00</p>
    </div>
  )
}
export default Phone