import styles from './NavLinks.module.css'
import { Link } from 'react-router-dom'
import { scrollTop } from '@/scripts/Functions/toTop'
import { useBurgerOpen } from '@/store/useBurgerOpen'

function NavLinks({ to, children, isBlack }) {
  const { isOpen, closeBurger } = useBurgerOpen()
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
          isOpen ? closeBurger() : undefined
        }}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavLinks
