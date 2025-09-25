'use strict'

import { errorTypes } from '@/constants/errorTypes'

export const checkEmail = email => {
  let emailError = ''
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError = errorTypes.emailInvalidFormat
  } else if (email.length < 10) {
    emailError = errorTypes.length('почты', 10)
  }
  return emailError
}

export const checkPassword = password => {
  let passwordError = ''
  const checkPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s]).+$/.test(
    password,
  )
  if (password.length < 8) {
    passwordError = errorTypes.passwordLength
  } else if (!checkPassword) {
    passwordError = errorTypes.passwordSecure
  }
  return passwordError
}

export const checkCode = code => {
  let codeError = ''
  if (code.length !== 4) {
    codeError = 'Неверный код'
  }
  code.split('').forEach(num => {
    if (isNaN(num)) {
      codeError = 'Неверный код'
    }
  })
  return codeError
}
