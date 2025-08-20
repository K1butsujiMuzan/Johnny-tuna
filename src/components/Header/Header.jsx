import styles from "./Header.module.css"
import HeaderTop from "@components/Header/parts/HeaderTop/HeaderTop";
import HeaderBottom from "@components/Header/parts/HeaderBottom/HeaderBottom";
import {useEffect, useState} from "react";
import HeaderTopMobile from "@components/Header/parts/HeaderTopMobile/HeaderTopMobile";

function Header() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1200)

    checkScreen()
    window.addEventListener("resize", checkScreen)

    return () => {
      window.removeEventListener("resize", checkScreen)
    }
  }, []);

  return(
    <>
      <header className={styles.header}>
        {!isMobile && <HeaderTop />}

        {isMobile && <HeaderTopMobile/>}
      </header>
      {!isMobile && (
        <div className={styles.headerBottom}>
          <HeaderBottom/>
        </div>
      )}

    </>
  )
}

export default Header