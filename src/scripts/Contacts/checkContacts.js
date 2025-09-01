"use strict"

import {errorsTypes} from "@/constants/errorsTypes";

export const checkContacts = (name, email, theme, message) => {
  const errors = {
    nameError: "",
    emailError: "",
    themeError: "",
    messageError: "",
    serverError: ""
  }

  if(name.length < 3) {
    errors.nameError = errorsTypes.length("имени", 3)
  }

  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.emailError = errorsTypes.emailInvalidFormat
  } else if (email.length < 10) {
    errors.emailError = errorsTypes.length("почты", 10)
  }

  if(theme.length < 3) {
    errors.themeError = errorsTypes.length("темы", 3)
  }

  if(message.length < 30) {
    errors.messageError = errorsTypes.length("обращения", 30)
  }

  return errors
}