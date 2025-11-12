import { cloudinary } from '@/utils/cloudinary'
import useConvertPrice from '@/hooks/useConvertPrice'
import styles from './Search.module.css'
import { memo, useCallback, useState } from 'react'
import ProductModal from '@components/ui/ProductModal/ProductModal'
import { addBasketProduct, useProductQuantity } from '@/store/useBasket'
import { AnimatePresence } from 'framer-motion'

function SearchProductItem({ product }) {
  const { id, name, description, price, image } = product
  const [isProductOpen, setIsProductOpen] = useState(false)

  const productCount = useProductQuantity(id)
  const convertedPrice = useConvertPrice(price)

  const selectClick = useCallback(() => {
    addBasketProduct(product)
  }, [product])

  const openProductModal = useCallback(() => {
    setIsProductOpen(true)
  }, [])

  const onKeyOpenModal = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsProductOpen(true)
    }
  }

  if (!id) return <li className={styles.emptyProduct}>{product}</li>

  return (
    <>
      <li
        className={styles.searchProduct}
        tabIndex={0}
        onClick={openProductModal}
        onKeyDown={onKeyOpenModal}
        role={'button'}
      >
        <img
          className={styles.searchProductImage}
          src={cloudinary(image)}
          alt={name}
          width="70"
          height="70"
          loading="lazy"
        />
        <div className={styles.searchProductRight}>
          <div className={styles.searchProductInformation}>
            <span className={styles.searchProductTitle}>{name}</span>
            <p className={styles.searchProductDescription}>{description}</p>
          </div>
          <span className={styles.productPrice}>{convertedPrice}</span>
        </div>
      </li>

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

export default memo(SearchProductItem)
