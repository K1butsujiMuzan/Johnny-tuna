import styles from "./Header.module.css"
import HeaderTop from "@components/Header/parts/HeaderTop/HeaderTop";
import HeaderBottom from "@components/Header/parts/HeaderBottom/HeaderBottom";
import {useEffect, useState} from "react";

function Header() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1280)

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1280)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, []);

  return(
    <header className={styles.header}>
      {!isMobile && <HeaderTop />}
      <HeaderBottom/>
    </header>
  )
}

export default Header