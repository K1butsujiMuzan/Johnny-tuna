import styles from './NavLinks.module.css'
import {Link} from "react-router-dom";
import {scrollTop} from "@/scripts/toTop";

function NavLinks({
  to,
  children,
  isBlack,
  setIsOpen
}) {
  return(
    <li className={styles.item}>
      <Link
        className={`
          ${styles.topLink}
          ${isBlack ? styles.isBlack : ""}
        `}
        to={to}
        onClick={() => {
          scrollTop()
          if(setIsOpen){
            setIsOpen(false)
          }
        }}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavLinks