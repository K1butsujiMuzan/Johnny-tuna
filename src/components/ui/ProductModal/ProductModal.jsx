import { createPortal } from 'react-dom'
import styles from './ProductModal.module.css'
import { cloudinary } from '@/utils/cloudinary'
import Button from '@components/ui/Button/Button'
import ProductToggleControls from '@components/ui/ProductToggleControls/ProductToggleControls'
import useConvertPrice from '@/hooks/useConvertPrice'
import ReactFocusLock from 'react-focus-lock'
import { memo, useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { loginFromDown, loginFromTop } from '@/constants/variantsAnimation.data'
import CloseButton from '@components/ui/CloseButton/CloseButton'

function ProductModal({
  setIsProductOpen,
  product,
  productCount,
  onButtonClick,
}) {
  const { id, name, image, price, description } = product
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches,
  )

  const convertedPrice = useConvertPrice(price)

  const checkDevice = useCallback(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches)
  }, [])

  const closeInnerModal = useCallback(event => {
    if (event.target === event.currentTarget) {
      setIsProductOpen(false)
    }
  }, [])

  const closeModal = useCallback(() => {
    setIsProductOpen(false)
  }, [])

  const keyCloseInnerModal = useCallback(event => {
    if (event.key === 'Escape') {
      setIsProductOpen(false)
    }
  }, [])

  useEffect(() => {
    const root = document.getElementById('root')
    window.addEventListener('keydown', keyCloseInnerModal)
    root.classList.add('no-scroll')
    window.addEventListener('resize', checkDevice)
    return () => {
      root.classList.remove('no-scroll')
      window.removeEventListener('resize', checkDevice)
      window.removeEventListener('keydown', keyCloseInnerModal)
    }
  }, [checkDevice])

  return createPortal(
    <ReactFocusLock returnFocus={true}>
      <div className={styles.modalInner} onClick={closeInnerModal}>
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialogProductTitle"
          aria-describedby="dialogProductDescription"
          className={styles.modalContent}
          transition={{ duration: 0.2 }}
          variants={isMobile ? loginFromDown : loginFromTop}
          initial={'enter'}
          animate={'center'}
          exit={'exit'}
        >
          <img
            className={styles.modalImage}
            src={cloudinary(image)}
            alt={name}
            width="1056"
            height="792"
            loading="lazy"
          />
          <div className={styles.modalInformation}>
            <div className={styles.modalInformationUp}>
              <span className={styles.modalTitle} id="dialogProductTitle">
                {name}
              </span>
              <p id="dialogProductDescription">{description}</p>
            </div>
            <div className={styles.modalInformationDown}>
              <span className={styles.modalTitle}>{convertedPrice}</span>
              {productCount === 0 ? (
                <Button onButtonClick={onButtonClick}>Выбрать</Button>
              ) : (
                <ProductToggleControls
                  productCount={productCount}
                  product={product}
                />
              )}
            </div>
          </div>
          <CloseButton onClick={closeModal} />
        </motion.div>
      </div>
    </ReactFocusLock>,
    document.body,
  )
}

export default memo(ProductModal)
