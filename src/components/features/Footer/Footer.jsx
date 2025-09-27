import styles from './Footer.module.css'
import FooterTop from '@components/features/Footer/parts/FooterTop/FooterTop'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <FooterTop />
      </div>
      <p className={`${styles.footerBottom} container`}>
        2023 © «Джонни Тунец» - Новая волна вкуса
      </p>
    </footer>
  )
}

export default Footer
