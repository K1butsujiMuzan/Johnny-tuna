import styles from './Categories.module.css'
import { useCategories } from '@/store/useCategories'
import CategoryButtons from './CategoryButtons'
import React, { Suspense, useMemo, useState } from 'react'
import LoadingCircle from '@components/ui/LoadingCircle/LoadingCircle'

const LazyCategoryBlock = React.lazy(() => import('./CategoryBlock'))

function Categories() {
  const categories = useCategories()
  const [currentCategory, setCurrentCategory] = useState(0)

  const categoriesToShow = useMemo(() => {
    if (currentCategory === 0) {
      return categories
    }
    return categories.filter(category => category.id === currentCategory)
  }, [currentCategory, categories])

  return (
    <section className={styles.categoriesContainer}>
      <h2>Категории</h2>
      <CategoryButtons
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <Suspense
        fallback={
          <div className={styles.productsLoading}>
            <LoadingCircle width={'20rem'} />
          </div>
        }
      >
        {categoriesToShow &&
          categoriesToShow.map(category => (
            <LazyCategoryBlock category={category} key={category.id} />
          ))}
      </Suspense>
    </section>
  )
}

export default Categories
