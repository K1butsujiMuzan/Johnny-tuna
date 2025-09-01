"use strict"

import {errorsTypes} from "@/constants/errorsTypes";

export const checkRegistration = (login, email, password, passwordRepeat) => {
  const errors = {
    loginError: "",
    emailError: "",
    passwordError: "",
    passwordRepeatError: "",
    serverError: ""
  }

  const checkPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s]).+$/.test(password)

  if(login.length < 3) {
    errors.loginError = errorsTypes.length("логина", 3)
  }

  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.emailError = errorsTypes.emailInvalidFormat
  } else if (email.length < 10) {
    errors.emailError = errorsTypes.length("почты", 10)
  }

  if(password.length < 8) {
    errors.passwordError = errorsTypes.passwordLength
  } else if(!checkPassword) {
    errors.passwordError = errorsTypes.passwordSecure
  }

  if(password !== passwordRepeat) {
    errors.passwordRepeatError = errorsTypes.passwordRepeat
  }

  return errors
}