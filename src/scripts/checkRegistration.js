"use strict"

export const checkRegistration = (login, email, password, passwordRepeat) => {
  const errors = {
    loginError: "",
    emailError: "",
    passwordError: "",
    passwordRepeatError: ""
  }

  const checkPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s]).+$/.test(password)

  if(login.length < 3) {
    errors.loginError = "Длина логина должна быть не менее 3 символов"
  }

  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.emailError = "Некорректный формат email"
  } else if (email.length < 10) {
    errors.emailError = "Длина почты не может быть менее 10 символов"
  }

  if(password.length < 8) {
    errors.passwordError = "Минимальная длина пароля - 8 символов"
  }

  if(!checkPassword) {
    errors.passwordError =
      `Пароль должен содержать как минимум: 1 цифру, 1 букву в верхнем регистре,
       1 букву в нижнем регистре, 1 специальный символ`
  }

  if(password !== passwordRepeat) {
    errors.passwordRepeatError = "Пароли не совпадают"
  }

  return errors
}