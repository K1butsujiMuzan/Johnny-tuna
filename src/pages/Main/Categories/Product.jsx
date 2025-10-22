import styles from './Categories.module.css'
import Button from '@components/ui/Button/Button'
import { useMemo } from 'react'
import { addBasketProduct, useAllBasketProducts } from '@/store/useBasket'
import { cloudinary } from '@/utils/cloudinary'
import ProductToggleControls from '@components/ui/ProductToggleControls/ProductToggleControls'

function Product({ product }) {
  const { id, name, image, price, description } = product
  const allBasketProducts = useAllBasketProducts()

  const productCount = useMemo(() => {
    const product = allBasketProducts.find(product => product.id === id)
    return product ? product.quantity : 0
  }, [allBasketProducts])

  const convertedPrice = useMemo(() => {
    const firstPart = Math.floor(price / 1000)
    const lastPart = price % 1000
    if (firstPart > 0) {
      return `${firstPart} ${lastPart.toString().padStart(3, '0')} ₽`
    } else {
      return `${lastPart} ₽`
    }
  }, [price])

  const convertedDescription = useMemo(() => {
    if (description.length >= 60) {
      return `${description.slice(0, 60)}...`
    } else {
      return description
    }
  }, [description])

  return (
    <article className={styles.product}>
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
          <Button onButtonClick={() => addBasketProduct(product)}>
            Выбрать
          </Button>
        ) : (
          <ProductToggleControls
            productCount={productCount}
            product={product}
          />
        )}
      </div>
    </article>
  )
}

export default Product
