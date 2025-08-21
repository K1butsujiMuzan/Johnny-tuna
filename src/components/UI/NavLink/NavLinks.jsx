import styles from './NavLinks.module.css'
import {Link} from "react-router-dom";

function NavLinks({to, children, isBlack}) {
  return(
    <li className={styles.Item}>
      <Link
        className={`
          ${styles.TopLink}
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