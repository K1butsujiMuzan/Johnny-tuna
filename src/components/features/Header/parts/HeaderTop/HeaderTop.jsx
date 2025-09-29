import styles from './HeaderTop.module.css'
import Logo from '@components/ui/Logo/Logo'
import CitySelect from '@components/ui/CitySelect/CitySelect'
import NavLinks from '@components/ui/NavLink/NavLinks'
import Phone from '@components/ui/Phone/Phone'
import { linkPath } from '@/constants/linkPath'

function HeaderTop() {
  const links = [
    {
      to: linkPath.stocks,
      text: 'Акции',
    },
    {
      to: linkPath.about,
      text: 'О нас',
    },
    {
      to: linkPath.delivery,
      text: 'Доставка',
    },
    {
      to: linkPath.contacts,
      text: 'Контакты',
    },
  ]
  return (
    <div className={`${styles.headerTop} container`}>
      <div className={styles.headerTopLinks}>
        <Logo className={'headerLogo'} />
        <span className={styles.headerBorder}></span>
        <div className={styles.headerTopLocation}>
          <svg
            className={styles.headerTopIcon}
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.083 2.75C8.39299 2.75 5.383 5.76 5.383 9.45C5.383 14.03 11.383 20.77 11.633 21.05C11.873 21.32 12.293 21.32 12.533 21.05C12.793 20.77 18.783 14.03 18.783 9.45C18.783 5.76 15.773 2.75 12.083 2.75Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.4679 11.7852C13.7606 11.5795 14.6417 10.3647 14.436 9.07204C14.2302 7.77936 13.0155 6.89824 11.7228 7.104C10.4301 7.30976 9.549 8.52449 9.75477 9.81717C9.96053 11.1099 11.1753 11.991 12.4679 11.7852Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <CitySelect />
        </div>
        <nav>
          <ul className={styles.headerTopList}>
            {links.map((link, index) => (
              <NavLinks to={link.to} key={index}>
                {link.text}
              </NavLinks>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.headerPhone}>
        <Phone />
        <p className={styles.headerPhoneText}>Прием заказов с 9:00 до 23:00</p>
      </div>
    </div>
  )
}

export default HeaderTop
