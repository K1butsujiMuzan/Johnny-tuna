import styles from "./HeaderModal.module.css"
import CitySelect from "@components/Containers/Header/parts/CitySelect/CitySelect";
import NavLinks from "@components/UI/NavLink/NavLinks";
import Phone from "@components/UI/Phone/Phone";
import Socials from "@components/UI/Socials/Socials";

function HeaderModal() {
  const links = [
    {
      to: "/login",
      text: "Войти (Профиль)"
    },
    {
      to: "/stocks",
      text: "Акции"
    },
    {
      to: "/about",
      text: "О нас"
    },
    {
      to: "/delivery",
      text: "Доставка"
    },
    {
      to: "/contacts",
      text: "Контакты"
    },
  ]

  return (
    <div className={styles.headerModalInner}>
      <div className={styles.modalUp}>
        <div className={styles.modalUpLocation}>
          <svg className={styles.locationIcon} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.083 2.75C8.39299 2.75 5.383 5.76 5.383 9.45C5.383 14.03 11.383 20.77 11.633 21.05C11.873 21.32 12.293 21.32 12.533 21.05C12.793 20.77 18.783 14.03 18.783 9.45C18.783 5.76 15.773 2.75 12.083 2.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.4679 11.7852C13.7606 11.5795 14.6417 10.3647 14.436 9.07204C14.2302 7.77936 13.0155 6.89824 11.7228 7.104C10.4301 7.30976 9.549 8.52449 9.75477 9.81717C9.96053 11.1099 11.1753 11.991 12.4679 11.7852Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <CitySelect isMobile/>
        </div>
        <nav>
          <ul className={styles.modalUpLinks}>
            {links.map((link, index) => (
              <NavLinks to={link.to} key={index}>{link.text}</NavLinks>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.modalDown}>
        <div className={styles.modalDownPhone}>
          <svg className={styles.phoneIcon} width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2364 12.2748L13.6912 11.9842C13.392 11.949 13.0886 11.9822 12.804 12.0811C12.5194 12.18 12.2609 12.3422 12.0479 12.5553L10.2042 14.3991C7.35968 12.9524 5.04761 10.6403 3.60092 7.79573L5.45465 5.94199C5.88552 5.51112 6.09594 4.90991 6.0258 4.29868L5.73522 1.77358C5.67841 1.28477 5.44382 0.83392 5.07613 0.506872C4.70843 0.179823 4.2333 -0.000583433 3.7412 1.41755e-06H2.00771C0.875436 1.41755e-06 -0.0664603 0.941902 0.00368089 2.07419C0.53475 10.6315 7.37853 17.4652 15.9257 17.9963C17.058 18.0665 17.9999 17.1246 17.9999 15.9923V14.2588C18.0099 13.2467 17.2484 12.395 16.2364 12.2748Z"/>
          </svg>
          <div className={styles.headerPhone}>
            <Phone isMobile/>
            <p className={styles.headerPhoneText}>Прием заказов с 9:00 до 23:00</p>
          </div>
        </div>
        <div className={styles.modalDownSocials}>
          <Socials/>
        </div>
      </div>
    </div>
  )
}

export default HeaderModal