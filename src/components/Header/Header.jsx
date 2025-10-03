import styles from './Header.module.css'
import HeaderTop from '@components/Header/HeaderTop/HeaderTop'
import HeaderBottom from '@components/Header/HeaderBottom/HeaderBottom'
import HeaderTopMobile from '@components/Header/HeaderTopMobile/HeaderTopMobile'

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerDeskTop}>
          <HeaderTop />
        </div>
        <div className={styles.headerMobile}>
          <HeaderTopMobile />
        </div>
      </header>
      <div className={styles.headerBottom}>
        <HeaderBottom />
      </div>
    </>
  )
}

export default Header
