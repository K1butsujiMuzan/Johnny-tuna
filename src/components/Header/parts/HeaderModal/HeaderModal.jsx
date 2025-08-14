import styles from "./HeaderModal.module.css"
import CitySelect from "@components/Header/parts/CitySelect/CitySelect";
import NavLinks from "@components/UI/NavLink/NavLinks";

function HeaderModal() {
  return (
    <div className={styles.headerModalInner}>
      <div className={styles.modalUp}>
        <div className={styles.modalUpLocation}>
          <svg className={styles.locationIcon} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.083 2.75C8.39299 2.75 5.383 5.76 5.383 9.45C5.383 14.03 11.383 20.77 11.633 21.05C11.873 21.32 12.293 21.32 12.533 21.05C12.793 20.77 18.783 14.03 18.783 9.45C18.783 5.76 15.773 2.75 12.083 2.75Z" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.4679 11.7852C13.7606 11.5795 14.6417 10.3647 14.436 9.07204C14.2302 7.77936 13.0155 6.89824 11.7228 7.104C10.4301 7.30976 9.549 8.52449 9.75477 9.81717C9.96053 11.1099 11.1753 11.991 12.4679 11.7852Z" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <CitySelect isMobile/>
        </div>
        <div className={styles.modalUpLinks}>
          <NavLinks to={"/login"}>Войти (Профиль)</NavLinks>
          <NavLinks to={"/stocks"}>Акции</NavLinks>
          <NavLinks to={"/about"}>О нас</NavLinks>
          <NavLinks to={"/delivery"}>Доставка</NavLinks>
          <NavLinks to={"/contacts"}>Контакты</NavLinks>
        </div>
      </div>
      <div className={styles.modalDown}>
        <div className={styles.modalDownPhone}>

        </div>
        <div className={styles.modalDownSoc1als}>

        </div>
      </div>
    </div>
  )
}

export default HeaderModal