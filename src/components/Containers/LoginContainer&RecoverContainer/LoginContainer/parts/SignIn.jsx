import styles from "./Parts.module.css"
import {useCallback, useRef, useState} from "react";
import LoginInput from "@components/UI/LoginComponents/LoginInput";
import PasswordInput from "@components/UI/LoginComponents/PasswordInput";
import {Link, useNavigate} from "react-router-dom";
import SubmitButton from "@components/UI/LoginComponents/SubmitButton/SubmitButton";
import {setCookie} from "@/scripts/Functions/setCookie"
import {responsesTypes} from "@/constants/Request/responsesTypes";
import {errorsTypes} from "@/constants/Request/errorsTypes";
import {signIn} from "@/services/signIn";
import {useProfileToken} from "@/store/useProfileToken";

function SignIn() {
  const errorLogin = useRef(null)
  const errorPassword = useRef(null)
  const {auth} = useProfileToken()

  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({
    loginError: "",
    passwordError: ""
  })
  const [formData, setFormData] = useState({
    login: "",
    password: ""
  })

  const clearErrors = useCallback(() => {
    setErrors({
      loginError: "",
      passwordError: ""
    })
  }, [])

  const navigate = useNavigate()

  const submitData = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    clearErrors()

    try{
      const {ok, data} = await signIn(formData.login, formData.password)
      if(!ok || data.error) {
        if(data.error === responsesTypes.wrongPassword) {
          setErrors({
            loginError: "",
            passwordError: errorsTypes.wrongPassword
          })
          errorPassword.current.focus()
        } else if (data.error === responsesTypes.userNotFound) {
          setErrors({
            loginError: errorsTypes.userNotFound,
            passwordError: ""
          })
          errorLogin.current.focus()
        } else {
          setErrors({
            loginError: errorsTypes.serverConnect,
            passwordError: ""
          })
        }
        return
      }

      if(data.result) {
        setCookie("auth", data.result, 30)
        auth()
        navigate("/", {replace: true})
      }

    } catch (error) {
      console.error("Ошибка сети: ", error)
      setErrors({
        loginError: errorsTypes.serverError,
        passwordError: ""
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = ((event) => {
    if(errors.passwordError || errors.loginError) {
     clearErrors()
    }
    const {name, value} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  })

  return(
    <form
      onSubmit={submitData}
      className={styles.mainForm}
      noValidate
      autoComplete={"on"}
    >
      <div className={styles.mainFormUp}>
        <div className={styles.errorBlock}>
          <p className={styles.error}>{errors.loginError}</p>
          <LoginInput
            type={"text"}
            minLength={3}
            maxLength={50}
            placeholder={"Логин или почта"}
            name={"login"}
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
            placeholder={"Пароль"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
            ref={errorPassword}
            isRed={errors.passwordError}
          />
        </div>
        <Link
          className={styles.linkForm}
          to={"/recover"}
        >
          Не помню пароль
        </Link>
      </div>
      <div
        className={styles.mainFormDown}
      >
        <SubmitButton
          disabled={(formData.password.length < 8) || (formData.login.length < 3) || isLoading}
          type={"submit"}
        >
          {isLoading ? "Загрузка..." : "Войти"}
        </SubmitButton>
      </div>
    </form>
  )
}

export default SignIn