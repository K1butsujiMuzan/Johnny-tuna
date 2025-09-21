import styles from './TextBlock.module.css'
import { textVariants } from '@/constants/Data/variantsAnimation'
import { motion } from 'framer-motion'

function TextBlock({ children }) {
  return (
    <motion.div
      className={styles.textCard}
      variants={textVariants}
      initial={'enter'}
      animate={'center'}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default TextBlock
