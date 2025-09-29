import { errorTypes } from '@/constants/errorTypes'

export const checkName = name => {
  if (name.length < 3) {
    return errorTypes.length('имени', 3)
  }
  return ''
}

export const checkEmail = email => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return errorTypes.emailInvalidFormat
  } else if (email.length < 10) {
    return errorTypes.length('почты', 10)
  }
  return ''
}

export const checkPassword = password => {
  const checkPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s]).+$/.test(
    password,
  )
  if (password.length < 8) {
    return errorTypes.passwordLength
  } else if (!checkPassword) {
    return errorTypes.passwordSecure
  }
  return ''
}

export const checkPasswordRepeat = (password, passwordRepeat) => {
  if (password !== passwordRepeat) {
    return errorTypes.passwordRepeat
  }
  return ''
}

export const checkCode = code => {
  if (code.length !== 4 || !/^\d{4}$/.test(code)) {
    return errorTypes.wrongCode
  }
  return ''
}

export const checkTheme = theme => {
  if (theme.length < 3) {
    return errorTypes.length('темы', 3)
  }
  return ''
}

export const checkMessage = message => {
  if (message.length < 30) {
    return errorTypes.length('обращения', 30)
  }
  return ''
}
