import styles from './Categories.module.css'
import Button from '@components/ui/Button/Button'
import { useMemo } from 'react'

function Product({ name, description, image, price }) {
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
          src={image}
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
        <Button>Выбрать</Button>
      </div>
    </article>
  )
}

export default Product
