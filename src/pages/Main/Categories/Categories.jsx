import styles from "./Categories.module.css"
import { useCategories } from '@/store/useCategories'

function Categories() {
  const categories = useCategories()
  return (
    <section className={styles.categoriesContainer}>
      <h2>Категории</h2>
      <div className={styles.categoriesButtons}>
        {categories.map((category, index) => (
          <button className={styles.category} key={category.id}>{category.name}</button>
        ))}
      </div>
    </section>
  )
}

export default Categories
