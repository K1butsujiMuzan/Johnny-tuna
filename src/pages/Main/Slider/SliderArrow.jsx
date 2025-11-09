import styles from './Slider.module.css'
import { memo } from 'react'

function SliderArrow({ isLeft = false, onClick }) {
  return (
    <button
      className={`${styles.sliderArrowButton} ${isLeft ? styles.sliderArrowButtonLeft : styles.sliderArrowButtonRight}`}
      type={'button'}
      aria-label={isLeft ? 'Назад' : 'Вперёд'}
      onClick={onClick}
    >
      <svg
        aria-hidden={true}
        className={styles.sliderArrow}
        width="9"
        height="18"
        viewBox="0 0 9 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isLeft ? (
          <path
            d="M8 16.5L1 9L8 1.5"
            stroke="#35ADE1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M1 1.5L8 9L1 16.5"
            stroke="#35ADE1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  )
}

export default memo(SliderArrow)
