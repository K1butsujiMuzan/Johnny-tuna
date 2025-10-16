import styles from './Categories.module.css'
import CategoryButton from '@/pages/Main/Categories/CategoryButton'
import { useAllCategories } from '@/store/useCategories'
import { useCallback } from 'react'

function CategoryButtons ({currentCategory, setCurrentCategory}) {
  const allCategories = useAllCategories()

  const setCurrentCategoryIndex = useCallback(((index) => {
    setCurrentCategory(index)
  }), [])

  return(
    <div className={styles.categoriesButtons}>
      {allCategories && allCategories.map((category, index) => (
        <CategoryButton
          key={category.id}
          onClick={setCurrentCategoryIndex}
          name={category.name}
          isActive={index === currentCategory}
          index={index}
        />
      ))}
    </div>
  )
}

export default CategoryButtons