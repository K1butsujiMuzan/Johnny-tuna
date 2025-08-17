import styles from "./Button.module.css"

function Button({children, isSubmit, isColorAccent}) {
  return(
    <button
      className={`
        ${styles.Button}
        ${isColorAccent ? styles.colorAccent : ""}
      `}
      type={isSubmit ? "submit" : "button"}
    >
      {children}
    </button>
  )
}

export default Button