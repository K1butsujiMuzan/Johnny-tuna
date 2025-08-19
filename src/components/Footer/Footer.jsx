import styles from "./Footer.module.css"
import FooterTop from "@components/Footer/parts/FooterTop/FooterTop";

function Footer() {
  return(
    <footer className={styles.footer}>
      <FooterTop/>
    </footer>
  )
}

export default Footer