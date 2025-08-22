import styles from "./LoginComponents.module.css"

function SubmitButton({
  children,
  onClick,
  disabled = false
}) {
  return(
    <button
      className={styles.submitButton}
      onClick={onClick}
      type={"submit"}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default SubmitButton