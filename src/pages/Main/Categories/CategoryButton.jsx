import styles from './Categories.module.css'
import { memo } from 'react'

function CategoryButton ({onClick, isActive, name, index}) {
  return(
    <button
      className={`${styles.category} ${isActive ? styles.currentCategory : ''}`}
      onClick={() => onClick(index)}
    >
      {name}
    </button>
  )
}

export default memo(CategoryButton)