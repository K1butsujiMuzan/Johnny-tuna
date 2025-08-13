import styles from "./HeaderModal.module.css"
import CitySelect from "@components/Header/parts/CitySelect/CitySelect";

function HeaderModal() {
  return (
    <div className={styles.headerModalInner}>
      <div className={styles.modalUp}>
        <div className={styles.modalUpLocation}>

        </div>
        <div className={styles.modalUpLinks}>

        </div>
      </div>
      <div className={styles.modalDown}>
        <div className={styles.modalDownPhone}>

        </div>
        <div className={styles.modalDownSoc1als}>

        </div>
      </div>
    </div>
  )
}

export default HeaderModal