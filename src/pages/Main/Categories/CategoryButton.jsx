import styles from './Categories.module.css'
import { memo } from 'react'

function CategoryButton({ onClick, isActive, name, index, ref }) {
  return (
    <button
      className={`${styles.category} ${isActive ? styles.currentCategory : ''}`}
      onClick={() => onClick(index)}
      tabIndex={isActive ? 0 : -1}
      ref={ref}
    >
      {name}
    </button>
  )
}

export default memo(CategoryButton)
