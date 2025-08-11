import styles from "./Header.module.css"
import {Link} from "react-router";
import Logo from "@components/UI/Logo/Logo";
import CitySelect from "@components/UI/CitySelect/CitySelect";
import NavLinks from "@components/UI/NavLink/NavLinks";
import Phone from "@components/UI/Phone/Phone";

function Header() {
  return(
    <header className={styles.header}>
      <div className={`${styles.headerTop} container`}>
        <div className={styles.headerTopLinks}>
          <Logo place={"headerLogo"}/>
          <span className={styles.headerArrow}></span>
          <CitySelect/>
          <nav className={styles.headerTopNav}>
            <ul className={styles.headerTopList}>
              <NavLinks to={"/stocks"}>Акции</NavLinks>
              <NavLinks to={"/about"}>О нас</NavLinks>
              <NavLinks to={"/delivery"}>Доставка</NavLinks>
              <NavLinks to={"/contacts"}>Контакты</NavLinks>
            </ul>
          </nav>
        </div>
        <Phone/>
      </div>
      <div className={"header__bottom container"}>

      </div>
    </header>
  )
}

export default Header