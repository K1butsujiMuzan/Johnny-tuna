import styles from './NavLinks.module.css'
import {Link} from "react-router";

function NavLinks({to, children, isMobile}) {
  return(
    <li className={`${styles.headerTopItem} ${isMobile ? styles.headerTopItemMobile : ""}`}>
      <Link
        className={`
          ${styles.headerTopLink}  
          ${isMobile ? styles.headerTopLinkMobile : ""}
        `}
        to={to}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavLinks