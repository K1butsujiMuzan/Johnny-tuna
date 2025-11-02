import styles from './ProductToggleControls.module.css'
import { memo } from 'react'

function ToggleControl({ ariaLabel, onClick, children }) {
  return (
    <button
      className={styles.controlButton}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default memo(ToggleControl)
