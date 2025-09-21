import { Link } from 'react-router-dom'
import styles from './PageLink.module.css'

function PageLink({ to, text }) {
  return (
    <nav className={styles.linkContainer}>
      <Link className={styles.linkMain} to={'/'}>
        Главная
      </Link>
      <span>/</span>
      <Link className={styles.linkCurrent} to={to}>
        {text}
      </Link>
    </nav>
  )
}

export default PageLink
