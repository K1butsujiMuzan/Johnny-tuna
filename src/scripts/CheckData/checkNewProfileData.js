'use strict'

import { errorTypes } from '@/constants/errorTypes'

export const checkNewProfileData = (email, login) => {
  const errors = {
    emailError: '',
    loginError: '',
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.emailError = errorTypes.emailInvalidFormat
  } else if (email.length < 10) {
    errors.emailError = errorTypes.length('почты', 10)
  }

  if (login.length < 3) {
    errors.loginError = errorTypes.length('логина', 3)
  }

  return errors
}
