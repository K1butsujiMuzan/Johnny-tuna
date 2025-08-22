import styles from "./LoginComponents.module.css"

function LoginInput
({
   type,
   minLength,
   maxLength,
   placeholder,
   name,
   value,
   onChange,
   required = false,
   disabled = false,
}) {
  return(
    <input
      className={styles.mainInput}
      type={type}
      minLength={minLength}
      maxLength={maxLength}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  )
}

export default LoginInput