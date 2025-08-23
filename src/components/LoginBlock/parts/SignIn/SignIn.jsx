import styles from "../Parts.module.css"
import {useCallback, useRef, useState} from "react";
import LoginInput from "@components/UI/LoginComponents/LoginInput";
import PasswordInput from "@components/UI/LoginComponents/PasswordInput";
import {Link, useNavigate} from "react-router-dom";
import SubmitButton from "@components/UI/LoginComponents/SubmitButton";
import {setCookie} from "@/scripts/setCookie"

function SignIn() {
  const errorLogin = useRef(null)
  const errorPassword = useRef(null)

  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState("")
  const [formData, setFormData] = useState({
    login: "",
    password: ""
  })

  const navigate = useNavigate()

  const submitData = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setErrors("")

    try{
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify({
          login_or_email: formData.login,
          password: formData.password
        })
      })

      let data = {}

      try{
        data = await response.json()
      } catch {
        data = {}
      }

      if(!response.ok || data.error) {
        if(data.error === "wrong password") {
          setErrors("Неверный пароль")
          errorPassword.current.focus()
        } else if (data.error === "user not found") {
          setErrors("Пользователь не найден")
          errorLogin.current.focus()
        } else {
          setErrors("Ошибка соединения с сервером, повторите попытку позже")
        }
        return
      }

      if(data.result) {
        setCookie("auth", data.result, 30)
        navigate("/", {replace: true})
      }

    } catch (error) {
      console.error("Ошибка сети", error)
      setErrors("Сервер не доступен, повторите попытку позже")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = ((event) => {
    if(errors) {
      setErrors("")
    }
    const {name, value, type, checked} = event.target
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
          {errors !== "Неверный пароль" && (
            <p className={styles.error}>{errors}</p>
          )}
          <LoginInput
            type={"text"}
            minLength={3}
            maxLength={50}
            placeholder={"Логин или почта"}
            name={"login"}
            value={formData.login}
            onChange={handleChange}
            ref={errorLogin}
          />
        </div>
        <div className={styles.errorBlock}>
          {errors === "Неверный пароль" && (
            <p className={styles.error}>{errors}</p>
          )}
          <PasswordInput
            minLength={8}
            maxLength={20}
            placeholder={"Пароль"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
            ref={errorPassword}
          />
        </div>
        <Link
          className={styles.linkToRecover}
          to={"/recover"}
        >
          Не помню пароль
        </Link>
      </div>
      <div
        className={styles.mainFormDown}
      >
        <SubmitButton
          disabled={(formData.password.length < 8) || (formData.login.length < 3)}
        >
          Войти
        </SubmitButton>
      </div>
    </form>
  )
}

export default SignIn