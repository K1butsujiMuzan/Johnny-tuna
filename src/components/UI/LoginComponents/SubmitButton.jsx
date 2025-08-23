import styles from "./LoginComponents.module.css"

function SubmitButton({
  children,
  onClick,
  disabled = false,
  isLoading
}) {
  return(
    <button
      className={`${styles.submitButton} ${isLoading ? styles.isLoading : ""}`}
      onClick={onClick}
      type={"submit"}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default SubmitButton