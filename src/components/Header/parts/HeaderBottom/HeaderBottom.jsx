import styles from "./HeaderBottom.module.css";
import Search from "@components/UI/Search/Search";

function HeaderBottom() {
  return(
    <div className={`${styles.headerBottom} container`}>
      <Search/>
    </div>
  )
}

export default HeaderBottom