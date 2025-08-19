import styles from './NavLinks.module.css'
import {Link} from "react-router";

function NavLinks({to, children, isMobile, isBlack}) {
  return(
    <li className={styles.Item}>
      <Link
        className={`
          ${styles.TopLink}  
          ${isMobile ? styles.TopLinkMobile : ""}
          ${isBlack ? styles.isBlack : ""}
        `}
        to={to}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavLinks