import styles from './Header.module.css'
import HeaderTop from '@components/features/Header/parts/HeaderTop/HeaderTop'
import HeaderBottom from '@components/features/Header/parts/HeaderBottom/HeaderBottom'
import HeaderTopMobile from '@components/features/Header/parts/HeaderTopMobile/HeaderTopMobile'

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
