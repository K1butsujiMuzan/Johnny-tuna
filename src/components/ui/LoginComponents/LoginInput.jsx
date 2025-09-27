import styles from './LoginComponents.module.css'
import { forwardRef } from 'react'

const LoginInput = forwardRef(
  (
    {
      type,
      minLength,
      maxLength,
      placeholder,
      name,
      value,
      onChange,
      required = false,
      disabled = false,
      isRed,
      noAutoComplete,
    },
    ref,
  ) => {
    return (
      <input
        className={`${styles.mainInput} ${isRed ? styles.isRed : ''}`}
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
        autoComplete={noAutoComplete ? 'off' : 'on'}
      />
    )
  },
)

export default LoginInput
