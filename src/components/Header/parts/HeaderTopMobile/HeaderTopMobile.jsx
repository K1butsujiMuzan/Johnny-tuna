import styles from "./HeaderTopMobile.module.css"
import Logo from "@components/UI/Logo/Logo";
import {useEffect, useState} from "react";
import HeaderModal from "@components/Header/parts/HeaderModal/HeaderModal";

function HeaderTopMobile() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle(styles.noScroll, isOpen)

    return () => {
      document.body.classList.remove(styles.noScroll)
    }
  }, [isOpen]);

  useEffect(() => {
    if(!isOpen) {
      return
    }

    const closeModal = (event)=> {
      if(isOpen && event.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", closeModal)

    return () => {
      window.removeEventListener("keydown", closeModal)
    }
  }, [isOpen]);

  return(
    <div className={`${isOpen ? styles.headerInnerOpen : styles.headerInner}`}>
      <div className={`
        ${styles.headerTopMobile}
        container
        ${isOpen ? styles.headerTopMobileOpen : ""}
      `}
      >
        <Logo className={"headerLogo"}/>
        <button
          type={"button"}
          className={styles.burgerButton}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className={isOpen
                ? `${styles.burgerSpan} ${styles.burgerSpanOpen}`
                : styles.burgerSpan}>
            </span>
          ))}
        </button>
      </div>
      {isOpen && <HeaderModal/>}
    </div>
  )
}

export default HeaderTopMobile