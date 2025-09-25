export const errorTypes = {
  length: (text, length) =>
    `Длина ${text} должна быть не менее ${length} символов`,
  passwordLength: 'Минимальная длина пароля - 8 символов',

  emailInvalidFormat: 'Некорректный формат email',
  passwordSecure:
    'Пароль должен содержать как минимум: 1 цифру, 1 букву в верхнем регистре, 1 букву в нижнем регистре, 1 специальный символ',
  passwordRepeat: 'Пароли не совпадают',

  alreadyExist: 'У данной почты уже зарегистрирован аккаунт',
  emailIsNotFound: 'Введённая почта не существует',

  emailNotFound: email => `Почта ${email} не существует`,
  serverConnect: 'Ошибка соединения с сервером, повторите попытку позже',
  serverError: 'Ошибка на стороне сервера, повторите попытку позже',

  userNotFound: 'Пользователь не найден',
  wrongPassword: 'Неверный пароль',

  wrongCode: 'Неверный код',
  somethingWentWrong: 'Что-то пошло не так',
}
