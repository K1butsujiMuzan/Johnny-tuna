import styles from './Parts.module.css'
import LoginInput from '@components/ui/LoginComponents/LoginInput'
import { useEffect, useRef, useState } from 'react'
import SubmitButton from '@components/ui/LoginComponents/SubmitButton/SubmitButton'
import { errorTypes } from '@/constants/errorTypes.data'
import { checkEmailData } from '@/services/recover'
import PasswordInput from '@components/ui/LoginComponents/PasswordInput'
import { api } from '@/services/api'
import { checkEmail, checkCode, checkPassword } from '@/utils/dataCheck'

function Recover({ setIsRecover }) {
  const initialErrors = { emailError: '', codeError: '', passwordError: '' }
  const timeRef = useRef(null)
  const emailRef = useRef(null)
  const codeRef = useRef(null)
  const passwordRef = useRef(null)

  const [time, setTime] = useState(120)
  const [formData, setFormData] = useState({
    email: '',
    code: '',
    password: '',
  })
  const [contentVariant, setContentVariant] = useState('email')
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState(initialErrors)

  useEffect(() => {
    if (time <= 0 && timeRef.current) {
      clearInterval(timeRef.current)
      timeRef.current = null
    }
  }, [time])

  useEffect(() => {
    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current)
        timeRef.current = null
      }
    }
  }, [])

  const resetTimer = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current)
    }
    setTime(120)
    timeRef.current = setInterval(() => {
      setTime(prevState => prevState - 1)
    }, 1000)
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
    setErrors(prevState => ({
      ...prevState,
      [`${name}Error`]: '',
    }))
  }

  const getAnotherCode = async () => {
    try {
      await checkEmailData(formData.email, api.recoverEmail)
      resetTimer()
    } catch (error) {
      console.log('Ошибка сети: ', error)
      setErrors(prevState => ({
        ...prevState,
        codeError: errorTypes.serverConnect,
      }))
    }
  }

  const submitForm = async event => {
    event.preventDefault()
    const checking = {
      emailError: checkEmail(formData.email),
      codeError: checkCode(formData.code),
      passwordError: checkPassword(formData.password),
    }
    setErrors(checking)

    if (contentVariant === 'email') {
      if (checking.emailError) {
        emailRef.current.focus()
      } else {
        try {
          setIsLoading(true)
          const data = await checkEmailData(formData.email, api.recoverEmail)
          if (!data) {
            setErrors(prevState => ({
              ...prevState,
              emailError: errorTypes.userNotFound,
            }))
            emailRef.current.focus()
          } else {
            setErrors(initialErrors)
            setContentVariant('code')
            resetTimer()
          }
        } catch (error) {
          console.log('Ошибка сети: ', error)
          setErrors(prevState => ({
            ...prevState,
            emailError: errorTypes.serverConnect,
          }))
        } finally {
          setIsLoading(false)
        }
      }
    } else if (contentVariant === 'code') {
      if (checking.codeError) {
        codeRef.current.focus()
      } else {
        try {
          setIsLoading(true)
          const data = await checkEmailData(formData.email, api.recoverCode, {
            otp_code: +formData.code,
          })
          if (!data) {
            setErrors(prevState => ({
              ...prevState,
              codeError: errorTypes.wrongCode,
            }))
            codeRef.current.focus()
          } else {
            setErrors(initialErrors)
            setContentVariant('password')
            if (timeRef.current) {
              clearInterval(timeRef.current)
              timeRef.current = null
            }
          }
        } catch (error) {
          console.log('Ошибка сети: ', error)
          setErrors(prevState => ({
            ...prevState,
            codeError: errorTypes.serverConnect,
          }))
        } finally {
          setIsLoading(false)
        }
      }
    } else if (contentVariant === 'password') {
      if (checking.passwordError) {
        passwordRef.current.focus()
      } else {
        try {
          setIsLoading(true)
          const data = await checkEmailData(
            formData.email,
            api.recoverPassword,
            { password: formData.password },
          )
          if (!data) {
            setErrors(prevState => ({
              ...prevState,
              passwordError: errorTypes.somethingWentWrong,
            }))
            passwordRef.current.focus()
          } else {
            setErrors(initialErrors)
            setIsRecover(false)
          }
        } catch (error) {
          console.log('Ошибка сети: ', error)
          setErrors(prevState => ({
            ...prevState,
            passwordError: errorTypes.serverConnect,
          }))
        } finally {
          setIsLoading(false)
        }
      }
    }
  }

  return (
    <form
      onSubmit={submitForm}
      className={styles.mainForm}
      noValidate
      autoComplete={'off'}
    >
      <div className={styles.mainFormUp}>
        {contentVariant === 'email' ? (
          <div className={styles.errorBlock}>
            <p className={styles.error}>{errors.emailError}</p>
            <LoginInput
              type={'email'}
              minLength={10}
              maxLength={50}
              placeholder={'Почта'}
              name={'email'}
              value={formData.email}
              onChange={handleChange}
              ref={emailRef}
              isRed={errors.emailError}
              disabled={isLoading}
            />
          </div>
        ) : contentVariant === 'code' ? (
          <>
            <div className={styles.errorBlock}>
              <p className={styles.error}>{errors.codeError}</p>
              <LoginInput
                type={'text'}
                maxLength={4}
                placeholder={'Код'}
                name={'code'}
                noAutoComplete
                value={formData.code}
                onChange={handleChange}
                disabled={isLoading}
                isRed={errors.codeError}
                ref={codeRef}
              />
            </div>
            <div className={styles.recoverTimer}>
              <span>
                Повторно отправить код через:{' '}
                <span className={styles.recoverValue}>{time}</span>
              </span>
              {time === 0 && (
                <button
                  className={styles.recoverButton}
                  onClick={() => {
                    resetTimer()
                    getAnotherCode()
                  }}
                  type={'button'}
                >
                  Отправить код повторно
                </button>
              )}
            </div>
          </>
        ) : (
          <div className={styles.errorBlock}>
            <p className={styles.error}>{errors.passwordError}</p>
            <PasswordInput
              minLength={8}
              maxLength={20}
              placeholder={'Новый пароль'}
              name={'password'}
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              isRed={errors.passwordError}
              ref={passwordRef}
            />
          </div>
        )}
      </div>
      <div className={styles.mainFormDown}>
        <SubmitButton disabled={isLoading}>
          {isLoading
            ? 'Отправка...'
            : contentVariant === 'email'
              ? 'Отправить код'
              : 'Отправить'}
        </SubmitButton>
      </div>
    </form>
  )
}

export default Recover
