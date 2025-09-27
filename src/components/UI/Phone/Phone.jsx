import styles from './Phone.module.css'
import { memo } from 'react'

function Phone() {
  return (
    <a href={'tel:89990009999'} className={styles.phoneContainerLink}>
      8 (999) 000-99-99
    </a>
  )
}

export default memo(Phone)
