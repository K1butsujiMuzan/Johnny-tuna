import styles from './NavLinks.module.css'
import {Link} from "react-router-dom";
import {scrollTop} from "@/scripts/toTop";

function NavLinks({
  to,
  children,
  isBlack
}) {
  return(
    <li className={styles.item}>
      <Link
        className={`
          ${styles.topLink}
          ${isBlack ? styles.isBlack : ""}
        `}
        to={to}
        onClick={scrollTop}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavLinks