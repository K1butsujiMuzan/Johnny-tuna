import styles from "./LoginComponents.module.css"
import {forwardRef} from "react";

const LoginInput = forwardRef(({
  type,
  minLength,
  maxLength,
  placeholder,
  name,
  value,
  onChange,
  required = false,
  disabled = false
}, ref) => {
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
      ref={ref}
    />
  )
})

export default LoginInput