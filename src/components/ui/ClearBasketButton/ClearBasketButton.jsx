import styles from './ClearBasketButton.module.css'
import { memo } from 'react'
import { useClearBasket } from '@/store/useBasket'

function ClearBasketButton() {
  return (
    <button
      type="button"
      className={styles.clearBasketButton}
      onClick={useClearBasket}
      aria-label={'Очистить корзину'}
    >
      <svg
        aria-hidden={true}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5 7.5L21.4989 22.5161C21.4113 23.8312 21.3674 24.4889 21.0834 24.9875C20.8332 25.4265 20.456 25.7794 20.0014 25.9998C19.485 26.25 18.8259 26.25 17.5077 26.25H12.4922C11.1741 26.25 10.515 26.25 9.99861 25.9998C9.54396 25.7794 9.16674 25.4265 8.91665 24.9875C8.63259 24.4889 8.58875 23.8312 8.50107 22.5161L7.5 7.5M5 7.5H25M20 7.5L19.6617 6.48509C19.3339 5.50156 19.1699 5.0098 18.8659 4.64622C18.5974 4.32516 18.2526 4.07665 17.8631 3.92348C17.422 3.75 16.9037 3.75 15.867 3.75H14.133C13.0963 3.75 12.578 3.75 12.1369 3.92348C11.7474 4.07665 11.4026 4.32516 11.1341 4.64622C10.8301 5.0098 10.6662 5.50156 10.3383 6.48509L10 7.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default memo(ClearBasketButton)
