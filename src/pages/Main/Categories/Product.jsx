import styles from './Categories.module.css'
import Button from '@components/ui/Button/Button'
import { useCallback, useState } from 'react'
import { addBasketProduct, useAllBasketProducts } from '@/store/useBasket'
import { cloudinary } from '@/utils/cloudinary'
import ProductToggleControls from '@components/ui/ProductToggleControls/ProductToggleControls'
import ProductModal from '@components/ui/ProductModal/ProductModal'
import useConvertPrice from '@/hooks/useConvertPrice'
import useConvertDescription from '@/hooks/useConvertDescription'
import useProductCount from '@/hooks/useProductCount'
import { AnimatePresence } from 'framer-motion'

function Product({ product }) {
  const { id, name, image, price, description } = product

  const allBasketProducts = useAllBasketProducts()
  const convertedPrice = useConvertPrice(price)
  const convertedDescription = useConvertDescription(description)
  const productCount = useProductCount(allBasketProducts, id)

  const [isProductOpen, setIsProductOpen] = useState(false)

  const openProductModal = useCallback(() => {
    setIsProductOpen(true)
  }, [])

  const selectClick = event => {
    event.stopPropagation()
    addBasketProduct(product)
  }

  return (
    <>
      <article
        className={styles.product}
        tabIndex={0}
        onClick={openProductModal}
      >
        <div className={styles.productUp}>
          <img
            className={styles.productImage}
            src={cloudinary(image)}
            alt={name}
            width="400"
            height="400"
            loading="lazy"
          />
          <h3 className={styles.productTitle}>{name}</h3>
          <p className={styles.productDescription}>{convertedDescription}</p>
        </div>
        <div className={styles.productDown}>
          <span className={styles.productPrice}>{convertedPrice}</span>
          {productCount === 0 ? (
            <Button onButtonClick={selectClick}>Выбрать</Button>
          ) : (
            <ProductToggleControls
              productCount={productCount}
              product={product}
            />
          )}
        </div>
      </article>
      <AnimatePresence>
        {isProductOpen && (
          <ProductModal
            onButtonClick={selectClick}
            productCount={productCount}
            isProductOpen={isProductOpen}
            setIsProductOpen={setIsProductOpen}
            product={product}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Product
