import styles from "./Button.module.css"

function Button({children, isSubmit, isAccent, isDisabled}) {
  return(
    <button
      className={`
        ${styles.button}
        ${isAccent ? styles.accent : ""}
      `}
      type={isSubmit ? "submit" : "button"}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button