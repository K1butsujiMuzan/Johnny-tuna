import { cloudinary } from '@/utils/cloudinary'
import styles from './BasketLink.module.css'
import useConvertPrice from '@/hooks/useConvertPrice'
import { memo, useCallback, useEffect, useState } from 'react'
import { removeBasketProduct } from '@/store/useBasket'
import { getProduct } from '@/store/useProducts'
import LoadingCircle from '@components/ui/LoadingCircle/LoadingCircle'
import DeleteProductButton from '@components/ui/BasketLink/DeskTopBasket/DeleteProductButton'

function BasketProduct({ id }) {
  const [content, setContent] = useState({
    id: id,
    name: 'Загрузка...',
    image: '',
    price: '',
    isLoaded: false,
  })

  const product = getProduct(id)
  const convertedPrice = useConvertPrice(content.price)

  useEffect(() => {
    if (product) {
      setContent({
        id: id,
        name: product.name,
        image: product.image,
        price: product.price,
        isLoaded: true,
      })
    }
  }, [product])

  const removeProduct = useCallback(() => {
    removeBasketProduct(content)
  }, [content])

  return (
    <li className={styles.basketProduct}>
      <div className={styles.basketProductLeft}>
        {content.isLoaded ? (
          <img
            className={styles.basketProductImage}
            src={cloudinary(content.image)}
            alt={content.name}
            width="70"
            height="70"
            loading="lazy"
          />
        ) : (
          <LoadingCircle width={'4.375rem'} />
        )}
        <span>{content.name}</span>
      </div>
      <div className={styles.basketProductRight}>
        <span>{content.isLoaded ? convertedPrice : ''}</span>
        <DeleteProductButton
          isLoaded={content.isLoaded}
          onClick={removeProduct}
        />
      </div>
    </li>
  )
}

export default memo(BasketProduct)
