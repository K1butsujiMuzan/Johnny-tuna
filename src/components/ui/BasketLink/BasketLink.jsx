import styles from './BasketLink.module.css'
import { Link } from 'react-router'
import { linkName, linkPath } from '@/constants/links.data'

function BasketLink() {
  return (
    <Link
      className={`${styles.basketLink} headerIconLink`}
      aria-label={linkName.basket}
      type={'button'}
      to={linkPath.basket}
    >
      <div className={styles.basket}>
        <svg
          className={styles.basketIcon}
          aria-hidden="true"
          width="24"
          height="26"
          viewBox="0 0 24 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.23266 9.69302V7.48876M16.698 9.69302V7.48876M7.23266 7.48876H4.5C3.39543 7.48876 2.5 8.38419 2.5 9.48876V23.1229C2.5 24.2274 3.39543 25.1229 4.5 25.1229H19.4307C20.5352 25.1229 21.4307 24.2274 21.4307 23.1229V9.48876C21.4307 8.38419 20.5352 7.48876 19.4307 7.48876H16.698M7.23266 7.48876H16.698M7.23266 7.48876V5.2845C7.23266 2.84879 9.35645 0.875977 11.9653 0.875977C14.5801 0.875977 16.698 2.8543 16.698 5.2845V7.48876"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M11.2464 17.9008L9.52886 16.4209"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.7961 15.0393L11.2456 17.903"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className={styles.quantity} aria-label={'Количество товаров'}>
          0
        </span>
      </div>
      <span className={styles.basketBalance} aria-label={'Стоимость'}>
        0₽
      </span>
    </Link>
  )
}

export default BasketLink
