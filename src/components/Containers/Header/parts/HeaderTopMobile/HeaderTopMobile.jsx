import styles from './HeaderTopMobile.module.css'
import Logo from '@components/UI/Logo/Logo'
import HeaderModal from '@components/Containers/Header/parts/HeaderModal/HeaderModal'
import Search from '@components/UI/Search/Search'
import { useCallback, useEffect, useRef, useState } from 'react'
import ReactFocusLock from 'react-focus-lock'
import { useBurgerOpen } from '@/store/useBurgerOpen'

function HeaderTopMobile() {
  const hederTopRef = useRef(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { isOpen, closeBurger, toggleBurger } = useBurgerOpen()

  useEffect(() => {
    document.body.classList.toggle(styles.noScroll, isOpen)

    return () => {
      document.body.classList.remove(styles.noScroll)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }
    const closeModal = event => {
      if (event.key === 'Escape') {
        closeBurger()
      }
    }

    window.addEventListener('keydown', closeModal)

    return () => {
      window.removeEventListener('keydown', closeModal)
    }
  }, [isOpen])

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(prevState => !prevState)
  }, [])

  return (
    <div
      className={`
      ${isOpen ? styles.headerInnerOpen : styles.headerInner}
    `}
    >
      <div
        className={`
          ${styles.headerTopMobile}
          container
          ${isOpen ? styles.headerTopMobileOpen : ''}
          ${isSearchOpen ? styles.headerTopMobileSearch : ''}
        `}
        ref={hederTopRef}
      >
        <Logo className={'headerLogo'} />
        <div className={styles.headerButtons}>
          {!isOpen && (
            <button
              className={styles.searchButton}
              aria-label={'Поиск'}
              aria-expanded={isSearchOpen}
              onClick={toggleSearch}
            >
              <svg
                className={styles.searchIcon}
                aria-hidden={true}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.88352 18.7885C4.96518 18.7885 0.978516 14.8018 0.978516 9.88352C0.978516 4.96518 4.96518 0.978516 9.88352 0.978516C14.8018 0.978516 18.7885 4.96518 18.7885 9.88352C18.7885 14.8018 14.8018 18.7885 9.88352 18.7885Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0208 21.0198L16.5684 16.5673"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          <button
            type={'button'}
            className={styles.burgerButton}
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isOpen}
            onClick={toggleBurger}
          >
            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className={
                  isOpen
                    ? `${styles.burgerSpan} ${styles.burgerSpanOpen}`
                    : styles.burgerSpan
                }
              ></span>
            ))}
          </button>
        </div>
      </div>
      {isOpen && (
        <ReactFocusLock shards={[hederTopRef.current]} returnFocus={true}>
          <HeaderModal />
        </ReactFocusLock>
      )}
      {isSearchOpen && !isOpen && (
        <div className={'container'}>
          <Search />
        </div>
      )}
    </div>
  )
}

export default HeaderTopMobile
