import styles from './LoginContainer.module.css'
import { useEffect, useState } from 'react'
import Logo from '@components/UI/Logo/Logo'
import { Link } from 'react-router-dom'
import SignIn from '@components/Containers/LoginContainer&RecoverContainer/parts/SignIn'
import SignUp from '@components/Containers/LoginContainer&RecoverContainer/parts/SignUp'
import { motion } from 'framer-motion'
import { loginFromTop } from '@/constants/variantsAnimation'
import Recover from '@components/Containers/LoginContainer&RecoverContainer/parts/Recover'

function LoginContainer() {
  const [isOpen, setIsOpen] = useState('login')
  const [isRecover, setIsRecover] = useState(false)

  useEffect(() => {
    document.body.classList.add(styles.loginBody)
    return () => {
      document.body.classList.remove(styles.loginBody)
    }
  }, [])

  return (
    <motion.div
      className={styles.loginBlock}
      variants={loginFromTop}
      initial={'enter'}
      animate={'center'}
      transition={{ duration: 1 }}
    >
      <div className={styles.changeBlock}>
        <button
          className={`${styles.changeButton} ${isOpen === 'registration' ? styles.activeButton : ''}`}
          onClick={() => {
            setIsOpen('registration')
            if (isRecover) setIsRecover(false)
          }}
          aria-pressed={isOpen === 'registration'}
        >
          регистрация
        </button>
        <button
          className={`${styles.changeButton} ${isOpen === 'login' ? styles.activeButton : ''}`}
          onClick={() => setIsOpen('login')}
          aria-pressed={isOpen === 'login'}
        >
          вход
        </button>
      </div>
      <div className={styles.loginInner}>
        <div className={styles.loginInnerUp}>
          <span className={styles.logo}>
            <Logo />
          </span>
          {!isRecover ? (
            <Link className={styles.mainLink} to={'/'}>
              На главную
            </Link>
          ) : (
            <button
              className={`${styles.mainLink} ${styles.backLink}`}
              onClick={() => setIsRecover(false)}
              type={'button'}
            >
              Назад
            </button>
          )}
        </div>
        {isOpen === 'login' &&
          (!isRecover ? (
            <SignIn setIsRecover={setIsRecover} />
          ) : (
            <Recover setIsRecover={setIsRecover} />
          ))}
        {isOpen === 'registration' && <SignUp />}
      </div>
    </motion.div>
  )
}

export default LoginContainer
