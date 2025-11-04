import styles from './ModalText.module.css'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { loginFromTop } from '@/constants/variantsAnimation.data'
import ReactFocusLock from 'react-focus-lock'
import { useCallback, useEffect } from 'react'
import CloseButton from '@components/ui/CloseButton/CloseButton'

function ModalText({ text, setIsOpenModal, setFormData = null }) {
  const clearFormData = useCallback(() => {
    if (setFormData) {
      setFormData({
        name: '',
        email: '',
        theme: '',
        message: '',
        reason: 0,
      })
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', checkKeyEsc)
    const root = document.getElementById('root')
    root.classList.add('no-scroll')

    return () => {
      window.removeEventListener('keydown', checkKeyEsc)
      root.classList.remove('no-scroll')
    }
  }, [])

  const closeModal = useCallback(() => {
    clearFormData()
    setIsOpenModal(false)
  }, [])

  const checkKeyEsc = useCallback(event => {
    if (event.key === 'Escape') {
      closeModal()
    }
  }, [])

  const checkClick = useCallback(event => {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }, [])

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
          <CloseButton onClick={closeModal} />
        </motion.div>
      </div>
    </ReactFocusLock>,
    document.body,
  )
}

export default ModalText
