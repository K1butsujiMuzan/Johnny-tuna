import styles from './Parts.module.css'
import { useRef, useState } from 'react'
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
  const loginRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()

  const [errors, setErrors] = useState({
    loginError: '',
    passwordError: '',
  })
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  })
  const [isPending, setIsPending] = useState(false)

  const submitData = async event => {
    event.preventDefault()

    try {
      setIsPending(true)
      const { ok, data } = await signIn(formData.login, formData.password)
      if (!ok || data.error) {
        if (data.error === responseTypes.wrongPassword) {
          setErrors({ loginError: '', passwordError: errorTypes.wrongPassword })
          return passwordRef.current.focus()
        } else if (data.error === responseTypes.userNotFound) {
          setErrors({ loginError: errorTypes.userNotFound, passwordError: '' })
          return loginRef.current.focus()
        } else {
          setErrors({ loginError: errorTypes.serverConnect, passwordError: '' })
        }
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
      setErrors({ loginError: errorTypes.serverError, passwordError: '' })
    } finally {
      setIsPending(false)
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
    if (errors[`${name}Error`]) {
      setErrors(prevState => ({
        ...prevState,
        [`${name}Error`]: '',
      }))
    }
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
            ref={loginRef}
            isRed={errors.loginError}
            value={formData.login}
            onChange={handleChange}
          />
        </div>
        <div className={styles.errorBlock}>
          <p className={styles.error}>{errors.passwordError}</p>
          <PasswordInput
            minLength={8}
            maxLength={20}
            placeholder={'Пароль'}
            name={'password'}
            ref={passwordRef}
            isRed={errors.passwordError}
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          type={'button'}
          className={styles.linkForm}
          onClick={() => setIsRecover(true)}
        >
          Не помню пароль
        </button>
      </div>
      <div className={styles.mainFormDown}>
        <SubmitButton
          disabled={
            formData.login.length < 3 ||
            formData.password.length < 8 ||
            isPending
          }
          type={'submit'}
        >
          {isPending ? 'Загрузка...' : 'Войти'}
        </SubmitButton>
      </div>
    </form>
  )
}

export default SignIn
