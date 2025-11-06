import styles from './BasketLink.module.css'
import { memo } from 'react'

function DeleteProductButton({ isLoaded, onClick }) {
  return (
    <button
      aria-label={'Удалить товар'}
      type="button"
      className={styles.basketProductRemove}
      onClick={isLoaded ? onClick : undefined}
      disabled={!isLoaded}
    >
      <svg
        aria-hidden={true}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.75 0.75L0.75 12.93"
          stroke="#999999"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.75 0.75L12.75 12.93"
          stroke="#999999"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default memo(DeleteProductButton)
