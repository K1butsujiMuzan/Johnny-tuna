'use strict'

import { errorTypes } from '@/constants/errorTypes'

export const checkContacts = (name, email, theme, message) => {
  const errors = {
    nameError: '',
    emailError: '',
    themeError: '',
    messageError: '',
    serverError: '',
  }

  if (name.length < 3) {
    errors.nameError = errorTypes.length('имени', 3)
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.emailError = errorTypes.emailInvalidFormat
  } else if (email.length < 10) {
    errors.emailError = errorTypes.length('почты', 10)
  }

  if (theme.length < 3) {
    errors.themeError = errorTypes.length('темы', 3)
  }

  if (message.length < 30) {
    errors.messageError = errorTypes.length('обращения', 30)
  }

  return errors
}
