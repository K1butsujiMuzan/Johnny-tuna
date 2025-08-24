import styles from "./LoginComponents.module.css"

function SubmitButton({
  children,
  onClick,
  disabled = false,
  isLoading,
  type
}) {
  return(
    <button
      className={`${styles.submitButton} ${isLoading ? styles.isLoading : ""}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default SubmitButton