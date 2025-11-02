import styles from './ModalText.module.css'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { loginFromTop } from '@/constants/variantsAnimation.data'
import ReactFocusLock from 'react-focus-lock'
import { useEffect } from 'react'
import CloseButton from '@components/ui/CloseButton/CloseButton'

function ModalText({ text, setIsOpenModal, setFormData = null }) {
  const clearFormData = () => {
    if (setFormData) {
      setFormData({
        name: '',
        email: '',
        theme: '',
        message: '',
        reason: 0,
      })
    }
  }

  useEffect(() => {
    const checkKeyEsc = event => {
      if (event.key === 'Escape') {
        clearFormData()
        setIsOpenModal(false)
      }
    }

    window.addEventListener('keydown', checkKeyEsc)

    return () => window.removeEventListener('keydown', checkKeyEsc)
  }, [])

  const checkClick = event => {
    if (event.target === event.currentTarget) {
      clearFormData()
      setIsOpenModal(false)
    }
  }

  return createPortal(
    <ReactFocusLock returnFocus={true}>
      <div className={styles.modalInner} onClick={checkClick}>
        <motion.div
          role={'dialog'}
          aria-modal={true}
          aria-labelledby="dialogText"
          variants={loginFromTop}
          initial={'enter'}
          animate={'center'}
          transition={{ duration: 0.2 }}
          className={styles.modalContainer}
          exit={'exit'}
        >
          <p className={styles.modalText} id="dialogText">
            {text}
          </p>
          <CloseButton
            onClick={() => {
              clearFormData()
              setIsOpenModal(false)
            }}
          />
        </motion.div>
      </div>
    </ReactFocusLock>,
    document.body,
  )
}

export default ModalText
