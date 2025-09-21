'use strict'

import { errorsTypes } from '@/constants/Request/errorsTypes'

export const checkNewProfileData = (email, login) => {
  const errors = {
    emailError: '',
    loginError: '',
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.emailError = errorsTypes.emailInvalidFormat
  } else if (email.length < 10) {
    errors.emailError = errorsTypes.length('почты', 10)
  }

  if (login.length < 3) {
    errors.loginError = errorsTypes.length('логина', 3)
  }

  return errors
}
