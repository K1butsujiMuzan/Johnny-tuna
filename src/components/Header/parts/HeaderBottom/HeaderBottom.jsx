import styles from "./HeaderBottom.module.css";
import Search from "@components/UI/Search/Search";
import BasketLink from "@components/UI/BasketLink/BasketLink";
import ProfileLink from "@components/UI/ProfileLink/ProfileLink";

function HeaderBottom() {
  return(
    <div className={`${styles.headerBottom} container`}>
      <Search/>
      <div className={styles.headerBottomButtons}>
        <BasketLink/>
        <ProfileLink/>
      </div>
    </div>
  )
}

export default HeaderBottom