import styles from './Categories.module.css'
import CategoryButton from '@/pages/Main/Categories/CategoryButton'
import { useAllCategories } from '@/store/useCategories'
import { useCallback, useEffect, useRef } from 'react'

function CategoryButtons({ currentCategory, setCurrentCategory }) {
  const allCategories = useAllCategories()

  const buttonsRef = useRef([])

  const setCurrentCategoryIndex = useCallback(index => {
    setCurrentCategory(index)
  }, [])

  useEffect(() => {
    buttonsRef.current[currentCategory]?.focus()
  }, [currentCategory])

  const keyCheck = useCallback(
    event => {
      if (event.key === 'ArrowRight') {
        setCurrentCategory(prevCategory =>
          prevCategory === allCategories.length - 1 ? 0 : prevCategory + 1,
        )
      } else if (event.key === 'ArrowLeft') {
        setCurrentCategory(prevCategory =>
          prevCategory === 0 ? allCategories.length - 1 : prevCategory - 1,
        )
      }
    },
    [currentCategory],
  )

  return (
    <div className={styles.categoriesButtons} onKeyDown={keyCheck}>
      {allCategories &&
        allCategories.map((category, index) => (
          <CategoryButton
            ref={button => (buttonsRef.current[index] = button)}
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
