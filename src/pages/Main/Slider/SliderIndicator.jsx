import styles from './Slider.module.css'
import { memo } from 'react'

function SliderIndicator({ isActive, onClick, imageAlt, ref }) {
  return (
    <button
      type={'button'}
      aria-label={`Перейти к слайду: ${imageAlt}`}
      aria-current={isActive ? true : undefined}
      onClick={onClick}
      className={`${styles.sliderCircle} ${isActive ? styles.sliderCircleActive : ''}`}
      ref={ref}
      tabIndex={isActive ? 0 : -1}
    ></button>
  )
}

export default memo(SliderIndicator)
