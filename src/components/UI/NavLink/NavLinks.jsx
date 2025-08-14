import styles from './NavLinks.module.css'
import {Link} from "react-router";

function NavLinks({to, children}) {
  return(
    <li className={styles.headerTopItem}>
      <Link className={styles.headerTopLink} to={to}>{children}</Link>
    </li>
  )
}

export default NavLinks