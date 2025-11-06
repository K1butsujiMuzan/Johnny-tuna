import { linkName, linkPath } from '@/constants/links.data'
import styles from './BasketLink.module.css'
import { Link } from 'react-router'
import { memo } from 'react'

function BasketPopUpLink() {
  return (
    <Link
      to={linkPath.basket}
      aria-label={linkName.basket}
      className={styles.basketPopUpLink}
    >
      В корзину
    </Link>
  )
}

export default memo(BasketPopUpLink)
