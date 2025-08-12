import styles from "./HeaderTopMobile.module.css"
import Logo from "@components/UI/Logo/Logo";

function HeaderTopMobile() {
  return(
    <div className={`${styles.headerTopMobile} container`}>
      <Logo className={"headerLogo"}/>
      <button
        type={"button"}
        className={styles.burgerButton}
        aria-label={"Открыть меню"}
      >
        <span className={styles.burgerSpan}></span>
      </button>
    </div>
  )
}

export default HeaderTopMobile