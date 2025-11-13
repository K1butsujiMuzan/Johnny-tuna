import { Link } from 'react-router'
import styles from './BasketLinkMobile.module.css'
import { linkName, linkPath } from '@/config/links.data'
import { useTotalBasketProducts } from '@/store/useBasket'
import { memo } from 'react'

function BasketLinkMobile() {
  const basketProducts = useTotalBasketProducts()

  return (
    <Link
      to={linkPath.basket}
      aria-label={linkName.basket}
      className={styles.basketLink}
    >
      <svg
        className={styles.basketLinkIcon}
        aria-hidden={true}
        width="23"
        height="26"
        viewBox="0 0 23 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.73266 9.69302V7.48876M16.198 9.69302V7.48876M6.73266 7.48876H4C2.89543 7.48876 2 8.38419 2 9.48876V23.1229C2 24.2274 2.89543 25.1229 4 25.1229H18.9307C20.0352 25.1229 20.9307 24.2274 20.9307 23.1229V9.48876C20.9307 8.38419 20.0352 7.48876 18.9307 7.48876H16.198M6.73266 7.48876H16.198M6.73266 7.48876V5.2845C6.73266 2.84879 8.85645 0.875977 11.4653 0.875977C14.0801 0.875977 16.198 2.8543 16.198 5.2845V7.48876"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10.7464 17.9008L9.02881 16.4209"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.296 15.0393L10.7455 17.903"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.quantity} aria-label={'Количество товаров'}>
        {basketProducts}
      </span>
    </Link>
  )
}

export default memo(BasketLinkMobile)
