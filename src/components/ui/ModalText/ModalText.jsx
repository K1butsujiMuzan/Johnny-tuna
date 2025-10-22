import styles from './ModalText.module.css'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { loginFromTop } from '@/constants/variantsAnimation.data'
import ReactFocusLock from 'react-focus-lock'
import { useEffect } from 'react'

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
          variants={loginFromTop}
          initial={'enter'}
          animate={'center'}
          transition={{ duration: 0.2 }}
          className={styles.modalContainer}
          role={'dialog'}
          aria-modal={true}
          exit={'exit'}
        >
          <p className={styles.modalText}>{text}</p>
          <button
            aria-label={'Закрыть'}
            className={styles.closeButton}
            onClick={() => {
              clearFormData()
              setIsOpenModal(false)
            }}
          >
            <svg
              aria-hidden={true}
              className={styles.closeIcon}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.61611 6.61611C7.10428 6.12796 7.89572 6.12796 8.38389 6.61611L15 13.2323L21.6161 6.61611C22.1043 6.12796 22.8957 6.12796 23.3839 6.61611C23.872 7.10428 23.872 7.89572 23.3839 8.38389L16.7677 15L23.3839 21.6161C23.872 22.1043 23.872 22.8957 23.3839 23.3839C22.8957 23.872 22.1043 23.872 21.6161 23.3839L15 16.7677L8.38389 23.3839C7.89572 23.872 7.10428 23.872 6.61611 23.3839C6.12796 22.8957 6.12796 22.1043 6.61611 21.6161L13.2323 15L6.61611 8.38389C6.12796 7.89572 6.12796 7.10428 6.61611 6.61611Z"
                fill="#0F1729"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </ReactFocusLock>,
    document.body,
  )
}

export default ModalText
