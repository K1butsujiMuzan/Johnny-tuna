import { Link } from 'react-router-dom'
import styles from './PageLink.module.css'
import { linkName, linkPath } from '@/config/links.data'
import { memo } from 'react'

function PageLink({ to, text }) {
  return (
    <nav className={styles.linkContainer}>
      <Link className={styles.linkMain} to={linkPath.main}>
        {linkName.main}
      </Link>
      <span>/</span>
      <Link className={styles.linkCurrent} to={to}>
        {text}
      </Link>
    </nav>
  )
}

export default memo(PageLink)
