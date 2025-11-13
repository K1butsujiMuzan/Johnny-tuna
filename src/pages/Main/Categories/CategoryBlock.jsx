import styles from './Categories.module.css'
import { useMemo } from 'react'
import { useProduct } from '@/store/useProducts'
import ProductCard from '@components/ui/ProductCard/ProductCard'

function CategoryBlock({ category }) {
  const products = useProduct()

  const productsToShow = useMemo(() => {
    return products.filter(product => {
      return product['category_id'] === category.id
    })
  }, [products, category.id])

  return (
    <div className={styles.categoryBlock} key={category.id}>
      <h3 className={styles.categoryTitle}>{category.name}</h3>
      <div className={styles.categoryProducts}>
        {productsToShow.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default CategoryBlock
