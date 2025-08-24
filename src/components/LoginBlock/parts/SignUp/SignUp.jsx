import styles from "../Parts.module.css"
import LoginInput from "@components/UI/LoginComponents/LoginInput";
import {useState} from "react";
import PasswordInput from "@components/UI/LoginComponents/PasswordInput";
import SubmitButton from "@components/UI/LoginComponents/SubmitButton";
import CheckBox from "@components/UI/LoginComponents/CheckBox";
import {checkRegistration} from "@/scripts/checkRegistration";
import {setCookie} from "@/scripts/setCookie";
import {useNavigate} from "react-router-dom";

function SignUp() {
  const [serverError, setServerError] = useState("")
  const [errorsWrite, setErrorsWrite] = useState({
    loginError: "",
    emailError: "",
    passwordError: "",
    passwordRepeatError: ""
  })
  const [isLoading, setIsLoading] = useState(false)
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
      formData.passwordRepeat
    )

    setErrorsWrite(validationErrors)
    console.log(errorsWrite)

    if(Object.values(validationErrors).some(error => error !== "")) {
      setIsLoading(false)
      return
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
        if(data.error === "user already exist") {
          setServerError("У данной почты уже зарегистрирован аккаунт")
        } else {
          setServerError("Ошибка соединения с сервером, повторите попытку позже")
        }
        return
      }

      if(data.result !== null) {
        setCookie("auth", data.result, 30)
        navigate("/", {replace: true})
      }

    } catch(error) {
      console.log("Ошибка сети: ", error)
      setServerError("Ошибка на стороне сервера, повторите попытку позже")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = ((event) => {
    if(serverError) {
      setServerError("")
    }
    const {name, value, checked, type} = event.target

    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
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
          <p className={styles.error}>{errorsWrite.loginError || serverError}</p>
          <LoginInput
            type={"text"}
            minLength={3}
            maxLength={20}
            placeholder={"Логин"}
            name={"login"}
            value={formData.login}
            onChange={handleChange}
          />
        </div>
        <div className={styles.errorBlock}>
          <p className={styles.error}>{errorsWrite.emailError}</p>
          <LoginInput
            type={"email"}
            minLength={10}
            maxLength={40}
            placeholder={"Почта"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.errorBlock}>
          <p className={styles.error}>{errorsWrite.passwordError}</p>
          <PasswordInput
            minLength={8}
            maxLength={20}
            placeholder={"Пароль"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.errorBlock}>
          <p className={styles.error}>{errorsWrite.passwordRepeatError}</p>
          <PasswordInput
            minLength={8}
            maxLength={20}
            placeholder={"Пароль (ещё раз)"}
            name={"passwordRepeat"}
            value={formData.passwordRepeat}
            onChange={handleChange}
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