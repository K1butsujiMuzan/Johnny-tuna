'use strict'

import { errorTypes } from '@/constants/errorTypes'

export const checkRegistration = (login, email, password, passwordRepeat) => {
  const errors = {
    loginError: '',
    emailError: '',
    passwordError: '',
    passwordRepeatError: '',
    serverError: '',
  }

  const checkPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s]).+$/.test(
    password,
  )

  if (login.length < 3) {
    errors.loginError = errorTypes.length('логина', 3)
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.emailError = errorTypes.emailInvalidFormat
  } else if (email.length < 10) {
    errors.emailError = errorTypes.length('почты', 10)
  }

  if (password.length < 8) {
    errors.passwordError = errorTypes.passwordLength
  } else if (!checkPassword) {
    errors.passwordError = errorTypes.passwordSecure
  }

  if (password !== passwordRepeat) {
    errors.passwordRepeatError = errorTypes.passwordRepeat
  }

  return errors
}
