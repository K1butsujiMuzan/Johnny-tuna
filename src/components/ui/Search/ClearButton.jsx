import styles from './Search.module.css'
import { memo } from 'react'

function ClearButton({ onClick }) {
  return (
    <button
      type={'reset'}
      className={styles.clearButton}
      onClick={onClick}
      aria-label={'Очистить'}
    >
      <svg
        aria-hidden={true}
        className={styles.clearIcon}
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9898 1L0.773926 14.0946"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.773926 1L12.9898 14.0946"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default memo(ClearButton)
