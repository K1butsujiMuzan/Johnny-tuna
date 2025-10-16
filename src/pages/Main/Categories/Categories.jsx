import styles from './Categories.module.css'
import { useCategories } from '@/store/useCategories'
import { useProduct } from '@/store/useProducts'
import Product from '@/pages/Main/Categories/Product'
import { cloudinary } from '@/utils/cloudinary'
import CategoryButtons from '@/pages/Main/Categories/CategoryButtons'
import { useMemo, useState } from 'react'

function Categories() {
  const categories = useCategories()
  const products = useProduct()
  const [currentCategory, setCurrentCategory] = useState(0)

  const categoriesToShow = useMemo(() => {
    if(currentCategory === 0) {
      return categories
    }
    return categories.filter((category) => category.id === currentCategory)
  }, [currentCategory, categories])

  const productsToShow = useMemo(() => {
    const groupedCategories = {}

    categories.forEach((category) => {
      groupedCategories[category.id] = products.filter((product) => {
        return product["category_id"] === category.id
      })
    })
    console.log(groupedCategories)
    return groupedCategories
  }, [products])

  return (
    <section className={styles.categoriesContainer}>
      <h2>Категории</h2>
      <CategoryButtons setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}/>
      {categoriesToShow && categoriesToShow.map(category => (
        <div className={styles.categoryBlock} key={category.id}>
          <h3 className={styles.categoryTitle}>{category.name}</h3>
          <div className={styles.categoryProducts}>
            {productsToShow[category.id]?.map(product => (
              <Product
                key={product.id}
                name={product.name}
                description={product.description}
                image={cloudinary(product.image)}
                price={product.price}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Categories