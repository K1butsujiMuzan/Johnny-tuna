import styles from "./HeaderBottom.module.css";
import Search from "@components/UI/Search/Search";
import BasketButton from "@components/UI/BasketButton/BasketButton";
import ProfileButton from "@components/UI/ProfileButton/ProfileButton";

function HeaderBottom() {
  return(
    <div className={`${styles.headerBottom} container`}>
      <Search/>
      <div className={styles.headerBottomButtons}>
        <BasketButton/>
        <ProfileButton/>
      </div>
    </div>
  )
}

export default HeaderBottom