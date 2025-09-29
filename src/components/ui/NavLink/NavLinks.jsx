import styles from './NavLinks.module.css'
import { Link } from 'react-router-dom'
import { scrollTop } from '@/utils/toTop'
import { closeBurger, useIsBurgerOpen } from '@/store/useBurgerOpen'

function NavLinks({ to, children, isBlack }) {
  const isBurgerOpen = useIsBurgerOpen()

  return (
    <li className={styles.item}>
      <Link
        className={`
          ${styles.topLink}
          ${isBlack ? styles.isBlack : ''}
        `}
        to={to}
        onClick={() => {
          scrollTop()
          isBurgerOpen ? closeBurger() : undefined
        }}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavLinks
