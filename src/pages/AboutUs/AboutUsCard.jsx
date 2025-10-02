import styles from './AboutUs.module.css'

function AboutUsCard({ text, image }) {
  return (
    <li className={`${styles.card} gradientBorder`}>
      <p className={styles.cardText}>{text}</p>
      <img src={image} aria-hidden={true} alt={''} />
    </li>
  )
}

export default AboutUsCard
