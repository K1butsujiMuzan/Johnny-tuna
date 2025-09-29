import styles from './Parts.module.css'
import { useCallback, useRef, useState } from 'react'
import LoginInput from '@components/ui/LoginComponents/LoginInput'
import PasswordInput from '@components/ui/LoginComponents/PasswordInput'
import { useNavigate } from 'react-router-dom'
import SubmitButton from '@components/ui/LoginComponents/SubmitButton/SubmitButton'
import { responseTypes } from '@/constants/responseTypes'
import { errorTypes } from '@/constants/errorTypes'
import { signIn } from '@/services/signIn'
import { authProfile } from '@/store/useProfileToken'
import { linkPath } from '@/constants/linkPath'
import Cookies from 'js-cookie'

function SignIn({ setIsRecover }) {
  const errorLogin = useRef(null)
  const errorPassword = useRef(null)

  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({
    loginError: '',
    passwordError: '',
  })
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  })

  const clearErrors = useCallback(() => {
    setErrors({
      loginError: '',
      passwordError: '',
    })
  }, [])

  const navigate = useNavigate()

  const submitData = async event => {
    event.preventDefault()
    setIsLoading(true)
    clearErrors()

    try {
      const { ok, data } = await signIn(formData.login, formData.password)
      if (!ok || data.error) {
        if (data.error === responseTypes.wrongPassword) {
          setErrors({
            loginError: '',
            passwordError: errorTypes.wrongPassword,
          })
          errorPassword.current.focus()
        } else if (data.error === responseTypes.userNotFound) {
          setErrors({
            loginError: errorTypes.userNotFound,
            passwordError: '',
          })
          errorLogin.current.focus()
        } else {
          setErrors({
            loginError: errorTypes.serverConnect,
            passwordError: '',
          })
        }
        return
      }

      if (data.result) {
        Cookies.set('auth', data.result, {
          expires: 30,
          path: '/',
          secure: true,
          sameSite: 'strict',
        })
        await authProfile()
        navigate(linkPath.main, { replace: true })
      }
    } catch (error) {
      console.error('Ошибка сети: ', error)
      setErrors({
        loginError: errorTypes.serverError,
        passwordError: '',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = event => {
    if (errors.passwordError || errors.loginError) {
      clearErrors()
    }
    const { name, value } = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <form
      onSubmit={submitData}
      className={styles.mainForm}
      noValidate
      autoComplete={'on'}
    >
      <div className={styles.mainFormUp}>
        <div className={styles.errorBlock}>
          <p className={styles.error}>{errors.loginError}</p>
          <LoginInput
            type={'text'}
            minLength={3}
            maxLength={50}
            placeholder={'Логин или почта'}
            name={'login'}
            value={formData.login}
            onChange={handleChange}
            ref={errorLogin}
            isRed={errors.loginError}
          />
        </div>
        <div className={styles.errorBlock}>
          <p className={styles.error}>{errors.passwordError}</p>
          <PasswordInput
            minLength={8}
            maxLength={20}
            placeholder={'Пароль'}
            name={'password'}
            value={formData.password}
            onChange={handleChange}
            ref={errorPassword}
            isRed={errors.passwordError}
          />
        </div>
        <button className={styles.linkForm} onClick={() => setIsRecover(true)}>
          Не помню пароль
        </button>
      </div>
      <div className={styles.mainFormDown}>
        <SubmitButton
          disabled={
            formData.password.length < 8 ||
            formData.login.length < 3 ||
            isLoading
          }
          type={'submit'}
        >
          {isLoading ? 'Загрузка...' : 'Войти'}
        </SubmitButton>
      </div>
    </form>
  )
}

export default SignIn
