import styles from "./Parts.module.css"
import LoginInput from "@components/UI/LoginComponents/LoginInput";
import {useRef, useState} from "react";
import PasswordInput from "@components/UI/LoginComponents/PasswordInput";
import SubmitButton from "@components/UI/LoginComponents/SubmitButton";
import CheckBox from "@components/UI/LoginComponents/CheckBox";
import {checkRegistration} from "@/scripts/Login/checkRegistration";
import {errorsTypes} from "@/constants/errorsTypes";
import {responsesTypes} from "@/constants/responsesTypes";
import {Link} from "react-router-dom";

function SignUp() {
  const loginInput = useRef(null)
  const emailInput = useRef(null)
  const passwordInput = useRef(null)
  const passwordRepeatInput = useRef(null)

  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorsState, setErrorsState] = useState({
    loginError: "",
    emailError: "",
    passwordError: "",
    passwordRepeatError: "",
    serverError: ""
  })
  const [formData, setFormData] = useState({
    login: "",
    email: "",
    password: "",
    passwordRepeat: "",
    agreement: false
  })

  const submitData = async (event) =>{
    event.preventDefault()
    setIsLoading(true)

    const validationErrors = checkRegistration(
      formData.login,
      formData.email,
      formData.password,
      formData.passwordRepeat,
    )

    setErrorsState(validationErrors)

    if(Object.values(validationErrors).some(error => error !== "")) {
      setIsLoading(false)

      if(validationErrors.loginError) {
        loginInput.current.focus()
        return
      } else if(validationErrors.emailError) {
        emailInput.current.focus()
        return
      } else if(validationErrors.passwordError) {
        passwordInput.current.focus()
        return
      } else if(validationErrors.passwordRepeatError) {
        passwordRepeatInput.current.focus()
        return
      } else {
        return
      }
    }

    try{
      const response = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          login: formData.login,
          password: formData.password
        })
      })

      let data = {}
      try {
        data = await response.json()
      } catch {

      }

      if(!response.ok || data.error) {
        if(data.error === responsesTypes.userAlreadyExist) {
          setErrorsState(prevState => ({
            ...prevState,
            serverError: errorsTypes.alreadyExist
          }))
        } else {
          setErrorsState(prevState => ({
            ...prevState,
            serverError: errorsTypes.serverConnect
          }))
        }
        return
      }

      if(!data.error) {
        setShowConfirmation(true)
      }

    } catch(error) {
      console.log("Ошибка сети: ", error)
      setErrorsState(prevState => ({
        ...prevState,
        serverError: errorsTypes.serverError
      }))
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = ((event) => {
    const {name, value, checked, type} = event.target

    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }))

    if(type !== "checkbox") {
      setErrorsState(prevState => ({
        ...prevState,
        [`${name}Error`]: ""
      }))
    }
  })

  const backToForm = () => {
    setShowConfirmation(false)
  }

  if(showConfirmation) {
    return (
      <>
        <div className={styles.confirmation}>
          <div className={styles.linkContainer}>
            <span
              className={styles.linkForm}
              onClick={backToForm}
            >
            Назад
          </span>
          </div>
          <div className={styles.confirmationDown}>
            <p className={styles.confirmationText}>
              Мы отправили письмо на <span className={styles.accent}>{formData.email}!</span> Перейдите по ссылке в письме для подтверждения аккаунта.
            </p>
            <SubmitButton>
              <Link
                to={"/"}
                className={styles.linkToMain}
              >
                На главную
              </Link>
            </SubmitButton>
          </div>
        </div>
      </>
    )
  }

  return(
    <form
      onSubmit={submitData}
      className={styles.mainForm}
      noValidate
      autoComplete={"off"}
    >
      <div className={styles.mainFormUp}>
        <div className={styles.errorBlock}>
          <p className={styles.error}>{errorsState.loginError || errorsState.serverError}</p>
          <LoginInput
            type={"text"}
            minLength={3}
            maxLength={20}
            placeholder={"Логин"}
            name={"login"}
            value={formData.login}
            onChange={handleChange}
            ref={loginInput}
            isRed={errorsState.loginError}
          />
        </div>
        <div className={styles.errorBlock}>
          <p className={styles.error}>{errorsState.emailError}</p>
          <LoginInput
            type={"email"}
            minLength={10}
            maxLength={40}
            placeholder={"Почта"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
            ref={emailInput}
            isRed={errorsState.emailError}
          />
        </div>
        <div className={styles.errorBlock}>
          <p className={styles.error}>{errorsState.passwordError}</p>
          <PasswordInput
            minLength={8}
            maxLength={20}
            placeholder={"Пароль"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
            ref={passwordInput}
            isRed={errorsState.passwordError}
          />
        </div>
        <div className={styles.errorBlock}>
          <p className={styles.error}>{errorsState.passwordRepeatError}</p>
          <PasswordInput
            minLength={8}
            maxLength={20}
            placeholder={"Пароль (ещё раз)"}
            name={"passwordRepeat"}
            value={formData.passwordRepeat}
            onChange={handleChange}
            ref={passwordRepeatInput}
            isRed={errorsState.passwordRepeatError}
          />
        </div>
      </div>
      <div className={styles.mainFormDown}>
        <CheckBox
          text={"Я ознакомлен(а) с политикой конфиденциальности и даю согласие на "}
          link={"обработку своих персональных данных"}
          name={"agreement"}
          onChange={handleChange}
          checked={formData.agreement}
          value={"согласен"}
        />
        <SubmitButton
          isLoading={isLoading}
          disabled={!formData.agreement}
          type={"submit"}
        >
          {isLoading ? "Загрузка...": "Отправить"}
        </SubmitButton>
      </div>
    </form>
  )
}

export default SignUp