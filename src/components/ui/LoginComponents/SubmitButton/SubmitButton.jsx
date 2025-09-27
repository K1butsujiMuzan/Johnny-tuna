import styles from './SubmitButton.module.css'

function SubmitButton({ children, disabled = false, type }) {
  return (
    <button className={styles.submitButton} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

export default SubmitButton
