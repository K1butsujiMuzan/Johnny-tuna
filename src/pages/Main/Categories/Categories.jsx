import styles from './Categories.module.css'
import { useCategories } from '@/store/useCategories'
import { useState } from 'react'
import { useProduct } from '@/store/useProducts'
import Product from '@/pages/Main/Categories/Product'
import { cloudinary } from '@/utils/cloudinary'

function Categories() {
  const categories = useCategories()
  const products = useProduct()

  const [currentCategory, setCurrentCategory] = useState(1)

  return (
    <section className={styles.categoriesContainer}>
      <h2>Категории</h2>
      <div className={styles.categoriesButtons}>
        {categories.map((category, index) => (
          <button
            className={`${styles.category} ${index + 1 === currentCategory ? styles.currentCategory : ''}`}
            key={category.id}
            onClick={() => setCurrentCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      {categories.map(category => {
        if (currentCategory === 1 && category.id !== 1) {
          return (
            <div className={styles.categoryBlock} key={category.name}>
              <h3 className={styles.categoryTitle}>{category.name}</h3>
              <div className={styles.categoryProducts}>
                {products.map(product => {
                  if (product['category_id'] === category.id) {
                    return (
                      <Product
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={cloudinary(product.image)}
                      />
                    )
                  }
                })}
              </div>
            </div>
          )
        } else if (currentCategory === category.id && category.id !== 1) {
          return (
            <div className={styles.categoryBlock} key={category.name}>
              <h3 className={styles.categoryTitle}>{category.name}</h3>
              <div className={styles.categoryProducts}>
                {products.map(product => {
                  if (product['category_id'] === category.id) {
                    return (
                      <Product
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={cloudinary(product.image)}
                      />
                    )
                  }
                })}
              </div>
            </div>
          )
        }
      })}
    </section>
  )
}

export default Categories
