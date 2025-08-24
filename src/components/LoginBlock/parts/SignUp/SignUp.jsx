import styles from "../Parts.module.css"
import LoginInput from "@components/UI/LoginComponents/LoginInput";
import {useRef, useState} from "react";
import PasswordInput from "@components/UI/LoginComponents/PasswordInput";
import SubmitButton from "@components/UI/LoginComponents/SubmitButton";
import CheckBox from "@components/UI/LoginComponents/CheckBox";
import {checkRegistration} from "@/scripts/checkRegistration";
import {setCookie} from "@/scripts/setCookie";
import {useNavigate} from "react-router-dom";

function SignUp() {
  const loginInput = useRef(null)
  const emailInput = useRef(null)
  const passwordInput = useRef(null)
  const passwordRepeatInput = useRef(null)

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

  const navigate = useNavigate()

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
      const response = await fetch("./api/v1/auth/register", {
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
        if(data.error === "user already exist") {
          setErrorsState(prevState => ({
            ...prevState,
            serverError: "У данной почты уже зарегистрирован аккаунт"
          }))
        } else {
          setErrorsState(prevState => ({
            ...prevState,
            serverError: "Ошибка соединения с сервером, повторите попытку позже"
          }))
        }
        return
      }

      if(data.result) {
        setCookie("auth", data.result, 30)
        navigate("/", {replace: true})
      }

    } catch(error) {
      console.log("Ошибка сети: ", error)
      setErrorsState(prevState => ({
        ...prevState,
        serverError: "Ошибка на стороне сервера, повторите попытку позже"
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

    setErrorsState(prevState => ({
      ...prevState,
      [`${name}Error`]: ""
    }))
  })

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
        >
          {isLoading ? "Загрузка...": "Отправить"}
        </SubmitButton>
      </div>
    </form>
  )
}

export default SignUp