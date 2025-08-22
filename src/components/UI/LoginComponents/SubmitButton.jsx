import styles from "./LoginComponents.module.css"

function SubmitButton({children, onClick}) {
  return(
    <button
      className={styles.submitButton}
      onClick={onClick}
      type={"submit"}
    >
      {children}
    </button>
  )
}

export default SubmitButton