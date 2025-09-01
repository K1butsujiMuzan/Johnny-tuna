import styles from './NavLinks.module.css'
import {Link} from "react-router-dom";
import {scrollTop} from "@/scripts/toTop";
import {useBurger} from "@/contexts/IsBurgerOpen";

function NavLinks({
  to,
  children,
  isBlack
}) {
  const {setIsBurgerOpen, isBurgerOpen} = useBurger()
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
          if(isBurgerOpen === true) {
            setIsBurgerOpen(false)
          }
        }}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavLinks