import styles from "./HeaderBottom.module.css";
import Search from "@components/UI/Search/Search";
import BasketButton from "@components/UI/BasketButton/BasketButton";

function HeaderBottom() {
  return(
    <div className={`${styles.headerBottom} container`}>
      <Search/>
      <div className={styles.headerBottomButtons}>
        <BasketButton/>
      </div>
    </div>
  )
}

export default HeaderBottom