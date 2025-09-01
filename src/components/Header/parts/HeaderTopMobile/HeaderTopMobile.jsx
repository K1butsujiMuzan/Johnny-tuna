import styles from "./HeaderTopMobile.module.css"
import Logo from "@components/UI/Logo/Logo";
import HeaderModal from "@components/Header/parts/HeaderModal/HeaderModal";
import Search from "@components/UI/Search/Search";
import {useEffect, useState} from "react";
import {useBurger} from "@/contexts/IsBurgerOpen";

function HeaderTopMobile() {
  const {isBurgerOpen, setIsBurgerOpen} = useBurger()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle(styles.noScroll, isBurgerOpen)

    return () => {
      document.body.classList.remove(styles.noScroll)
    }
  }, [isBurgerOpen]);

  useEffect(() => {
    if(!isBurgerOpen) {
      return
    }

    const closeModal = (event)=> {
      if(isBurgerOpen && event.key === "Escape") {
        setIsBurgerOpen(false)
      }
    }

    window.addEventListener("keydown", closeModal)

    return () => {
      window.removeEventListener("keydown", closeModal)
    }
  }, [isBurgerOpen, setIsBurgerOpen]);

  return(
    <div className={`
      ${isBurgerOpen ? styles.headerInnerOpen : styles.headerInner}
    `}
    >
      <div className={`
        ${styles.headerTopMobile}
        container
        ${isBurgerOpen ? styles.headerTopMobileOpen : ""}
        ${isSearchOpen ? styles.headerTopMobileSearch : ""}
      `}
      >
        <Logo className={"headerLogo"}/>
        <div className={styles.headerButtons}>
          {!isBurgerOpen && (
            <button
              className={styles.searchButton}
              aria-label={"Поиск"}
              aria-expanded={isSearchOpen}
              onClick={() => setIsSearchOpen(prevState => !prevState)}
            >
              <svg
                className={styles.searchIcon}
                aria-hidden={true}
                width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.88352 18.7885C4.96518 18.7885 0.978516 14.8018 0.978516 9.88352C0.978516 4.96518 4.96518 0.978516 9.88352 0.978516C14.8018 0.978516 18.7885 4.96518 18.7885 9.88352C18.7885 14.8018 14.8018 18.7885 9.88352 18.7885Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.0208 21.0198L16.5684 16.5673" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          <button
            type={"button"}
            className={styles.burgerButton}
            aria-label={isBurgerOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isBurgerOpen}
            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
          >
            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className={isBurgerOpen
                  ? `${styles.burgerSpan} ${styles.burgerSpanOpen}`
                  : styles.burgerSpan}>
            </span>
            ))}
          </button>
        </div>
      </div>
      {isBurgerOpen && <HeaderModal/>}
      {isSearchOpen && !isBurgerOpen && (
        <div className={"container"}>
          <Search/>
        </div>
      )}
    </div>
  )
}

export default HeaderTopMobile