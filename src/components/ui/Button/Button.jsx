import styles from './Button.module.css'
import { memo } from 'react'

function Button({ children, isSubmit, isAccent, isDisabled, onButtonClick }) {
  return (
    <button
      className={`
        ${styles.button}
        ${isAccent ? styles.accent : ''}
      `}
      type={isSubmit ? 'submit' : 'button'}
      disabled={isDisabled}
      onClick={onButtonClick}
    >
      {children}
    </button>
  )
}

export default memo(Button)
