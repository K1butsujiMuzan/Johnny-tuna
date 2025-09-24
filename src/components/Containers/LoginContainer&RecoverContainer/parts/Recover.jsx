import styles from './Parts.module.css'
import LoginInput from '@components/UI/LoginComponents/LoginInput'
import { useEffect, useRef, useState } from 'react'
import SubmitButton
  from '@components/UI/LoginComponents/SubmitButton/SubmitButton'
import { checkCode, checkEmail } from '@/scripts/CheckData/checkRecover'
import { errorsTypes } from '@/constants/Request/errorsTypes'
import { checkEmailData } from '@/services/recover/checkEmailData'
import { checkCodeData } from '@/services/recover/checkCodeData'

function Recover() {
  const timeRef = useRef(null)
  const emailRef = useRef(null)
  const codeRef = useRef(null)

  const [time, setTime] = useState(120)
  const [formData, setFormData] = useState({
    email: "",
    code: "",
    password: ""
  })
  const [contentVariant, setContentVariant] = useState('email')
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({
    emailError: "",
    codeError: "",
    passwordError: ""
  })

  useEffect(() => {
    if(time <= 0 && timeRef.current) {
      clearInterval(timeRef.current)
      timeRef.current = null
    }
  }, [time])

  const resetTimer = () => {
    if(timeRef.current) {
      clearInterval(timeRef.current)
    }
    setTime(12)
    timeRef.current = setInterval(() => {
      setTime(prevState => prevState - 1)
    }, 1000)
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
    setErrors(prevState => ({
      ...prevState,
      [`${name}Error`]: ""
    }))
  }

  const getAnotherCode = async () => {
    try{
      const data = await checkEmailData(formData.email)
      resetTimer()
    } catch (error) {
      console.log('Ошибка сети: ', error)
      setErrors(prevState => ({
        ...prevState,
        codeError: errorsTypes.serverConnect
      }))
    }
  }

  const submitForm = async (event) => {
    event.preventDefault()
    if(contentVariant === 'email') {
      const error = checkEmail(formData.email)
      if(error) {
        emailRef.current.focus()
        setErrors(prevState => ({
          ...prevState,
          emailError: error
        }))
      } else {
        try{
          setIsLoading(true)
          const data = await checkEmailData(formData.email)
          if(!data) {
            setErrors(prevState => ({
              ...prevState,
              emailError: errorsTypes.userNotFound
            }))
            emailRef.current.focus()
          } else{
            setContentVariant('code')
            resetTimer()
          }
        } catch (error) {
          console.log('Ошибка сети: ', error)
          setErrors(prevState => ({
            ...prevState,
            emailError: errorsTypes.serverConnect
          }))
        } finally {
          setIsLoading(false)
        }
      }
    } else if(contentVariant === 'code') {
      const error = checkCode(formData.code)
      if(error) {
        codeRef.current.focus()
        setErrors(prevState => ({
          ...prevState,
          codeError: error
        }))
      } else {
        try{
          setIsLoading(true)
          const data = checkCodeData(formData.email, formData.code)
          if(!data) {
            setErrors(prevState => ({
              ...prevState,
              codeError: errorsTypes.wrongCode
            }))
            codeRef.current.focus()
          } else {
            setContentVariant('password')
          }
        } catch(error) {
          console.log('Ошибка сети: ', error)
          setErrors(prevState => ({
            ...prevState,
            codeError: errorsTypes.serverConnect
          }))
        } finally {
          setIsLoading(false)
        }
      }
    }
  }

  return(
    <form
      onSubmit={submitForm}
      className={styles.mainForm}
      noValidate
      autoComplete={'off'}
    >
      <div className={styles.mainFormUp}>
        {contentVariant === 'email' ?
          (
            <div className={styles.errorBlock}>
              <p className={styles.error}>
                {errors.emailError}
              </p>
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
          ) : contentVariant === 'code' ?
          (
            <>
              <div className={styles.errorBlock}>
                <p className={styles.error}>
                  {errors.codeError}
                </p>
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
                <span>Повторно отправить код через: <span className={styles.recoverValue}>{time}</span></span>
                {time === 0 && (
                  <button
                    className={styles.recoverButton}
                    onClick={() => {
                      resetTimer()
                      getAnotherCode()
                    }}
                    type={"button"}
                  >
                    Отправить код повторно
                  </button>
                )}
              </div>
            </>
          ) :
          (
            <div></div>
          )
        }
      </div>
      <div className={styles.mainFormDown}>
        <SubmitButton
          disabled={isLoading}
        >
          {contentVariant === 'email' ? "Отправить код" : "Отправить"}
        </SubmitButton>
      </div>
    </form>
  )
}

export default Recover